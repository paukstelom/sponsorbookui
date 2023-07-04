'use client'
import { Button, Modal, message } from 'antd'
import React, { useContext } from 'react'
import sponsorbook from 'sponsorbook/clients/sponsorbook'

import { Contact } from 'sponsorbook/clients/sponsorbook/models'
import { ExclamationCircleFilled } from '@ant-design/icons'
import { SelectKeyProvide } from '@ant-design/pro-components'
import MessageContext from 'sponsorbook/components/messageContext'



type Props = {
    contact: Contact
    contactTableRef: React.MutableRefObject<any>
}


export default function ContactDeleteButton({ contact, contactTableRef }: Props) {
    
    const { confirm } = Modal
    
    const messageApi = useContext(MessageContext) 

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Sponsor deleted succesfully',
        })
    }

    const error = (message: string) => {
        messageApi.open({
            type: 'error',
            content: message,
        })
    }

    const showDeleteConfirm = async (contact: Contact) => {
        confirm({
            centered: true,
            title: `Attention!`,
            icon: <ExclamationCircleFilled />,
            content: `Are you sure delete ${contact.name}?`,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: async () => {
                const res = await sponsorbook().deleteOneContact(contact._id)
                if (res.ok) {
                    
                    success()
                    contactTableRef.current?.reload()
                    
                } else {
                    const response = await res.json()
                    error(response.detail)
                }
            },
        })
    }

    return (
        <>
            
            <Button
                type="ghost"
                onClick={async () => {await
                        showDeleteConfirm(contact)
                }}
            >
                Delete
            </Button>
     
        </>
    )
}
