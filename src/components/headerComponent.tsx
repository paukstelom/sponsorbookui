'use client'

import { UserOutlined } from '@ant-design/icons'
import { ProCard } from '@ant-design/pro-components'
import { Avatar, Badge } from 'antd'
import { useState } from 'react'

export default function HeaderComponent() {
    let time = new Date().toLocaleTimeString()

    const [ctime, setTime] = useState(time)
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString()
        setTime(time)
    }
    return (
        <ProCard gutter={[16, 16]} wrap ghost colSpan={24}>
            <ProCard
                title="Something else here"
                colSpan={{
                    xs: 24,
                    sm: 24,
                    md: 24,
                    lg: 8,
                    xl: 8,
                    xxl: 8,
                }}
                style={{ height: 100 }}
            ></ProCard>
            <ProCard
                
                layout='center'
                colSpan={{
                    xs: 24,
                    sm: 24,
                    md: 24,
                    lg: 8,
                    xl: 8,
                    xxl: 8,
                }}
                style={{ height: 100 }}
            ><h1 style={{fontSize: 55}}>{ctime}</h1></ProCard>
            <ProCard
                title="Account"
                colSpan={{
                    xs: 24,
                    sm: 24,
                    md: 24,
                    lg: 8,
                    xl: 8,
                    xxl: 8,
                }}
                style={{ height: 100 }}
                extra={
                    <Badge count={5}>
                        <Avatar
                            shape="square"
                            size={64}
                            icon={<UserOutlined />}
                        />
                    </Badge>
                }
            />
        </ProCard>
    )
}
