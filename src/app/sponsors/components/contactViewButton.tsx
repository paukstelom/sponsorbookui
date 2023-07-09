'use client'
import { Button, Modal, message } from 'antd'
import React, { useContext, useRef, useState } from 'react'
import sponsorbook from 'sponsorbook/clients/sponsorbook'

import { Contact } from 'sponsorbook/clients/sponsorbook/models'

import { SolutionOutlined } from '@ant-design/icons'
import { ActionType, ProDescriptions } from '@ant-design/pro-components'

type Props = {
    contact: Contact
    contactTableRef: React.MutableRefObject<any>
}

export default function ContactViewButton({ contact, contactTableRef }: Props) {
    const contactRef = useRef<ActionType>()

    const [isContactOpen, setIsContactOpen] = useState<Contact | undefined>(
        undefined
    )

    const executeRequest = async (contactId: string) => {
        const result = await sponsorbook().getOneContact(contactId)
        const data = await result.json()
        return Promise.resolve({ data, success: true })
    }

    const columns = [
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            copyable: true,
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',
            copyable: true,
        },
        {
            title: 'Description',
            key: 'details',
            dataIndex: 'details',
        },
    ]

    return (
        <>
            <Button
                type="ghost"
                onClick={() => {
                    setIsContactOpen(contact)
                }}
            >
                <SolutionOutlined />
            </Button>
            <Modal
                title="Contact details"
                open={!!isContactOpen}
                centered={true}
                width="30%"
                bodyStyle={{ height: '30vh' }}
                footer={null}
                onCancel={() => setIsContactOpen(undefined)}
            >
                <ProDescriptions<Contact>
                    actionRef={contactRef}
                    column={1}
                    columns={columns}
                    editable={{
                        onSave: async (_, contact) => {
                            const res = await sponsorbook().updateContact(
                                contact
                            )
                            if (res.ok) {
                                message.success('Contact edited sucessfully')
                                contactTableRef.current?.reload()
                            } else {
                                setIsContactOpen(undefined)
                                contactRef.current?.reload()
                                const response = await res.json()
                                message.error(response.message)
                            }
                        },
                        onlyOneLineEditorAlertMessage:
                            'Only one line can be edited at a time',
                    }}
                    request={async () => await executeRequest(contact._id)}
                ></ProDescriptions>
            </Modal>
        </>
    )
}
