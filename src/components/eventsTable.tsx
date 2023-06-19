'use client'
import { Button, Modal, Table } from 'antd'
import { Eventer } from 'sponsorbook/components/eventCard'
import { useState } from 'react'
import NewEventComponent from 'sponsorbook/components/eventNewComponent'
import { SubOrganization } from 'sponsorbook/clients/sponsorbook/models'

export type EventsTableProps = {
    events: Eventer[]
    subOrganizations: SubOrganization[]
}

export default function EventsTable({
    events,
    subOrganizations,
}: EventsTableProps) {
    const [isCreationModalOpen, setIsCreationModalOpen] = useState(false)
    const openCreationModal = () => setIsCreationModalOpen(true)
    const closeCreationModal = () => setIsCreationModalOpen(false)

    const columns = [
        { title: 'Event name', dataIndex: 'name', key: 'name' },
        { title: 'Status', dataIndex: 'status', key: 'status' },
        { title: 'Description', dataIndex: 'description', key: 'description' },
    ]

    const dataSource = events.map((event) => ({
        key: event._id,
        name: event.name,
        status: event.status,
        description: event.description,
    }))

    return (
        <>
            <Modal
                open={isCreationModalOpen}
                footer={null}
                onCancel={closeCreationModal}
            >
                <NewEventComponent subOrganizations={subOrganizations} />
            </Modal>
            <Button onClick={openCreationModal}>Create</Button>
            <Table dataSource={dataSource} columns={columns}></Table>
        </>
    )
}
