'use client'

import { Button, Form, Input } from 'antd'
import { createOrganization } from 'sponsorbook/clients/sponsorbook'

export default function AddOrganizationForm() {
    const onFinish = async (values: any) => {
        await createOrganization(values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <>
            <Form
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 17 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="name"
                    label="Organization name"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Main Email"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
            </Form>
            <Button type="primary" htmlType="submit">
                Create
            </Button>
        </>
    )
}
