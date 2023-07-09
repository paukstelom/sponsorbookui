'use client'

import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components'
import { Carousel } from 'antd'
import { text } from 'stream/consumers'

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: 'auto',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'lightgrey',
}

export default function HomePageComponent() {
    return (
        <>
            <ProCard wrap ghost colSpan={24} gutter={[16, 16]}>
                <ProCard
                    title="Ongoing events"
                    colSpan={{
                        xs: 24,
                        sm: 24,
                        md: 24,
                        lg: 24,
                        xl: 12,
                        xxl: 12,
                    }}
                    gutter={16}
                    style={{ height: 300 }}
                >
                    <Carousel autoplay>
                        <ProCard>
                            <h3 style={contentStyle}>Event 1</h3>
                        </ProCard>
                        <ProCard>
                            <h3 style={contentStyle}>Event 2</h3>
                        </ProCard>
                        <ProCard>
                            <h3 style={contentStyle}>Event 3</h3>
                        </ProCard>
                        <ProCard>
                            <h3 style={contentStyle}>Event 4</h3>
                        </ProCard>
                        <ProCard>
                            <h3 style={contentStyle}>Event 5</h3>
                        </ProCard>
                        <ProCard>
                            <h3 style={contentStyle}>Event 6</h3>
                        </ProCard>
                    </Carousel>
                </ProCard>
                <ProCard
                    title="Activity"
                    colSpan={{
                        xs: 24,
                        sm: 24,
                        md: 24,
                        lg: 24,
                        xl: 12,
                        xxl: 12,
                    }}
                    style={{ height: 300 }}
                />
            </ProCard>
        </>
    )
}
