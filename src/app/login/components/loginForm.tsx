'use client'
import { Button, Checkbox, Form, Input } from 'antd'
import { LoginRequest } from 'sponsorbook/clients/sponsorbook/creationModels'
import sponsorbook from 'sponsorbook/clients/sponsorbook'
import { useRouter } from 'next/navigation'

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
}

export default function LoginForm() {
    const router = useRouter()

    const onFinish = async (values: LoginRequest) => {
        await sponsorbook().login(values)
        router.push('/events')
    }

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600,
            height: '400px' }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}
