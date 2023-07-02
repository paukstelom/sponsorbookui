'use client'
import { ConfigProvider, Layout, Menu } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Navbar from './navbar'
import enUS from 'antd/lib/locale/en_US';

export const SponsorBookLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const locale = {}
    return (
        <ConfigProvider locale={enUS}>
        <Layout className="layout" style={{ height: '100vh' }}>
            <Navbar />
            <Content style={{ padding: '100px' }}>{children}</Content>
        </Layout>
        </ConfigProvider>
    )
}
