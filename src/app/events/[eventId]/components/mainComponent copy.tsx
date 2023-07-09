'use client'
import { ProDescriptions } from '@ant-design/pro-components'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'
import { Eventer, Ticket } from 'sponsorbook/clients/sponsorbook/models'
import sponsorbook from 'sponsorbook/clients/sponsorbook'

export type EventPageProps = {
    event: Eventer
    tickets: Ticket[]
}

export default function EventPageComponent({ event, tickets }: EventPageProps) {
    const onClickCloseEvent = async () => {
        await sponsorbook().closeOneEvent(event._id)
    }

    const router = useRouter()

    const onClickDeleteEvent = async () => {
        await sponsorbook().deleteOneEvent(event._id)
        router.push('/events')
    }

    return (
        <>
            <ProDescriptions
      title="Event Title"
      request={async () => {
        return Promise.resolve({
          success: true,
          data: {
            id: '这是一columns',
            date: '20200809',
            money: '1212100',
            money2: -12345.33,
            state: 'all',
            switch: true,
            state2: 'open',
          },
        });
      }}
      columns={[
        {
          title: 'Event Name',
          key: 'text',
          dataIndex: 'id',
        },
        {
          title: 'Company Name',
          key: 'state',
          dataIndex: 'state',
        },
        {
          title: '',
          key: 'state2',
          dataIndex: 'state2',
        },
        {
          title: '时间',
          key: 'date',
          dataIndex: 'date',
          valueType: 'date',
        },
        {
          title: '时间',
          key: 'date',
          dataIndex: 'date',
          valueType: 'date',
          fieldProps: {
            format: 'DD.MM.YYYY',
          },
        },
        {
          title: '开关',
          key: 'switch',
          dataIndex: 'switch',
          valueType: 'switch',
        },
        {
          title: 'money',
          key: 'money',
          dataIndex: 'money',
          valueType: 'money',
          fieldProps: {
            moneySymbol: '$',
          },
        },
        {
          title: 'money无符号',
          key: 'money',
          dataIndex: 'money',
          valueType: 'money',
          fieldProps: {
            moneySymbol: false,
          },
        },
        {
          title: 'money负数无符号',
          key: 'money2',
          dataIndex: 'money2',
          valueType: 'money',
          fieldProps: {
            moneySymbol: false,
          },
        },
        {
          title: '操作',
          valueType: 'option',
          render: () => [
            <Button key='' onClick={onClickCloseEvent}>Close event</Button>,
            <Button key='' onClick={onClickDeleteEvent}>Delete event</Button>,
            <a target="_blank" rel="noopener noreferrer" key="warning">
            Button2
            </a>,
            <a target="_blank" rel="noopener noreferrer" key="view">
            Button3
            </a>,
          ],
        },
      ]}
    >
      <ProDescriptions.Item
        dataIndex="percent"
        label="???"
        valueType="percent"
      >
        100
      </ProDescriptions.Item>
      <div>Figure out what this thing</div>
    </ProDescriptions>
        </>
    )
}
