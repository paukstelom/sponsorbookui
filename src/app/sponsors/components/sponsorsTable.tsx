'use client'
import { Modal, Table, Tag } from 'antd'
import { useState } from 'react'
import React from 'react'
import { Sponsor } from 'sponsorbook/clients/sponsorbook/models'

import SponsorsDisplayModal from './sponsorDisplayModal'
import { ProColumns, ProTable, TableDropdown } from '@ant-design/pro-components'
import { getSponsors } from 'sponsorbook/clients/sponsorbook'

export type SponsorTableProps = {
    sponsors: Sponsor[]
}

export default function SponsorsTable({ sponsors }: SponsorTableProps) {
    const [selectedSponsor, setSelectedSponsor] = useState<Sponsor>()

    const { confirm } = Modal
    const columner = [
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

    type TableListSponsor = {
        id: string;
        companyName: string;
        status: string;
        email: string;
        number: string;
        rating: number;
      };
      const tableListDataSource: TableListSponsor[] = [];

    const columns: ProColumns<TableListSponsor>[] = [
        {
          title: 'Copmany name',
          width: 80,
          dataIndex: 'name',
          render: (_) => <a>{_}</a>,
        },
        {
          title: 'Status',
          width: 80,
          dataIndex: 'status',
          initialValue: 'all',
          valueEnum: {
            all: { text: 'Available', status: 'Default' },
            close: { text: '关闭', status: 'Default' },
            running: { text: '', status: 'Processing' },
            online: { text: 'Available', status: 'Success' },
            error: { text: '异常', status: 'Error' },
          },
        },
        {
            title: 'Number',
            width: 80,
            dataIndex: 'name',
            render: (_) => <a>{_}</a>,
          },
          {
            title: 'Email',
            width: 80,
            dataIndex: 'name',
            render: (_) => <a>{_}</a>,
          },
        {
            title: 'Rating',
            width: 80,
            dataIndex: 'rating',
            sorter: (a, b) => a.rating - b.rating,
          }
      ];

    return (
        <>
            {!!selectedSponsor && (
                <SponsorsDisplayModal
                    sponsor={selectedSponsor}
                    onCancel={() => setSelectedSponsor(undefined)}
                />
            )}
            <ProTable columns={columns} request={getSponsors}>

            </ProTable>
       
       
        </>
    )
}
