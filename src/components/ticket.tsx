'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Contact, Rating } from 'sponsorbook/app/sponsors/new/page'
import { deleteOneSponsor } from 'sponsorbook/clients/sponsorbook'

export type Ticket = {
    _id: string
    name: string
}

export type TicketCardProps = {
    ticket: Ticket
}

export default function TicketLine({ ticket }: TicketCardProps) {
    const router = useRouter()
    const [clicked, setClicked] = useState(false)

    return (
        <>
            <tr onClick={() => setClicked((x) => !x)}>
                <td className="text-center">{ticket.name}</td>
                <td className="text-center">hello</td>
                <td className="text-center">hello</td>
                <td className="text-center">hello</td>
                <td className="text-center">hello</td>
            </tr>
            <tr className={`collapse ${clicked ? 'show' : ''}`}>
                <td colSpan={5}>
                    <div className=" ">
                        Some placeholder content for the collapse component.
                        This panel is hidden by default but revealed when the
                        user activates the relevant trigger {ticket.name}.
                    </div>
                </td>
            </tr>
        </>
    )
}
