import { getOneEvent } from 'sponsorbook/clients/sponsorbook'
import EventPageComponent from 'sponsorbook/components/eventsPage/eventPage/eventPageComponent'

export default async function SingleEventPage({
    params,
}: {
    params: { eventId: string }
}) {
    const data = await getOneEvent(params.eventId)

    return <EventPageComponent />
}
