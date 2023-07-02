'use client'
import { Button, message } from 'antd'
import React from 'react'
import { Category } from 'sponsorbook/clients/sponsorbook/models'
import {
    ModalForm,
    ProForm,
    ProFormList,
    ProFormRate,
    ProFormSelect,
    ProFormText,
    ProFormTextArea,
} from '@ant-design/pro-components'
import { createSponsor } from 'sponsorbook/clients/sponsorbook'
import { CreateSponsorRequest } from 'sponsorbook/clients/sponsorbook/creationModels'

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

    return (
        <ModalForm
            title="Add sponsor"
            trigger={<Button>Add sponsor</Button>}
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
            onFinish={async (values: CreateSponsorRequest) => {
                await waitTime(2000)
                console.log(values)
                await createSponsor(values)
                message.success('Sponsor added!')
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
                    name="name"
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
                    name={['rating', 'info']}
                    label="Rating details"
                    placeholder="Input rating details"
                />
                <ProFormRate name={['rating', 'score']} label="Rate" />
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
                        name="name"
                        label="Name"
                        placeholder="Input a full name"
                    />

                    <ProFormText
                        width="md"
                        name="phone"
                        label="Number"
                        placeholder="Input a number"
                    />

                    <ProFormText
                        width="md"
                        name="email"
                        label="Email"
                        placeholder="Input an email"
                    />
                </ProForm.Group>
            </ProFormList>
        </ModalForm>
    )
}
