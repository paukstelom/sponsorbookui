'use client'
import {
    Avatar,
    Badge,
    Breadcrumb,
    ConfigProvider,
    Layout,
    Menu,
    MenuProps,
    Space,
    message,
    theme,
} from 'antd'

import enUS from 'antd/lib/locale/en_US'
import React, { useContext, useState } from 'react'

import {
    CalendarOutlined,
    DesktopOutlined,
    FileOutlined,
    HomeOutlined,
    InfoCircleOutlined,
    PieChartOutlined,
    SearchOutlined,
    ShareAltOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons'
import {
    DefaultFooter,
    PageContainer,
    ProCard,
    ProLayout,
} from '@ant-design/pro-components'
import MenuItem from 'antd/es/menu/MenuItem'
import { usePathname, useRouter } from 'next/navigation'

import locale from 'antd/es/date-picker/locale/en_US'
import { Header } from 'antd/es/layout/layout'
import Link from 'next/link'
import { render } from 'react-dom'
import HeaderComponent from './headerComponent'

export const SponsorBookLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const router = useRouter()
    const routes = {
        routes: [
            {
                path: '/',
                name: <Link href={'/'}>Homepage</Link>,
                icon: <HomeOutlined onClick={() => router.push('/')} />,
            },
            {
                path: '/sponsors',
                name: <Link href={'/sponsors'}>Sponsors</Link>,
                icon: <ShopOutlined onClick={() => router.push('sponsors')} />,
            },
            {
                path: '/events',
                name: <Link href={'/events'}>Events</Link>,
                icon: (
                    <CalendarOutlined onClick={() => router.push('events')} />
                ),
            },
            {
                path: '/search',
                name: <Link href={'/search'}>Search</Link>,
                icon: <SearchOutlined onClick={() => router.push('search')} />,
            },
            {
                path: '/devpage',
                name: <Link href={'/devpage'}>Devpage</Link>,
                icon: (
                    <InfoCircleOutlined
                        onClick={() => router.push('devpage')}
                    />
                ),
            },
            {
                path: '/university',
                name: 'University',
                icon: (
                    <TeamOutlined onClick={() => router.push('university')} />
                ),
                children: [
                    {
                        path: '/account',
                        name: <Link href={'/events'}>Events</Link>,
                    },
                    {
                        path: '/faculty',
                        name: <Link href={'/faculty'}>Faculty</Link>,
                    },
                    {
                        path: '/members',
                        name: <Link href={'/members'}>Members</Link>,
                    },
                    {
                        path: '/history',
                        name: <Link href={'/history'}>History</Link>,
                    },
                ],
            },
        ],
    }

    return (
        <>
            <ConfigProvider locale={enUS}>
                <ProLayout
                    style={{ maxHeight: '100vh' }}
                    title="ApeBook"
                    defaultCollapsed={true}
                    logo={<TeamOutlined />}
                    route={routes}
                    location={{ pathname: usePathname() }}
                    footerRender={() => (
                        <DefaultFooter
                            // links={[
                            //   { key: 'link1', title: 'Created by Umbrella', href: 'google.com' },
                            // ]}
                            copyright="SponsorBook"
                        />
                    )}
                >
                    <PageContainer>
                        {/* This card makes everything responsive DO NOT TOUCH IT */}
                        <ProCard ghost wrap colSpan={24} gutter={16}>
                            <HeaderComponent />
                            {children}
                        </ProCard>
                    </PageContainer>
                </ProLayout>
            </ConfigProvider>
        </>
    )
}
