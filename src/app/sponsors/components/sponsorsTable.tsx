'use client'

import { DeleteOutlined, SolutionOutlined } from '@ant-design/icons'
import { ProColumns, ProTable } from '@ant-design/pro-components'
import { Button, Popover, Rate, Space, Tag } from 'antd'
import { useRouter } from 'next/navigation'
import sponsorbook from 'sponsorbook/clients/sponsorbook'
import { Category, Sponsor } from 'sponsorbook/clients/sponsorbook/models'
import ContactTable from './contactTable'
import AddSponsorModal from './sponsorAddModal'

const executeRequest = async ({}) => {
    const result = await sponsorbook().getSponsors()
    const data = await result.json()
    return Promise.resolve({ data, success: true })
}

const requestCategories = async () => {
    const response = await sponsorbook().getCategories()
    const categories = await response.json()
    const formattedCategories = categories.map((category: Category) => ({
        label: category.name,
        value: category._id,
    }))

    return formattedCategories
}

export default function SponsorsTable() {
    const categories = requestCategories()

    const router = useRouter()

    const columns: ProColumns<Sponsor>[] = [
        {
            title: 'Name',
            width: '150px',
            align: 'center',
            dataIndex: 'name',

            render: (_, sponsor) => (
                <Popover trigger={'hover'} content={sponsor.description}>
                    {_}
                </Popover>
            ),
        },
        {
            title: 'Website',
            width: '150px',
            align: 'center',
            dataIndex: 'website',
            render: (_, spons) => <a href={spons.website}>{spons.website}</a>,
        },
        {
            title: 'Category',
            width: '150px',
            align: 'center',
            filters: true,
            onFilter: true,
            valueType: 'select',
            dataIndex: 'categories',
            render: (_, sponsor) => (
                <Space>
                    {sponsor.categories.map((category) => (
                        <Tag color="blue" key={category}>
                            {_}{' '}
                            {/* {_.find((c) => c._id === category)?.name} */}
                        </Tag>
                    ))}
                </Space>
            ),
        },
        {
            title: 'Status',
            width: '150px',
            align: 'center',
            dataIndex: 'status',
            sorter: (a, b) => a.status.length - b.status.length,
            render: (status) => {
                let color: string = ''
                if (status === 'Available') {
                    color = 'green'
                } else if (status === 'Waiting') {
                    color = 'yellow'
                } else if (status === 'Not available') {
                    color = 'volcano'
                }
                return <Tag color={color}>{status}</Tag>
            },
        },
        {
            title: 'Rating',
            width: '150px',
            align: 'center',
            dataIndex: ['rating', 'score'],
            sorter: (a, b) => a.rating.score - b.rating.score,
            render: (_, sponsor) => (
                <Popover trigger={'hover'} content={sponsor.rating.info}>
                    <Rate disabled defaultValue={sponsor.rating.score} />
                </Popover>
            ),
        },

        {
            title: '',
            width: '150px',
            align: 'center',
            valueType: 'rate',
            render: (_, sponsor) => [
                <Button
                    type="ghost"
                    key="1"
                    onClick={() => router.push(`/sponsors/${sponsor._id}`)}
                >
                    <SolutionOutlined />
                </Button>,
                <Button type="ghost" key="2">
                    <DeleteOutlined />
                </Button>,
            ],
        },
    ]

    return (
        <>
            <ProTable
                ghost={true}
                search={false}
                columns={columns}
                // style={{ height: '100%', display: 'flex', align-items: 'stretch' }}
                tableStyle={{ height: '100%' }}
                request={executeRequest}
                pagination={{
                    defaultPageSize: 9,
                    showSizeChanger: false,
                }}
                // scroll={{ y: '100%' }}
                options={{
                    search: true,
                    setting: false,
                    reload: true,
                    density: false,
                }}
                expandable={{
                    expandedRowRender: (sponsor) => (
                        <ContactTable sponsorId={sponsor._id}></ContactTable>
                    ),
                    showExpandColumn: true,
                    columnWidth: '1%',
                    fixed: true,
                }}
                toolBarRender={() => [
                    <AddSponsorModal key=""></AddSponsorModal>,
                ]}
                rowKey={(sponsor) => sponsor._id}
            />
        </>
    )
}
