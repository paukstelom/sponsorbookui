'use client'

import { ProColumns, ProTable } from '@ant-design/pro-components'
import { Button, Popover, Rate, Space, Tag } from 'antd'
import { Category, Sponsor } from 'sponsorbook/clients/sponsorbook/models'
import AddSponsorModal from './sponsorAddModal'
import sponsorbook from 'sponsorbook/clients/sponsorbook'
import ContactTable from './contactTable'
import { useRouter } from 'next/navigation'

const executeRequest = async ({}) => {
    const result = await sponsorbook().getSponsors()
    const data = await result.json()
    return Promise.resolve({ data, success: true })
}



export default function SponsorsTable() {
    


    // const requestCategories = async () => {
    //     const response = await sponsorbook().getCategories()
    //     const categories = await response.json()
    //     const formattedCategories = categories.map((category: Category) => ({
    //         label: category.name,
    //         value: category._id,
    //     }))

    //     return formattedCategories
    // }

    const router = useRouter()
    
    const columns: ProColumns<Sponsor>[] = [
        {
            title: 'Name',
            width: '15%',
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
            width: '15%',
            align: 'center',
            dataIndex: 'website',
            render: (_, spons) => <a href={spons.website}>{spons.website}</a>,
        },
        {
            title: 'Category',
            width: '15%',
            align: 'center',
            filters: true,
            onFilter: true,
            valueType: 'select',
            dataIndex: 'categories',
            render: (_, sponsor) => (
                <Space>
                    {sponsor.categories.map((category) => (
                        <Tag color="blue" key={category}>
                            {/* {_.find((c) => c._id === category)?.name} */}
                        </Tag>
                    ))}
                </Space>
            ),
        },
        {
            title: 'Status',
            width: '10%',
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
            width: '15%',
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
            width: '15%',
            align: 'center',
            valueType: 'rate',
            render: (_, sponsor) => [<Button key="1" onClick={() =>
                router.push(`/sponsors/${sponsor._id}`)
            }>View details</Button>],
        },
    ]

    return (
        <>
            <ProTable
                search={false}
                columns={columns}
                request={executeRequest}
                pagination={{
                    defaultPageSize: 7,
                    showSizeChanger: false,
                }}
                options={{
                    search: true,
                    setting: false,
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
                    <AddSponsorModal
                        key=""
                    ></AddSponsorModal>,
                ]}
                rowKey={(sponsor) => sponsor._id}
            />
        </>
    )
}
