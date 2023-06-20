'use client'
import { Button, Form, Input, Modal, Rate, Select } from 'antd'
import { useState } from 'react'
import React from 'react'
import TextArea from 'antd/es/input/TextArea'
import { CreateSponsorRequest } from 'sponsorbook/clients/sponsorbook/creationModels'
import { createSponsor } from 'sponsorbook/clients/sponsorbook'

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

export default function AddSponsorModal() {
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

    const onCategoryChange = (value: string) => {
        switch (value) {
            case 'male':
                form.setFieldsValue({ note: 'Hi, man!' })
                break
            case 'female':
                form.setFieldsValue({ note: 'Hi, lady!' })
                break
            case 'other':
                form.setFieldsValue({ note: 'Hi there!' })
                break
            default:
        }
    }

    return (
        <>
            <Modal
                width="90%"
                title="Create new sponsor"
                open={isCreationModalOpen}
                centered={true}
                onCancel={() => setIsCreationModalOpen(false)}
                footer={[
                    <Button key="create" onClick={form.submit}>
                        Add
                    </Button>,
                ]}
            >
                <Form labelCol={{ span: 5 }} onFinish={onFinish} form={form}>
                    <Form.Item
                        name="companyNumber"
                        label="Company code"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="companyName"
                        label="Company name"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="website"
                        label="Website"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="category"
                        label="Category"
                        rules={[{ required: true }]}
                    >
                        <Select
                            placeholder="Select an option"
                            onChange={onCategoryChange}
                            allowClear
                        >
                            <Select.Option value="male">male</Select.Option>
                            <Select.Option value="female">female</Select.Option>
                            <Select.Option value="other">other</Select.Option>
                        </Select>
                    </Form.Item>
                    <p>Primary contact information:</p>
                    <Form.Item
                        name="contactName"
                        label="Name"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="contactPhone"
                        label="Phone"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="contactEmail"
                        label="Email"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="contactDetails"
                        label="Details"
                        rules={[{ required: true }]}
                    >
                        <TextArea rows={2} />
                    </Form.Item>
                    <p>Additional information:</p>
                    <Form.Item name="ratingScore" label="Rating">
                        <Rate />
                    </Form.Item>
                    <Form.Item
                        name="ratingInfo"
                        label="Rating Info"
                        rules={[{ required: true }]}
                    >
                        <TextArea rows={2} />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[{ required: true }]}
                    >
                        <TextArea rows={2} />
                    </Form.Item>
                </Form>
            </Modal>
            <Button
                onClick={(e) => setIsCreationModalOpen(true)}
                type="primary"
                style={{ marginBottom: 16 }}
            >
                Add sponsor
            </Button>
        </>
    )
}
