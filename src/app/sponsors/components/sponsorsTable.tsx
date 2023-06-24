'use client'
import { Modal, Table, Tag } from 'antd'
import { useState } from 'react'
import React from 'react'
import { Sponsor } from 'sponsorbook/clients/sponsorbook/models'

import SponsorsDisplayModal from './sponsorDisplayModal'

export type SponsorTableProps = {
    sponsors: Sponsor[]
}

export default function SponsorsTable({ sponsors }: SponsorTableProps) {
    const [selectedSponsor, setSelectedSponsor] = useState<Sponsor>()

    const { confirm } = Modal
    const columns = [
        { title: 'Company name', dataIndex: 'companyName', key: 'companyName' },
        { title: 'Category', dataIndex: 'category', key: 'category' },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => {
                let color: string = ''
                if (status === 'Available') {
                    color = 'green'
                } else if (status === 'Waiting') {
                    color = 'yellow'
                } else if (status === 'Not available') {
                    color = 'volcano'
                }
                return (
                    <Tag color={color} key={status}>
                        {status}
                    </Tag>
                )
            },
        },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Number', dataIndex: 'number', key: 'number' },
        { title: 'Rating', dataIndex: 'rating', key: 'rating' },
    ]

    const dataSource = sponsors.map((sponsor) => ({
        sponsor: sponsor,
        companyName: sponsor.name,
        category: sponsor.category,
        status: sponsor.status,
        email: sponsor.contacts[0].email,
        number: sponsor.contacts[0].phone,
        rating: sponsor.rating.score,
    }))

    return (
        <>
            {!!selectedSponsor && (
                <SponsorsDisplayModal
                    sponsor={selectedSponsor}
                    onCancel={() => setSelectedSponsor(undefined)}
                />
            )}
            <Table
                style={{ height: '400px' }}
                scroll={{ y: 400 }}
                dataSource={dataSource}
                columns={columns}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: () => {
                            setSelectedSponsor(record.sponsor)
                        }, // click row
                        onDoubleClick: (event) => {}, // double click row
                        onContextMenu: (event) => {}, // right button click row
                        onMouseEnter: (event) => {}, // mouse enter row
                        onMouseLeave: (event) => {}, // mouse leave row
                    }
                }}
                onHeaderRow={(columns, index) => {
                    return {
                        onClick: () => {}, // click header row
                    }
                }}
            ></Table>
        </>
    )
}
