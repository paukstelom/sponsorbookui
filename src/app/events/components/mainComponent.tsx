'use client'
import { Button, Modal, Popover, Space, Tag, message } from 'antd'
import { useRef, useState } from 'react'

import {
    Eventer,
    SubOrganization,
} from 'sponsorbook/clients/sponsorbook/models'

import {
    CloseCircleOutlined,
    CloseOutlined,
    DeleteColumnOutlined,
    DeleteOutlined,
    ExclamationCircleFilled,
    FolderOpenOutlined,
    PlusOutlined,
    TeamOutlined,
} from '@ant-design/icons'
import { PageContainer, ProList } from '@ant-design/pro-components'
import { useRouter } from 'next/navigation'
import { render } from 'react-dom'
import sponsorbook from 'sponsorbook/clients/sponsorbook'
import AddEventModal from './eventNewModal'

const dataSource = [
    {
        _id: '1',
        name: 'Atviru duru dienos',
        status: 'Ongoing',
        subOrganizations: [
            'Elektronikos fakultetas',
            'Fundamentiniu mokslu fakultetas',
            'Matematikos fakultetas',
        ],
        info: 'Information abut the event',
    },
    {
        name: 'Stofke',
        status: 'Ongoing',
        subOrganizations: ['Elektronikos ', 'Fundamentu'],
        info: 'Information abut the event',
    },
    {
        name: 'Kursu pristatymai',
        status: 'Closed',
        subOrganizations: [
            'Elektronikos fakultetas',
            'Fundamentiniu mokslu fakultetas',
            'Matematikos fakultetas',
        ],
        info: 'Information abut the event',
    },
    {
        name: 'Olimpiada',
        status: 'Closed',
        subOrganizations: ['Matematikos fakultetas'],
        info: 'Information abut the event',
    },
    {
        name: 'Knygu diena',
        status: 'Closed',
        subOrganizations: [
            'Fundamentiniu mokslu fakultetas',
            'Matematikos fakultetas',
        ],
        info: 'Information abut the event',
    },
]

const handleRequest = async () => {
    let response = await sponsorbook().getEvents()
    if (response.ok) {
        return response.json()
    } else {
        return []
    }
}

const temporarySuborganizations = [
    {
        name: 'Elektronikos',
        description: 'Very nice',
    },
] as SubOrganization[]

export default function EventsPageComponent() {
    const { confirm } = Modal
    const router = useRouter()
    const eventTableRef = useRef<any>()
    // const subOrganizations = await sponsorbook().getSubOrgs()

    const handleClose = (event: any) => {
        confirm({
            centered: true,
            title: `Attention!`,
            icon: <ExclamationCircleFilled />,
            content: `Are you sure close ${event.name}?`,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: async () => {
                // const res = await sponsorbook().deleteOneEvent(event._id)
                let res = { ok: true }
                if (res.ok) {
                    message.success('Event closed succesfully')
                    eventTableRef.current?.reload()
                } else {
                    // const response = await res.json()
                    let response = { detail: 'Error' }
                    message.error(response.detail)
                }
            },
        })
    }

    const handleDelete = async (event: any) => {
        confirm({
            centered: true,
            title: `Attention!`,
            icon: <ExclamationCircleFilled />,
            content: `Are you sure delete ${event.name}?`,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: async () => {
                // const res = await sponsorbook().deleteOneEvent(event._id)
                let res = { ok: true }
                if (res.ok) {
                    message.success('Event deleted succesfully')
                    eventTableRef.current?.reload()
                } else {
                    // const response = await res.json()
                    let response = { detail: 'Error' }
                    message.error(response.detail)
                }
            },
        })
    }

    return (
        <ProList<Eventer>
            actionRef={eventTableRef}
            options={{
                search: true,
                setting: false,
                reload: true,
                density: false,
            }}
            ghost={true}
            pagination={{
                pageSize: 2,
            }}
            toolBarRender={() => {
                return [
                    <AddEventModal
                        key=""
                        subOrganizations={temporarySuborganizations}
                        ref={eventTableRef}
                    />,
                ]
            }}
            metas={{
                title: {
                    dataIndex: 'name',

                    render: (name, event) => {
                        return <Popover content={event.info}>{name}</Popover>
                    },
                },
                subTitle: {
                    render: (_, event) => (
                        <Space>
                            <Tag
                                color={
                                    event.status === 'Closed' ? 'red' : 'green'
                                }
                            >
                                {event.status}
                            </Tag>
                        </Space>
                    ),
                },
                type: {},
                avatar: { render: () => <TeamOutlined /> },
                content: { render: () => 'content render' },
                actions: {
                    render: (_, event) => [
                        <Popover content="Open" key="open">
                            <Button
                                size="small"
                                onClick={() =>
                                    router.push(`events/${event._id}`)
                                }
                            >
                                <FolderOpenOutlined />
                            </Button>
                        </Popover>,
                        <Popover content="Close" key="close">
                            <Button
                                size="small"
                                onClick={() => handleClose(event)}
                            >
                                <CloseOutlined />
                            </Button>
                        </Popover>,
                        <Popover content="Delete" key="delete">
                            <Button
                                size="small"
                                onClick={() => handleDelete(event)}
                            >
                                <DeleteOutlined />
                            </Button>
                        </Popover>,
                    ],
                },
            }}
            showActions="hover"
            itemCardProps={{
                style: {
                    height: '50vh',
                },
            }}
            // scroll={{ y: '50vh' }}
            grid={{
                gutter: 16,
                xs: 1,
                sm: 1,
                md: 1,
                lg: 2,
                xl: 2,
                xxl: 3,
            }}
            // request={handleRequest}
            dataSource={dataSource}
        ></ProList>
    )
}
