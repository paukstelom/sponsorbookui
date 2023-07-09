'use client'
import {
    CloseOutlined,
    DeleteOutlined,
    ExclamationCircleFilled,
} from '@ant-design/icons'
import { ProCard, ProDescriptions, ProList } from '@ant-design/pro-components'
import { Button, Modal, Popover, Progress, Space, Tag, message } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactText, useRef, useState } from 'react'
import sponsorbook from 'sponsorbook/clients/sponsorbook'
import { Eventer, Ticket } from 'sponsorbook/clients/sponsorbook/models'

const tempDataSource = {
    _id: '1',
    name: 'Atviru duru dienos',
    status: 'Ongoing',
    subOrganizations: [
        'Elektronikos fakultetas',
        'Fundamentiniu mokslu fakultetas',
        'Matematikos fakultetas',
    ],
    ticket: ['Ticket id 1', 'Ticket id 2', 'Ticket id 3'],
    info: 'Information abut the event',
}

const dataSource = [
    {
        title: 'RedBull',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    },
    {
        title: 'Monster',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    },
    {
        title: 'Durex',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    },
    {
        title: 'TechUI',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    },
]

export default function EventPageComponent() {
    const { confirm } = Modal
    const eventTableRef = useRef<any>()
    // const subOrganizations = await sponsorbook().getSubOrgs()
    const [expandedRowKeys, setExpandedRowKeys] = useState<
        readonly ReactText[]
    >([])

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

    const dataDisplay = [
        {
            title: 'Name',
            dataIndex: 'name',
            valueType: 'text',
        },

        {
            title: 'options',
            valueType: 'option',
            render: () => [
                <Popover content="Close" key="close">
                    <Button size="small" onClick={() => handleClose(event)}>
                        <CloseOutlined />
                    </Button>
                </Popover>,
                <Popover content="Delete" key="delete">
                    <Button size="small" onClick={() => handleDelete(event)}>
                        <DeleteOutlined />
                    </Button>
                </Popover>,
            ],
        },
    ]
    return (
        <>
            <ProCard.Group wrap gutter={[16, 16]} ghost>
                <ProCard
                    colSpan={{
                        xs: 24,
                        sm: 24,
                        md: 24,
                        lg: 24,
                        xl: 12,
                        xxl: 12,
                    }}
                    style={{ minHeight: '65vh' }}
                >
                    <ProDescriptions
                        title="Event details"
                        dataSource={tempDataSource}
                        columns={dataDisplay}
                    />
                </ProCard>
                <ProCard
                    colSpan={{
                        xs: 24,
                        sm: 24,
                        md: 24,
                        lg: 24,
                        xl: 12,
                        xxl: 12,
                    }}
                    style={{ minHeight: '65vh', maxHeight: '65vh' }}
                >
                    <ProList
                        options={{
                            search: true,
                            reload: false,
                            setting: false,
                            density: false,
                        }}
                        style={{
                            height: '300px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        tableStyle={{
                            height: '300px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        scroll={{ y: 300 }}
                        rowKey="title"
                        headerTitle="Sponsors"
                        expandable={{
                            expandedRowKeys,
                            onExpandedRowsChange: setExpandedRowKeys,
                        }}
                        dataSource={dataSource}
                        metas={{
                            title: {},
                            subTitle: {
                                render: () => {
                                    return (
                                        <Space size={0}>
                                            <Tag color="#5BD8A6">Ongoing</Tag>
                                        </Space>
                                    )
                                },
                            },
                            description: {
                                render: () => {
                                    return 'Ant Design, a design language for background applications, is refined by Ant UED Team'
                                },
                            },
                            avatar: {},
                            content: {},
                            actions: {
                                render: () => {
                                    return <a key="invite">Button?</a>
                                },
                            },
                        }}
                    />
                </ProCard>
            </ProCard.Group>
        </>
    )
}
