'use client'
import { Button, Modal, Popover, Progress, Space, Tag, message } from 'antd'
import React, { Key, useRef, useState } from 'react'
import sponsorbook from 'sponsorbook/clients/sponsorbook'

import {
    ActionType,
    ProColumns,
    ProTable,
} from '@ant-design/pro-components'
import AddContactModal from './addContactModal'
import { Contact } from 'sponsorbook/clients/sponsorbook/models'
import ContactDeleteButton from './contactDeleteButton'
import ContactViewButton from './contactViewButton'

const executeRequest = async (sponsorId: string) => {
    const result = await sponsorbook().getContacts(sponsorId)
    const data = await result.json() as Contact[]
    return { data , success: true }
}

export default function ContactTable({ sponsorId }: { sponsorId: string }) {
    const contactTableRef = useRef<ActionType>()

    const columns: ProColumns<Contact>[] = [
        {
            width: '15%',
            align: 'center',
            dataIndex: 'name',

            render: (_, contact) => (
                <Popover trigger={'hover'} content={contact.details}>
                    {_}
                </Popover>
            ),
        },
        {
            width: '15%',
            align: 'center',
            dataIndex: 'phone',
            copyable: true,
            render: (_) => <>{_}</>,
        },
        {
            width: '15%',
            align: 'center',
            dataIndex: 'email',
            copyable: true,
            render: (_) => <>{_}</>,
        },
        {
            width: '15%',
            align: 'center',
            

            copyable: true,
            render: (_, contact) => {
                return (
                    <Space size={1}>
                        <Button type="ghost">Connect</Button>
                        <ContactViewButton
                            contact={contact}
                            contactTableRef={contactTableRef}
                        />
                        <ContactDeleteButton
                            contact={contact}
                            contactTableRef={contactTableRef}
                        />
                    </Space>
                )
            },
        },
    ]

    return (
        <>
            <ProTable<Contact>
                toolBarRender={() => {
                    return [
                        <h1 key="0" style={{ marginRight: '50vh' }}>
                            Contacts
                        </h1>,
                        <AddContactModal
                            key="1"
                            sponsorId={sponsorId}
                            contactTableRef={contactTableRef}
                        />,
                    ]
                }}
                rowKey={(contact) => contact._id}
                actionRef={contactTableRef}
                search={false}
                showHeader={false}
                options={false}
                showSorterTooltip={false}
                columns={columns}
                editable={{}}
                pagination={false}
                request={async () => await executeRequest(sponsorId)}
            />
        </>
    )
}
