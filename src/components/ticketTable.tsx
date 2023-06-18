'use client'
import { useState } from 'react'
import SponsorLine, { Sponsor } from './sponsor'
import TicketLine, { Ticket } from './ticket'

export type TicketTableProps = {
    tickets: Ticket[]
}

export default function TicketTable({ tickets }: TicketTableProps) {
    return (
        <>
            <div
                className="table-responsive mt-4 rounded-4"
                style={{ height: '500px' }}
            >
                <table className="table table-hover align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th className="text-center" scope="col">
                                Sponsor name
                            </th>
                            <th className="text-center" scope="col">
                                Status
                            </th>
                            <th className="text-center" scope="col">
                                Assignee
                            </th>
                            <th className="text-center" scope="col">
                                _Blank_
                            </th>
                            <th className="text-center" scope="col">
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((Ticket) => (
                            <TicketLine key={Ticket._id} ticket={Ticket} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
