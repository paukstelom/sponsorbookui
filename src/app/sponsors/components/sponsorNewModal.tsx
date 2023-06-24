'use client'
import { Button, Form, Input, Modal, Rate, Select, message } from 'antd'
import { useState } from 'react'
import React from 'react'
import TextArea from 'antd/es/input/TextArea'
import { CreateSponsorRequest } from 'sponsorbook/clients/sponsorbook/creationModels'
import { createSponsor } from 'sponsorbook/clients/sponsorbook'
import { Category } from 'sponsorbook/clients/sponsorbook/models'
import {
    ModalForm,
    ProForm,
    ProFormDependency,
    ProFormList,
    ProFormRate,
    ProFormSelect,
    ProFormText,
    ProFormTextArea,
} from '@ant-design/pro-components'

type CreateSponsorFormState = {
    companyNumber: string
    companyName: string
    website: string
    category: string
    contactName: string
    contactPhone: string
    contactEmail: string
    contactDetails: string
    ratingScore: string
    ratingInfo: string
    description: string
}

export type AddSponsorModalProps = {
    categories: Category[]
}

const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, time)
    })
}

export default function AddSponsorModal({ categories }: AddSponsorModalProps) {
    const [isCreationModalOpen, setIsCreationModalOpen] = useState(false)

    const onFinish = async (values: CreateSponsorFormState) => {
        const xujnia = {
            companyNumber: values.companyNumber,
            name: values.companyName,
            website: values.website,
            category: values.category,
            contacts: [
                {
                    name: values.contactName,
                    phone: values.contactPhone,
                    email: values.contactEmail,
                    info: values.contactDetails,
                },
            ],
            description: values.description,
            rating: { info: values.ratingInfo, score: values.ratingScore },
        } as CreateSponsorRequest
        await createSponsor(xujnia)
    }

    const [form] = Form.useForm()

    return (
        <ModalForm
            title="Add sponsor"
            trigger={<Button type="primary">Add sponsor</Button>}
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
            onFinish={async (values) => {
                await waitTime(2000)
                console.log(values)
                message.success('Sponsor added!')
                return true
            }}
        >
            <ProForm.Group>
                <ProFormText
                    width="md"
                    name="companyNumber"
                    label="Company Number"
                    tooltip="Company number (Imonės kodas) can be found in Rekvizitai.lt"
                    placeholder="Input a company number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input a company number!',
                        },
                    ]}
                />

                <ProFormText
                    width="md"
                    name="companyName"
                    label="Company Name"
                    placeholder="Input a company name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input a company name!',
                        },
                    ]}
                />
            </ProForm.Group>
            <ProForm.Group>
                <ProFormText
                    width="md"
                    name="website"
                    label="Website"
                    placeholder="Input a company website"
                />
                <ProFormSelect
                    width="md"
                    name="categories"
                    label="Select categories"
                    options={categories.map((category) => ({
                        value: category.name,
                        label: category.name,
                    }))}
                    fieldProps={{
                        mode: 'multiple',
                    }}
                    placeholder="Select category"
                    rules={[
                        {
                            required: true,
                            message: 'Please select atleast one category!',
                            type: 'array',
                        },
                    ]}
                />
            </ProForm.Group>
            <ProForm.Group>
                <ProFormTextArea
                    width="md"
                    name="ratingInfo"
                    label="Rating details"
                    placeholder="Input rating details"
                />
                <ProFormRate name="rate" label="Rate" />
            </ProForm.Group>
            <ProForm.Group>
                <ProFormTextArea
                    width={500}
                    name="description"
                    label="Sponsors description/info"
                    placeholder="Input companys description"
                />
            </ProForm.Group>
            <ProFormList
                name={'contacts'}
                creatorButtonProps={{
                    creatorButtonText: 'Add contact',
                }}
                label="Contacts"
                alwaysShowItemLabel
            >
                <ProForm.Group key="group">
                    <ProFormText
                        width="md"
                        name="contactName"
                        label="Name"
                        placeholder="Input a full name"
                    />

                    <ProFormText
                        width="md"
                        name="contactNumber"
                        label="Number"
                        placeholder="Input a number"
                    />

                    <ProFormText
                        width="md"
                        name="contactEmail"
                        label="Email"
                        placeholder="Input an email"
                    />
                </ProForm.Group>
            </ProFormList>
        </ModalForm>
    )
}
