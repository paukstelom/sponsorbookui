'use client'
import { Button, Modal } from 'antd'
import { useState } from 'react'
import NewEventForm from './eventNewForm'
import {
    Eventer,
    SubOrganization,
} from 'sponsorbook/clients/sponsorbook/models'
import EventList from './eventList'

export type EventCollectionProps = {
    events: Eventer[]
    subOrganizations: SubOrganization[]
}

export default function EventsPageComponent({
    events,
    subOrganizations,
}: EventCollectionProps) {
    const [isCreationModalOpen, setIsCreationModalOpen] = useState(false)

    return (
        <>
            <Modal
                open={isCreationModalOpen}
                footer={null}
                onCancel={() => setIsCreationModalOpen(false)}
            >
                <NewEventForm subOrganizations={subOrganizations} />
            </Modal>
            <Button onClick={() => setIsCreationModalOpen(true)}>Create</Button>

            <h2>Ongoing</h2>
            <EventList
                events={events.filter((event) => event.status === 'Ongoing')}
            />
            <h2>Closed</h2>
            <EventList
                events={events.filter((event) => event.status === 'Closed')}
            />
        </>
    )
}
