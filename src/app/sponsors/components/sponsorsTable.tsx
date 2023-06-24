'use client'
import { useState } from 'react'
import React from 'react'
import { Sponsor } from 'sponsorbook/clients/sponsorbook/models'

import SponsorsDisplayModal from './sponsorDisplayModal'
import { ProColumns, ProTable, TableDropdown } from '@ant-design/pro-components'
import { getSponsors } from 'sponsorbook/clients/sponsorbook'
import { isReturnStatement } from 'typescript'

export type SponsorTableProps = {
    sponsors: Sponsor[]
}

export default function SponsorsTable() {
    const [selectedSponsor, setSelectedSponsor] = useState<Sponsor>()


    type TableListSponsor = {
        id: string;
        companyName: string;
        status: string;
        email: string;
        number: string;
        rating: number;
      };

    const columns: ProColumns<TableListSponsor>[] = [
        {
          title: 'Company name',
          width: 80,
          align: 'center',
          dataIndex: 'companyName',
          render: (_) => <a>{_}</a>,
        },
        {
          title: 'Status',
          width: 80,
          align: 'center',
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
            align: 'center',
            width: 80,
            dataIndex: 'number',
            render: (_) => <a>{_}</a>,
          },
          {
            title: 'Email',
            width: 80,
            align: 'center',
            dataIndex: 'email',
            render: (_) => <a>{_}</a>,
          },
        {
            title: 'Rating',
            width: 80,
            align: 'center',
            dataIndex: 'rating',
            sorter: (a, b) => a.rating - b.rating,
          }
      ];

    const executeRequest = async ({filter}) => {
        const result = await getSponsors()

        const data = await result.json()

        return {data, success: true}

    }

    return (
        <>
            {!!selectedSponsor && (
                <SponsorsDisplayModal
                    sponsor={selectedSponsor}
                    onCancel={() => setSelectedSponsor(undefined)}
                />
            )}
            <ProTable search={false}
            columns={columns} request={executeRequest} postData={(data: Sponsor[]) => {
                console.log(data)
                return data.map((sponsor) => ( {
                                                                id: sponsor._id,
                                                                companyName: sponsor.name,
                                                                status: sponsor.status,
                                                                email: sponsor.contacts[0].email,
                                                                number: sponsor.contacts[0].phone,
                                                                rating: sponsor.rating.score
                                                            })) as TableListSponsor[]}}>

            </ProTable>
       
       
        </>
    )
}
