import { AntDesignOutlined, LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import {FC,createElement, CSSProperties} from 'react';
import Logo from '../Logo';
import './index.css'

const { Header, Content, Sider,Footer } = Layout;

const navItems: MenuProps['items'] = ['1', '2', '3'].map(key => ({
  key,
  label: `nav ${key}`,
}));

const subNavItems: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const CustomLayout: FC<{
  style:CSSProperties
}> = ({ style}) => (
  <Layout style={style}>
    <Header style={{display: 'flex',alignItems:'center',justifyContent:'space-between'}}>
      <Logo width={100} color="white" style={{marginRight:'30px'}}></Logo>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={navItems} />
      <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 45, xl: 60 }}
        icon={<AntDesignOutlined />}
      />
    </Header>
    <Layout >
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={subNavItems}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
        <Footer style={{height:'40px'}}>©2022 Created by IES</Footer>
      </Layout>
    </Layout>
  </Layout>
);

export default CustomLayout;
