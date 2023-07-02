'use client'
import React from 'react'
import { Sponsor, Category } from 'sponsorbook/clients/sponsorbook/models'
import { ProColumns, ProTable } from '@ant-design/pro-components'
import AddSponsorModal from './sponsorNewModal'
import { Button, Space, Tag } from 'antd'
import { useRouter } from 'next/navigation'
import sponsorbook from 'sponsorbook/clients/sponsorbook'

export type SponsorTableProps = {
    categories: Category[]
}

export default function SponsorsTable({ categories }: SponsorTableProps) {
    const router = useRouter()

    const executeRequest = async ({}) => {
        const result = await sponsorbook().getSponsors()
        const data = await result.json()
        return Promise.resolve({ data, success: true })
    }

    type TableListSponsor = {
        sponsor: Sponsor
        id: string
        companyName: string
        website: string
        status: string
        categories: string[]
        email: string
        number: string
        rating: number
    }

    const columns: ProColumns<TableListSponsor>[] = [
        {
            title: 'Name',
            width: '15%',
            align: 'center',
            dataIndex: 'companyName',

            render: (_) => <a>{_}</a>,
        },
        {
            title: 'Website',
            width: '15%',
            align: 'center',
            dataIndex: 'companyName',
            render: (_) => <a>{_}</a>,
        },
        {
            title: 'Category',
            width: '20%',
            align: 'center',
            dataIndex: 'categories',
            render: (_) => <a>{_}</a>,
        },
        {
            title: 'Status',
            width: '10%',
            align: 'center',
            dataIndex: 'status',
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
            width: '10%',
            align: 'center',
            valueType: 'rate',
            dataIndex: 'rating',
            sorter: (a, b) => a.rating - b.rating,
        },

        {
            title: '',
            width: '15%',
            align: 'center',
            valueType: 'rate',
            render: () => [
                <Button
                    key=""
                    onClick={(event) => router.push(`/sponsors/${sponsor.id}`)}
                >
                    Open
                </Button>,
                <Button key=" ">Expand</Button>,
            ],
        },
    ]

    const expandedRowRender = () => {
        return (
            <div>
                <center>
                    <h3>Contact info here</h3>
                </center>
                <center>
                    <h3>Contact info here</h3>
                </center>
                <center>
                    <h3>Contact info here</h3>
                </center>
            </div>
        )
    }

    return (
        <>
            <div
                style={{
                    backgroundColor: '#eee',
                    margin: -24,
                    padding: 24,
                }}
            >
                <ProTable
                    search={false}
                    columns={columns}
                    request={executeRequest}
                    pagination={{
                        defaultPageSize: 7,
                        showSizeChanger: false,
                    }}
                    // Research how to implement table integrated search
                    options={{
                        search: true,
                    }}
                    // Fix expandable rows https://ant.design/components/table#expandable
                    // expandable={{ expandedRowRender,
                    //   columnWidth: "1%",
                    //   expandRowByClick: true,}}

                    // Add copyable: true, for easier copying of

                    toolBarRender={() => [
                        <AddSponsorModal
                            key=""
                            categories={categories}
                        ></AddSponsorModal>,
                    ]}
                    rowKey={(x) => x.id}
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: (event) => {},
                            onDoubleClick: (event) => {}, // double click row
                            onContextMenu: (event) => {}, // right button click row
                            onMouseEnter: (event) => {}, // mouse enter row
                            onMouseLeave: (event) => {}, // mouse leave row
                        }
                    }}
                    postData={(data: Sponsor[]) => {
                        return data.map((sponsor) => ({
                            id: sponsor._id,
                            sponsor: sponsor,
                            companyName: sponsor.name,
                            website: sponsor.website,
                            categories: sponsor.categories,
                            status: sponsor.status,
                            rating: sponsor.rating.score,
                        })) as TableListSponsor[]
                    }}
                ></ProTable>
            </div>
        </>
    )
}
