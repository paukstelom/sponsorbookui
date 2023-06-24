'use client'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'
import { closeOneEvent, deleteOneEvent } from 'sponsorbook/clients/sponsorbook'
import { Eventer, Ticket } from 'sponsorbook/clients/sponsorbook/models'

export type EventPageProps = {
    event: Eventer
    tickets: Ticket[]
}

export default function EventPageComponent({ event, tickets }: EventPageProps) {
    const onClickCloseEvent = async () => {
        await closeOneEvent(event._id)
    }

    const router = useRouter()

    const onClickDeleteEvent = async () => {
        await deleteOneEvent(event._id)
        router.push('/events')
    }

    return (
        <>
            <Button onClick={onClickCloseEvent}>Close event</Button>
            <Button onClick={onClickDeleteEvent}>Delete event</Button>
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
