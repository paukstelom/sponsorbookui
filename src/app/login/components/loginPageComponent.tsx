'use client'
import {
    AlipayOutlined,
    LockOutlined,
    MobileOutlined,
    TaobaoOutlined,
    UserOutlined,
    WeiboOutlined,
  } from '@ant-design/icons';
  import {
    LoginFormPage,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormText,
  } from '@ant-design/pro-components';
  import { Button, Divider, message, Space, Tabs } from 'antd';
import { useRouter } from 'next/navigation';
  import { useState, type CSSProperties } from 'react';
import sponsorbook from 'sponsorbook/clients/sponsorbook';
import { LoginRequest } from 'sponsorbook/clients/sponsorbook/creationModels';

  
  type LoginType = 'phone' | 'account';
  
  const iconStyles: CSSProperties = {
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '18px',
    verticalAlign: 'middle',
    cursor: 'pointer',
  };
  
export default function LoginPageComponent() {
    const router = useRouter()

    const onFinish = async (values: LoginRequest) => {
        await sponsorbook().login(values)
        router.push('/')
    }

    const [loginType, setLoginType] = useState<LoginType>('account');

    
    return (
     
        <LoginFormPage
        // backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
          backgroundImageUrl="vgtuuniversity.jpg"
          logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          title="SponsorBook"
          subTitle="Make your sponsorship easy"
          onFinish={onFinish}
      
    
          actions={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Divider plain>
                <span
                  style={{ color: '#CCC', fontWeight: 'normal', fontSize: 14 }}
                >
                  Connect with us
                </span>
              </Divider>
              <Space align="center" size={24}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: 40,
                    width: 40,
                    border: '1px solid #D4D8DD',
                    borderRadius: '50%',
                  }}
                >
                  <AlipayOutlined style={{ ...iconStyles, color: '#1677FF' }} />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: 40,
                    width: 40,
                    border: '1px solid #D4D8DD',
                    borderRadius: '50%',
                  }}
                >
                  <TaobaoOutlined style={{ ...iconStyles, color: '#FF6A10' }} />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: 40,
                    width: 40,
                    border: '1px solid #D4D8DD',
                    borderRadius: '50%',
                  }}
                >
                  <WeiboOutlined style={{ ...iconStyles, color: '#333333' }} />
                </div>
              </Space>
            </div>
          }
        >
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey as LoginType)}
          >
            <Tabs.TabPane key={'account'} tab={'Account'} />
            <Tabs.TabPane key={'phone'} tab={'Phone'} />
          </Tabs>
          {loginType === 'account' && (
            <>
              <ProFormText
                name="email"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'} />,
                }}
                placeholder={'University email'}
                rules={[
                  {
                    required: true,
                    message: 'Please input your university email!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                placeholder={'Password'}
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              />
            </>
          )}
          {loginType === 'phone' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined className={'prefixIcon'} />,
                }}
                name="mobile"
                placeholder={'Phone Number'}
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: 'Wrong phone number format!',
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder={'Code'}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${'Please wait'}`;
                  }
                  return 'Get code';
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: 'sadas',
                  },
                ]}
                onGetCaptcha={async () => {
                  message.success('Message sent successfully!');
                }}
              />
            </>
          )}
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              Remember details
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
                Forgot password?
            </a>
          </div>
        </LoginFormPage>
   
    );
  };