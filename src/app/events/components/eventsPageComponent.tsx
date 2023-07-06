'use client'
import { Tag } from 'antd'
import { useState } from 'react'

import {
    Eventer,
    SubOrganization,
} from 'sponsorbook/clients/sponsorbook/models'

import { ProList } from '@ant-design/pro-components'
import AddEventModal from './eventNewModal'
import { useRouter } from 'next/navigation'

export type EventCollectionProps = {
    events: Eventer[]
    subOrganizations: SubOrganization[]
}






export default function EventsPageComponent({
    events,
    subOrganizations,
}: EventCollectionProps) {
    const router = useRouter()

    const [cardActionProps, setCardActionProps] = useState<'actions' | 'extra'>(
        'extra',
      );
      const listData = events.map((event) => ({
        id: event._id,
        title: event.name,
        subTitle: event.status,
        actions: [<a key="run">Contribute</a>, <a key="delete">Close</a>],
        avatar:
          'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
        //   Add faculty rendering here
        content: () => {},
      }));
  
    return (
        <>
         
      <ProList<any>
        toolBarRender={() => {
            return [<AddEventModal key='' subOrganizations={subOrganizations}></AddEventModal>
            ];
          }}
        pagination={{
          defaultPageSize: 6,
          showSizeChanger: false,
        }}
        showActions="hover"
        rowSelection={{}}
        grid={{ gutter: 16, column: 2 }}
        onItem={(record: any) => {
          return {
            onMouseEnter: () => {},
            onClick: () => {router.push(`/events/${record.id}`)},
          };
        }}
        metas={{
          title: {},
          subTitle: {render: (status) => {
            let color: string = ''
            if (status === 'Ongoing') {
                color = 'green'
            } else if (status === 'Waiting') {
                color = 'yellow'
            } else if (status === 'Closed') {
                color = 'volcano'
            }
            return (

                <Tag color={color}>
                    {status}
                </Tag>
               
            )}},
          type: {},
          avatar: {},
          content: {
            render: () => (
                <div
                style={{
                  flex: 1,
                }}
              >
                <div style={{margin: 4}}>Faculties involved:</div>
          
                <Tag>Elektronikos fakultetas</Tag>
                <Tag>Fundamentai</Tag>
                <Tag>Hustlers UNI</Tag>
              </div>

            ),
          },
          actions: {
            cardActionProps,
          },
        }}
        headerTitle="Events"
        dataSource={listData}
      />
    
        </>
    )
}
