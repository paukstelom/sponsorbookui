'use client'
import { Button, Modal, message } from 'antd'
import React, { useContext } from 'react'
import sponsorbook from 'sponsorbook/clients/sponsorbook'

import { DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons'
import { SelectKeyProvide } from '@ant-design/pro-components'
import { Contact } from 'sponsorbook/clients/sponsorbook/models'

type Props = {
    contact: Contact
    contactTableRef: React.MutableRefObject<any>
}

export default function ContactDeleteButton({
    contact,
    contactTableRef,
}: Props) {
    const { confirm } = Modal

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
                    message.success('Contact deleted succesfully')
                    contactTableRef.current?.reload()
                } else {
                    const response = await res.json()
                    message.error(response.detail)
                }
            },
        })
    }

    return (
        <>
            <Button
                type="ghost"
                onClick={async () => {
                    await showDeleteConfirm(contact)
                }}
            >
                <DeleteOutlined />
            </Button>
        </>
    )
}
