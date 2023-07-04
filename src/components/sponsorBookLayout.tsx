'use client'
import { ConfigProvider, Layout, Menu, message } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Navbar from './navbar'
import enUS from 'antd/lib/locale/en_US';
import { useContext } from 'react';
import MessageContext from './messageContext';

export const SponsorBookLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    

     
    const [messageApi, contextHolder] = message.useMessage()



    return (
        <ConfigProvider locale={enUS}>
            <MessageContext.Provider value={messageApi}>
        <Layout className="layout" style={{ height: '100vh' }}>
            <Navbar />
            <Content style={{ padding: '100px' }}>{children}{contextHolder}</Content>
        </Layout>
        </MessageContext.Provider>
        </ConfigProvider>
    )
}
