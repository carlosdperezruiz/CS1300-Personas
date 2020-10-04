import React from 'react';
import './App.less';

import { Layout, /*Menu, Anchor,*/ Image, Typography, Space, Divider } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;
// const { Link } = Anchor;
const { Header, Content, /*Sider*/ } = Layout;
const { Text, Title, Paragraph } = Typography;

// const handleClick = (e, link) => {
//   e.preventDefault();
//   console.log(link);
// };

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          header
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              {imageFunction("microwave.png", 200)}
              {renderOverview()}
              <Divider/>
              {renderInterface()}
              <Divider/>
              {renderObservations()}
              <Divider/>
              {renderPersonas()}
              <Divider/>
              {renderStoryboards()}
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

function renderOverview() {
  return(
    <div>
      <Divider><Title level={2} style={{textAlign:"center"}}><Text keyboard>Overview</Text></Title></Divider>
      <Paragraph>
        Microwaves are a staple kitchen appliance in many households. Culturally, however, we often verbalize the oddity of these devices, from the precarious modes and functionalities that are never used, to the dangers of microwaving metal (even more odd that spoons are ok to microwave but forks aren’t). 
      </Paragraph>
      <Paragraph>
        For certain, 
        <Text strong> the design of microwaves have not really changed</Text>
        , although some microwaves can heat up food multiple ways, it remains that if a user puts food in the microwave, enters a time and presses start, and when the microwave is done, their food is heated up. 
      </Paragraph>
      <Paragraph>
        The interface of a microwave, the “enters a time and presses start,” is the same across most microwaves. 
        <Text strong> If you go to a friend’s house, you’ll know how to use their microwave, but less so their shower.</Text>
      </Paragraph>
      <Paragraph>
        There are a few shortcomings with the traditional design of microwave interfaces, and so I interviewed a few friends and observed how they use the microwave in their kitchen. Based on this, 
        <Text strong> I’ve compiled a few user maps to better understand the microwave’s user interface.</Text>
      </Paragraph>
    </div>
  )
}

function renderInterface() {
  return(
    <div>
      <Divider><Title level={2} style={{textAlign:"center"}}><Text keyboard>Interface</Text></Title></Divider>
      First, I broke down the current interface of the microwave, identifying the key problems. Then, I sketched out a redesign of the interface, taking inspiration from other kitchen appliances.
      <Divider> Current interface </Divider>
      <Space> 
        {imageFunction("microwave.jpg", 250)}
        {imageFunction("interface old.png", 250)}        
          <ul>
            <Title level={5}>Problems</Title>
            <li>Number pad's functionality is counter intuitive to how a user would expect to use a number pad</li>
            <li>Buttons are too granular and underutilized</li>
            <li>Important buttons have too many functions</li>
            <li>[0:00] screen has a lot of tiny icons to represent the settings of the micrwave, but they are difficult to read or understand</li>
          </ul>
      </Space>
      <br/>
      <br/>
      <Divider> Redesigned interface </Divider>
      <Space>
        {imageFunction("interface new 01.png", 250)}
        {imageFunction("interface new 02.png", 250)}
        <ul>
          <Title level={5}>Highlights</Title>
          <li>Circle dial lets user enter the desired time in 15 second increments</li>
          <li>Side buttons (Low, Medium, High) indicate the power level of the micrwave</li>
          <li>Screen has a navigatable table of modes (Defrost, Popcorn, etc.) and descriptions for each</li>
          <li>Back button serves as a cancel button while cooking as well as back button in menu navigation</li>
        </ul>
      </Space>
    </div>
  )
}

function renderObservations() {
  return(
    <div>
    
    </div>
  )
}

function renderPersonas() {
  return(
    <div>
      <Space> 
        {imageFunction("persona01.jpg", 350)}
        {imageFunction("persona02.jpg", 350)}
      </Space>
      lorem ipsum
    </div>
  )
}

function renderStoryboards() {
  return(
    <div>
      <Divider><Title level={2} style={{textAlign:"center"}}><Text keyboard>Storyboards</Text></Title></Divider>
      <div className="flex">
          <Space style={{width: "min-content"}} direction="vertical">{imageFunction("storyboard01.png", 250)} <Text>Hungry and tired, decides to reheat food from the fridge</Text></Space>
          <Space style={{width: "min-content"}} direction="vertical">{imageFunction("storyboard02.png", 250)} <Text>Chooses the microwave to reheat food over the stove</Text></Space>
          <Space style={{width: "min-content"}} direction="vertical">{imageFunction("storyboard03.png", 250)} <Text>Puts food on a plate, sprinkles water, and puts the food in the microwave</Text></Space>
          <Space style={{width: "min-content"}} direction="vertical">{imageFunction("storyboard04.png", 250)} <Text>Searches online for the recommended time needed to reheat</Text></Space>
          <Space style={{width: "min-content"}} direction="vertical">{imageFunction("storyboard05.png", 250)} <Text>Presses number, expecting to put int the rest of the digits, but the microwave begins</Text></Space>
          <Space style={{width: "min-content"}} direction="vertical">{imageFunction("storyboard06.png", 250)} <Text>Stops microwave</Text></Space>
          <Space style={{width: "min-content"}} direction="vertical">{imageFunction("storyboard07.png", 250)} <Text>Presses +30 seconds several times until the desired amount is reached</Text></Space>
          <Space style={{width: "min-content"}} direction="vertical">{imageFunction("storyboard08.png", 250)} <Text>Stand and waits</Text></Space>
          <Space style={{width: "min-content"}} direction="vertical">{imageFunction("storyboard09.png", 250)} <Text>Takes food out intermittently to check in on it</Text></Space>
          <Space style={{width: "min-content"}} direction="vertical">{imageFunction("storyboard10.png", 250)} <Text>Takes food out for the final time and closes the microwave</Text></Space>
      </div>
    </div>
  )
}

function imageFunction(name, size) {
  return(
    <Image
      width={size}
      src={process.env.PUBLIC_URL + "/img/" + name}
      className="img"
    />
  )
}

// function AnchorTest() {
//   return(
//     <Anchor affix={false} onClick={handleClick}>
//       <Link href="#components-anchor-demo-basic" title="Basic demo" />
//       <Link href="#components-anchor-demo-static" title="Static demo" />
//       <Link href="#API" title="API">
//         <Link href="#Anchor-Props" title="Anchor Props" />
//         <Link href="#Link-Props" title="Link Props" />
//       </Link>
//   </Anchor>
//   )
// }

// function SideBar() {
//   return (
//     <Sider className="site-layout-background" width={200}>
//     <Menu
//       mode="inline"
//       defaultSelectedKeys={['1']}
//       defaultOpenKeys={['sub1']}
//       style={{ height: '100%' }}
//     >
//       <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
//         <Menu.Item key="1">option1</Menu.Item>
//         <Menu.Item key="2">option2</Menu.Item>
//         <Menu.Item key="3">option3</Menu.Item>
//         <Menu.Item key="4">option4</Menu.Item>
//       </SubMenu>
//       <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
//         <Menu.Item key="5">option5</Menu.Item>
//         <Menu.Item key="6">option6</Menu.Item>
//         <Menu.Item key="7">option7</Menu.Item>
//         <Menu.Item key="8">option8</Menu.Item>
//       </SubMenu>
//       <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
//         <Menu.Item key="9">option9</Menu.Item>
//         <Menu.Item key="10">option10</Menu.Item>
//         <Menu.Item key="11">option11</Menu.Item>
//         <Menu.Item key="12">option12</Menu.Item>
//       </SubMenu>
//     </Menu>
//   </Sider>
//   );
// }

export default App;
