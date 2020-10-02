import React from 'react';
import './App.less';

import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Anchor } from 'antd';
import { Button } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Link } = Anchor;

function App() {
  return (
    <div className="App">
      <Layout>
        hello
        <Header className="header">
          header
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Button>
                a
              </Button>
              
              {/* CONTENT HERE */}
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

const handleClick = (e, link) => {
  e.preventDefault();
  console.log(link);
};

function AnchorTest() {
  return(
    <Anchor affix={false} onClick={handleClick}>
      <Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Link href="#components-anchor-demo-static" title="Static demo" />
      <Link href="#API" title="API">
        <Link href="#Anchor-Props" title="Anchor Props" />
        <Link href="#Link-Props" title="Link Props" />
      </Link>
  </Anchor>
  )
}

function SideBar() {
  return (
    <Sider className="site-layout-background" width={200}>
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%' }}
    >
      <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
        <Menu.Item key="1">option1</Menu.Item>
        <Menu.Item key="2">option2</Menu.Item>
        <Menu.Item key="3">option3</Menu.Item>
        <Menu.Item key="4">option4</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
        <Menu.Item key="5">option5</Menu.Item>
        <Menu.Item key="6">option6</Menu.Item>
        <Menu.Item key="7">option7</Menu.Item>
        <Menu.Item key="8">option8</Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
        <Menu.Item key="9">option9</Menu.Item>
        <Menu.Item key="10">option10</Menu.Item>
        <Menu.Item key="11">option11</Menu.Item>
        <Menu.Item key="12">option12</Menu.Item>
      </SubMenu>
    </Menu>
  </Sider>
  );
}

export default App;
