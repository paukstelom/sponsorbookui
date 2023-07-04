'use client'
import { Button, message } from 'antd'
import React from 'react'
import { CreateSponsorRequest } from 'sponsorbook/clients/sponsorbook/creationModels'
import sponsorbook from 'sponsorbook/clients/sponsorbook'
import { Category, Contact, Sponsor } from 'sponsorbook/clients/sponsorbook/models'
import {
    ModalForm,
    ProForm,
    ProFormList,
    ProFormRate,
    ProFormSelect,
    ProFormText,
    ProFormTextArea,
} from '@ant-design/pro-components'



const requestCategories = async () => {
    const response = await sponsorbook().getCategories()
    const categories = await response.json()
    const formattedCategories = categories.map((category: Category) => ({
        label: category.name,
        value: category._id,
    }))
    return formattedCategories
}


export default function AddSponsorModal() {
    return (
        <ModalForm
            title="Add sponsor"
            trigger={<Button>Add sponsor</Button>}
            submitter={{
                searchConfig: {
                    submitText: 'Add contact',
                },
                
                resetButtonProps: {
                    style: {
                        display: 'none',
                }
            }}}
            onFinish={async (values: CreateSponsorRequest) => {
                await sponsorbook().createSponsor(values)
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
                    initialValue={'121212121212'}
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
                    initialValue={'Hustlers University'}
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
                    initialValue={'website.com'}
                />
                <ProFormSelect
                    width="md"
                    name="categories"
                    label="Select categories"
                    dataFormat='array'
                    request={requestCategories}                                 
                    fieldProps={{
                        mode: 'multiple',
                    }}
                    placeholder="Select category"
                    initialValue={[]}
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
                    initialValue={''}
                />
                <ProFormRate
                    name={['rating', 'score']}
                    label="Rate"
                    initialValue={2.5}
                />
            </ProForm.Group>
            <ProForm.Group>
                <ProFormTextArea
                    width={500}
                    name="description"
                    label="Sponsors description/info"
                    placeholder="Input companys description"
                    initialValue={''}
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
                        initialValue={'Jonas Batonas'}
                    />

                    <ProFormText
                        width="md"
                        name="phone"
                        label="Number"
                        placeholder="Input a number"
                        initialValue={'+37061066666'}
                    />

                    <ProFormText
                        width="md"
                        name="email"
                        label="Email"
                        placeholder="Input an email"
                        initialValue={'vardaitis@pavardaitis.com'}
                    />
                </ProForm.Group>
            </ProFormList>
        </ModalForm>
    )
}
