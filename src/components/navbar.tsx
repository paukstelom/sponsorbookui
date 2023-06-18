'use client'
import { BackTop, Button, Col, Drawer, Menu, Row } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import Layout, { Header } from 'antd/es/layout/layout'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    }

    const onClose = () => {
        setVisible(false)
    }

    return (
        <Header>
            <Row>
                <Col xs={20} sm={20} md={4}>
                    <Link href={'/'} style={{ textDecoration: 'none' }}>
                        <div
                            className="logo"
                            style={{
                                color: 'white',
                                fontSize: 20,
                                paddingLeft: '20px',
                            }}
                        >
                            SponsorBook
                        </div>
                    </Link>
                </Col>
                <Col xs={0} sm={0} md={20}>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item>
                            <Link
                                href={'/search'}
                                style={{ textDecoration: 'none' }}
                            >
                                Search
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link
                                href={'/sponsors'}
                                style={{ textDecoration: 'none' }}
                            >
                                Sponsors
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link
                                href={'/events'}
                                style={{ textDecoration: 'none' }}
                            >
                                Events
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link
                                href={'/history'}
                                style={{ textDecoration: 'none' }}
                            >
                                History
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link
                                href={'/university'}
                                style={{ textDecoration: 'none' }}
                            >
                                University
                            </Link>
                        </Menu.Item>
                        <Menu.Item style={{ marginLeft: 'auto' }}>
                            <Button type="primary">
                                <Link
                                    href={'/account'}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Account
                                </Link>
                            </Button>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col xs={2} sm={2} md={0}>
                    <Button type="primary" onClick={showDrawer}>
                        <MenuOutlined />
                    </Button>
                </Col>
            </Row>
            <Drawer
                title="SponsorBook"
                placement="left"
                onClick={onClose}
                onClose={onClose}
                visible={visible}
            >
                <Menu mode="vertical" style={{ marginLeft: '100px' }}>
                    <Menu.Item>Search</Menu.Item>
                    <Menu.Item>Sponsors</Menu.Item>
                    <Menu.Item>Events</Menu.Item>
                    <Menu.Item>History</Menu.Item>
                    <Menu.Item>University</Menu.Item>
                    <Menu.Item>
                        <Button type="primary">Account</Button>
                    </Menu.Item>
                </Menu>
            </Drawer>
        </Header>
    )
}
