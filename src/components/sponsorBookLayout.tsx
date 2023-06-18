'use client'
import { Layout, Menu } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Navbar from './navbar'

export const SponsorBookLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <Layout className="layout">
            <Navbar />
            <Content style={{ padding: '0 50px' }}>{children}</Content>
        </Layout>
    )
}
