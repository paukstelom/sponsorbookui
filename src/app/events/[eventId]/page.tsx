import sponsorbook from 'sponsorbook/clients/sponsorbook'
import { Ticket } from 'sponsorbook/clients/sponsorbook/models'
import EventPageComponent from './components/mainComponent'
import useSessionCookie from 'sponsorbook/utils/useSessionCookie'

export default async function SingleEventPage({
    params,
}: {
    params: { eventId: string }
}) {
    // const sb = sponsorbook(useSessionCookie())

    // const eventData = await sb.getOneEvent(params.eventId)
    // const ticketData = await sb.getTicketsForEvent(params.eventId)

    // const event = await eventData.json()
    // const tickets = (await ticketData.json()) as Ticket[]

    // return <EventPageComponent event={event} tickets={tickets} />
    return <EventPageComponent></EventPageComponent>
}
