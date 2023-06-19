'use client'
import {
    Button,
    Form,
    FormInstance,
    Input,
    Modal,
    Rate,
    Select,
    Table,
} from 'antd'
import SponsorLine, { Sponsor } from './sponsor'
import { ColumnsType } from 'antd/es/table'
import { useState } from 'react'
import React from 'react'
import TextArea from 'antd/es/input/TextArea'

export default function AddSponsorModal() {
    const formRef = React.useRef<FormInstance>(null)
    const [isCreationModalOpen, setIsCreationModalOpen] = useState(false)
    const onCategoryChange = (value: string) => {
        switch (value) {
            case 'food':
                formRef.current?.setFieldsValue({ note: '' })
                break
            case 'drinks':
                formRef.current?.setFieldsValue({ note: '' })
                break
            case 'toys':
                formRef.current?.setFieldsValue({ note: '' })
                break
            case 'condoms':
                formRef.current?.setFieldsValue({ note: '' })
                break
            case 'unspecified':
                formRef.current?.setFieldsValue({ note: '' })
                break
        }
    }
    return (
        <>
            <Modal
                width="40%"
                title="Create new sponsor"
                open={isCreationModalOpen}
                centered={true}
                onCancel={() => setIsCreationModalOpen(false)}
                footer={[<Button key="create">Create</Button>]}
            >
                <Form ref={formRef} labelCol={{ span: 5 }}>
                    <Form.Item
                        name="companyCode"
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
                            <Select.Option value="food">Food</Select.Option>
                            <Select.Option value="drinks">Drinks</Select.Option>
                            <Select.Option value="toys">Toys</Select.Option>
                            <Select.Option value="condoms">
                                Condoms
                            </Select.Option>
                            <Select.Option value="unspecified">
                                Unspecified
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <p>Primary contact information:</p>
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Phone"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
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
                    <Form.Item name="rating" label="Rating">
                        <Rate />
                    </Form.Item>
                    <Form.Item
                        name="ratingDetails"
                        label="Rating details"
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
