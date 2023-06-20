import {
    getOneEvent,
    getTickets,
    getTicketsForEvent,
} from 'sponsorbook/clients/sponsorbook'
import { Ticket } from 'sponsorbook/clients/sponsorbook/models'
import EventPageComponent from 'sponsorbook/components/eventsPage/eventPage/eventPageComponent'

export default async function SingleEventPage({
    params,
}: {
    params: { eventId: string }
}) {
    const eventData = await getOneEvent(params.eventId)
    const ticketData = await getTicketsForEvent(params.eventId)

    const event = await eventData.json()
    const tickets = (await ticketData.json()) as Ticket[]

    return <EventPageComponent event={event} tickets={tickets} />
}
