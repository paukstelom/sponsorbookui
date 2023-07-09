'use client'

import { Button, Form, Input } from 'antd'
import { CreateOrganizationRequest } from 'sponsorbook/clients/sponsorbook/creationModels'
import sponsorbook from 'sponsorbook/clients/sponsorbook'

export default function AddOrganizationForm() {
    const onFinish = async (values: CreateOrganizationRequest) => {
        await sponsorbook().addOrganization(values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    return (
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
                name="user_email"
                label="Main Email"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">
                Create
            </Button>
        </Form>
    )
}
