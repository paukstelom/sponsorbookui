import router from 'next/navigation'
import { Sponsor } from 'sponsorbook/components/sponsor'
import { getOneEvent, getOneSponsor } from 'sponsorbook/clients/sponsorbook'
import { Eventer } from 'sponsorbook/components/eventCard'
import TicketTable from 'sponsorbook/components/ticketTable'

export default async function Event({
    params,
}: {
    params: { eventId: string }
}) {
    const data = await getOneEvent(params.eventId)
    const event = (await data.json()) as Eventer

    return (
        <>
            <h1>Name: {event.name}</h1>
            <h4>Status: {event.status}</h4>
            <h4>Desciprtion {event.description}</h4>
            <h1>Tickets: </h1>
            <button
                type="button"
                className="btn btn-secondary"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                data-bs-content="Bottom popover"
            >
                Popover on bottom
            </button>
            <TicketTable tickets={[]} />
        </>
    )
}
