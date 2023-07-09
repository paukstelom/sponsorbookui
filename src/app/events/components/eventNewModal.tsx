'use client'
import { PlusOutlined } from '@ant-design/icons'
import {
    ModalForm,
    ProFormGroup,
    ProFormSelect,
    ProFormText,
    ProFormTextArea,
} from '@ant-design/pro-components'
import { Button, message } from 'antd'
import React from 'react'
import sponsorbook from 'sponsorbook/clients/sponsorbook'
import { CreateEventRequest } from 'sponsorbook/clients/sponsorbook/creationModels'
import { SubOrganization } from 'sponsorbook/clients/sponsorbook/models'

type Props = {
    subOrganizations: SubOrganization[]
    ref: React.RefObject<any>
}

export default function AddEventModal({ subOrganizations, ref }: Props) {
    return (
        <ModalForm
            title="Create event"
            trigger={
                <Button>
                    <PlusOutlined />
                    Create Event
                </Button>
            }
            submitter={{
                searchConfig: {
                    submitText: 'Add',
                },
                submitButtonProps: {
                    style: {
                        display: 'solid',
                    },
                },
                resetButtonProps: {
                    style: {
                        display: 'none',
                    },
                },
            }}
            onFinish={async (values: CreateEventRequest) => {
                const response = await sponsorbook().addEvent(values)
                if (response.ok) {
                    ref.current.reload()
                    message.success('Event created successfully')
                    return true
                } else {
                    const data = await response.json()
                    message.error(data.detail)
                    return false
                }
            }}
        >
            <ProFormGroup>
                <ProFormText
                    width="md"
                    name="name"
                    label="Event Name"
                    placeholder="Input event name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input event name!',
                        },
                    ]}
                />

                <ProFormSelect
                    width="md"
                    name="subOrganizations"
                    label="Faculties"
                    options={subOrganizations.map((subOrganization) => ({
                        value: subOrganization.name,
                        label: subOrganization.name,
                    }))}
                    fieldProps={{
                        mode: 'multiple',
                    }}
                    placeholder="Select faculties"
                    rules={[
                        {
                            required: true,
                            message: 'Please select atleast one faculty!',
                            type: 'array',
                        },
                    ]}
                />
            </ProFormGroup>

            <ProFormGroup>
                <ProFormTextArea
                    width="md"
                    name="description"
                    label="Event description"
                    placeholder="Describe the event"
                />
            </ProFormGroup>
        </ModalForm>
    )
}
