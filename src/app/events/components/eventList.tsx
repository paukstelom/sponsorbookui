'use client'
import { Card, List } from 'antd'
import { useRouter } from 'next/navigation'
import { Eventer } from 'sponsorbook/clients/sponsorbook/models'

export type EventListProps = {
    events: Eventer[]
}

export default function EventList({ events }: EventListProps) {
    const router = useRouter()

    return (
        <>
            <List
                grid={{ gutter: 40, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }}
                dataSource={events}
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
