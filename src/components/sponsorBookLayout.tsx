'use client'
import { Breadcrumb, ConfigProvider, Layout, Menu, MenuProps, message, theme } from 'antd'

import enUS from 'antd/lib/locale/en_US';
import { useContext, useState } from 'react';
import MessageContext from './messageContext';

import { CalendarOutlined, DesktopOutlined, FileOutlined, HomeOutlined, PieChartOutlined, SearchOutlined, ShareAltOutlined, ShopOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import MenuItem from 'antd/es/menu/MenuItem';
import { useRouter } from 'next/navigation';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }


const items: MenuItem[] = [
    getItem('Homepage', '/', <HomeOutlined />),
    getItem('Sponsors', '/sponsors', <ShopOutlined />),
    getItem('Events', '/events', <CalendarOutlined />),
    getItem('Search engine', '/search', <SearchOutlined />),
    getItem('Devpage', '/devpage', <SearchOutlined />),
    getItem('University', 'sub2', <TeamOutlined />, [
        getItem('Account', '/account'),
        getItem('Faculty', '/faculty'),
        getItem('Memebers', '/members'),
        getItem('History', '/history'),
      ]),
  ];


export const SponsorBookLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    
    
    const loggedIn = true;
    const [messageApi, contextHolder] = message.useMessage()
    const [collapsed, setCollapsed] = useState(false);
    const router = useRouter();
    const {
      token: { colorBgContainer },
    } = theme.useToken();

    const onClick: MenuProps['onClick'] = (e) => {
      router.push(e.key);
      console.log('click ', e);
    };

    return (
        <ConfigProvider locale={enUS}>
            <MessageContext.Provider value={messageApi}>
            <Layout style={{ height: '100vh'}}>
              {loggedIn ? (
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{boxShadow: 'inset -10px 0px 20px 0px rgba(0, 0, 0, 0.5)' }}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" onClick={onClick} defaultSelectedKeys={['1']}style={{boxShadow: 'inset -10px 20px 20px 0px rgba(0, 0, 0, 0.5)' }} mode="inline" items={items} />
      </Sider>) : null}
      <Layout style={{ backgroundColor: '' }}>
      
      <Content style={{ margin: '0 16px', }}>
    
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>sponsorbook</Breadcrumb.Item>
            <Breadcrumb.Item>login</Breadcrumb.Item>
          </Breadcrumb>
      
          <div style={{margin:'3vh 4vh 3vh 4vh', padding: 24, minHeight: 360, background: colorBgContainer, boxShadow: '0px 0px 20px 5px rgba(0, 0, 0, 0.5)' }}>
            {children}{contextHolder}
          </div>
               </Content>
               <Footer style={{ textAlign: 'center', backgroundColor: 'transparent' }}>SponsorBook ©2023 Created by Umbrella <ShareAltOutlined/></Footer>

            </Layout>
            </Layout>
        </MessageContext.Provider>
        </ConfigProvider>
    )
}
