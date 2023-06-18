'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Contact, Rating } from 'sponsorbook/app/sponsors/new/page'
import { deleteOneEvent } from 'sponsorbook/clients/sponsorbook'

export type Eventer = {
    _id: string
    name: string
    description: string
}

export type EventCardProps = {
    event: Eventer
}

export default function EventCard({ event }: EventCardProps) {
    const router = useRouter()

    const onSubmit = async () => {
        await deleteOneEvent(event._id)
        router.refresh()
    }
    console.log(event)

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{event.name}</h5>
                    <p className="card-text">{event.description}</p>
                    <a href="#" className="btn btn-primary">
                        Click
                    </a>
                </div>
            </div>
        </>
    )
}
