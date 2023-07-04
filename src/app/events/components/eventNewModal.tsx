'use client'
import { Button, message } from 'antd'
import React from 'react'
import { SubOrganization } from 'sponsorbook/clients/sponsorbook/models'
import {
    ModalForm,
    ProFormGroup,
    ProFormSelect,
    ProFormText,
    ProFormTextArea,
} from '@ant-design/pro-components'
import { CreateEventFormState } from 'sponsorbook/clients/sponsorbook/creationModels'
import sponsorbook from 'sponsorbook/clients/sponsorbook'

export type AddSponsorModalProps = {
    subOrganizations: SubOrganization[]
}

const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, time)
    })
}

export default function AddEventModal({
    subOrganizations,
}: AddSponsorModalProps) {
    return (
        <ModalForm
            title="Create event"
            trigger={<Button>Create new event</Button>}
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
            onFinish={async (values: CreateEventFormState) => {
                await waitTime(2000)
                console.log(values)
                await sponsorbook().createEvent(values)
                message.success('Event created!')
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
