'use client'
import { Button, Form, Input } from 'antd'
import { createSubOrganization } from 'sponsorbook/clients/sponsorbook'
import { CreateSubOrganizationRequest } from 'sponsorbook/clients/sponsorbook/creationModels'

export default function AddSubOrganizationFrom() {
    const onFinish = async (values: CreateSubOrganizationRequest) => {
        await createSubOrganization(values)
    }

    return (
        <>
            <Form onFinish={onFinish}
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 17 }}>
                <Form.Item
                    name="name"
                    label="Sub Organization Name"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Description"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
              
                <Button type="primary" htmlType="submit">
                    Add
                </Button>
            </Form>
        </>
    )
}