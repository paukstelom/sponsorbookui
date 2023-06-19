'use client'

import { useRouter } from 'next/navigation'
import { createEvent } from 'sponsorbook/clients/sponsorbook'
import { Button, Form, Input, Modal, Row, Select } from 'antd'
import React from 'react'
import TextArea from 'antd/es/input/TextArea'
import { SubOrganization } from 'sponsorbook/clients/sponsorbook/models'

export default function NewEventComponent({
    subOrganizations,
}: {
    subOrganizations: SubOrganization[]
}) {
    const router = useRouter()

    const onFinish = async (values: any) => {
        await createEvent(values)
        router.push('/events')
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    const options = subOrganizations.map((x) => ({
        label: x.name,
        value: x._id,
    }))

    return (
        <Form
            name="basic"
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 17 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Row justify="center">
                <h1>Create a new event</h1>
            </Row>
            <Form.Item
                label="Event name"
                name="name"
                rules={[
                    { required: true, message: 'Please input event name!' },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Describe the event!' }]}
            >
                <TextArea />
            </Form.Item>
            <Form.Item label="Sub-organizations" name="subOrganizations">
                <Select
                    mode="multiple"
                    options={options}
                    optionFilterProp="label"
                />
            </Form.Item>
            <Row justify="center">
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Row>
        </Form>
    )
}
