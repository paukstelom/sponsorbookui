'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Contact, Rating } from 'sponsorbook/app/sponsors/new/page'
import { closeOneEvent, deleteOneEvent } from 'sponsorbook/clients/sponsorbook'

export type Eventer = {
    _id: string
    name: string
    status: string
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

    const onClose = async () => {
        await closeOneEvent(event._id)
        router.refresh()
    }

    return (
        <div className="">
            <div className="card" style={{ width: '300px', height: '400px' }}>
                <div className="card-body">
                    <h5 className="card-title">{event.name}</h5>
                    <p className="card-text">{event.description}</p>
                    <div className="dropdown">
                        <button
                            className="btn dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        ></button>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    className="dropdown-item"
                                    href={`/events/${event._id}`}
                                >
                                    View
                                </Link>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    type="submit"
                                    onClick={onClose}
                                >
                                    Close
                                </a>
                            </li>
                            <li>
                                <button
                                    className="dropdown-item"
                                    type="submit"
                                    onClick={onSubmit}
                                >
                                    Delete
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
