'use client'
import { Button, message } from 'antd'
import React, { useContext, useState } from 'react'
import sponsorbook from 'sponsorbook/clients/sponsorbook'
import {
    CreateContactRequest,
    CreateSponsorRequest,
} from 'sponsorbook/clients/sponsorbook/creationModels'

import {
    ModalForm,
    ProForm,
    ProFormText,
    ProFormTextArea,
} from '@ant-design/pro-components'

type Props = {
    sponsorId: string
    contactTableRef: React.MutableRefObject<any>
}

export default function AddContactModal({ sponsorId, contactTableRef }: Props) {
    const addContactRequest = async (values: CreateContactRequest) => {
        const response = await sponsorbook().addContact(values, sponsorId)
        if (response.ok) {
            message.success('Contact added successfully')
            contactTableRef.current?.reload()
            return true
        } else {
            const errorMessage = await response.json()
            message.error(errorMessage.detail)
        }
    }

    return (
        <>
            <ModalForm
                title="Add contact"
                trigger={<Button>Add contact</Button>}
                submitter={{
                    searchConfig: {
                        submitText: 'Add contact',
                    },

                    resetButtonProps: {
                        style: {
                            display: 'none',
                        },
                    },
                }}
                onFinish={async (values) => {
                    return await addContactRequest(
                        values as CreateContactRequest
                    )
                }}
            >
                <ProForm.Group>
                    <ProFormText
                        width="md"
                        name="name"
                        label="Contact Name"
                        placeholder="Input contact name"
                        initialValue={'Jonas Batonas'}
                        rules={[
                            {
                                required: true,
                                message: 'Please input contact name!',
                            },
                        ]}
                    />

                    <ProFormText
                        width="md"
                        name="phone"
                        label="Contact Number"
                        placeholder="Input contact number"
                        initialValue={'+370605442045'}
                        rules={[
                            {
                                required: true,
                                message: 'Please input a number!',
                            },
                        ]}
                    />
                </ProForm.Group>

                <ProForm.Group>
                    <ProFormTextArea
                        width="md"
                        name="details"
                        label="Contant details"
                        placeholder="Input contact related information"
                        initialValue={''}
                    />

                    <ProFormText
                        width="md"
                        name="email"
                        label="Contact Email"
                        placeholder="Input an email"
                        initialValue={'redbulchikas@tomulczikas.com'}
                    />
                </ProForm.Group>
            </ModalForm>
        </>
    )
}
