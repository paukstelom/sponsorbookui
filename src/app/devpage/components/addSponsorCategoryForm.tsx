'use client'
import { Button, Form, Input } from 'antd'
import { createCategory } from 'sponsorbook/clients/sponsorbook'
import { CreateCategoryRequest } from 'sponsorbook/clients/sponsorbook/creationModels'

export default function AddSponsorCategoryForm() {
    const onFinish = async (values: CreateCategoryRequest) => {
        await createCategory(values)
    }

    return (
        <>
            <Form
                onFinish={onFinish}
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 17 }}
            >
                <Form.Item
                    name="name"
                    label="Category name"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="info"
                    label="Info"
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
