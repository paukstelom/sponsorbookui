'use client'
import { Button, Card, Col, List, Modal, Row } from 'antd'
import { useState } from 'react'
import NewEventComponent from './eventNewComponent'
import { SubOrganization } from 'sponsorbook/clients/sponsorbook/models'
import { useRouter } from 'next/navigation'

export type Eventer = {
    _id: string
    name: string
    status: string
    description: string
}

export type EventCollectionProps = {
    events: Eventer[]
    subOrganizations: SubOrganization[]
}

export default function EventCollection({
    events,
    subOrganizations,
}: EventCollectionProps) {
    const router = useRouter()
    const [isCreationModalOpen, setIsCreationModalOpen] = useState(false)
    const [isEventModalOpen, setEventModalOpen] = useState(false)

    return (
        <>
            {/* OPEN CREATE WINDOW */}
            <Modal
                open={isCreationModalOpen}
                footer={null}
                onCancel={() => setIsCreationModalOpen(false)}
            >
                <NewEventComponent subOrganizations={subOrganizations} />
            </Modal>
            <Button onClick={() => setIsCreationModalOpen(true)}>Create</Button>

            {/* EXPAND EVENT INFORMATION */}

            <Modal
                width="40%"
                title="Event info"
                open={isEventModalOpen}
                centered={true}
                onCancel={() => setEventModalOpen(false)}
                footer={[<Button key="create">Button</Button>]}
            >
                hello
            </Modal>

            {/* LIST OF EVENTS */}

            <h2>Ongoing</h2>
            <List
                grid={{ gutter: 40, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }}
                dataSource={events.filter(
                    (event) => event.status === 'Ongoing'
                )}
                renderItem={(event) => (
                    <>
                        <List.Item>
                            <Card
                                hoverable
                                title={event.name}
                                bordered={false}
                                style={{ height: '400px' }}
                                onClick={() =>
                                    router.push(`/events/${event._id}`)
                                }
                            >
                                {event.description}
                            </Card>
                        </List.Item>
                    </>
                )}
            ></List>
            <h2>Closed</h2>
            <List
                grid={{ gutter: 40, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }}
                dataSource={events.filter((event) => event.status === 'Closed')}
                renderItem={(event) => (
                    <>
                        <List.Item>
                            <Card
                                hoverable
                                title={event.name}
                                bordered={false}
                                style={{ height: '400px' }}
                                onClick={() =>
                                    router.push(`/events/${event._id}`)
                                }
                            >
                                {event.description}
                            </Card>
                        </List.Item>
                    </>
                )}
            ></List>
        </>
    )
}
