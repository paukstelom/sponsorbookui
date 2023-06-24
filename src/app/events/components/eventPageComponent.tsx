import { Eventer, Ticket } from 'sponsorbook/clients/sponsorbook/models'

export type EventPageProps = {
    event: Eventer
    tickets: Ticket[]
}

export default function EventPageComponent({ event, tickets }: EventPageProps) {
    return (
        <>
            <div>
                <h1>Event name: {event.name}</h1>
                <h2>Event description: {event.description}</h2>
                <h2>Event status: {event.status}</h2>
            </div>
            <div>
                <h1>Event tickets:</h1>
                <h1>
                    {tickets.map((ticket) => (
                        <div key={ticket._id}>{ticket._id}</div>
                    ))}
                </h1>
            </div>
        </>
    )
}
