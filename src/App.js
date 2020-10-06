import React from 'react';
import './App.less';

import { Layout, Menu, Anchor, Image, Typography, Space, Divider } from 'antd';

const { Link } = Anchor;
const { Header, Content, Sider } = Layout;
const { Text, Title, Paragraph } = Typography;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header" style={{height:"min-content"}}>
          <Title>UX Reserach: Microwave Persona and Storyboarding</Title>
        </Header>
        <Content>
          <Layout className="site-layout-background">
            <SideBar/>
            <Content style={{ padding: '0 74px', minHeight: 280 }}>
              <div className="flex">
                <Space direction="vertical" align="center">
                  {imageFunction("microwave.png", 200)}
                  <Text strong>An exploration into user empathy models, with a microwave</Text>
                </Space>
              </div>
              {renderOverview()}
              <Divider/>
              {renderInterface()}
              <Divider/>
              {renderObservations()}
              <Divider/>
              {renderPersonas()}
              <Divider/>
              {renderStoryboards()}
              <Divider/>
              {renderReflections()}
              <Paragraph/>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

function renderOverview() {
  return(
    <div id="overview">
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
    <div id="interface">
      <Divider><Title level={2} style={{textAlign:"center"}}><Text keyboard>Interface</Text></Title></Divider>
      First, I broke down the current interface of the microwave, identifying the key problems. Then, I sketched out a redesign of the interface, taking inspiration from other kitchen appliances:
      <Divider> Current interface </Divider>
      <Space direction={window.screen.width > 820 ? "horizontal" :"vertical"}> 
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
      <Space direction={window.screen.width > 820 ? "horizontal" :"vertical"}>
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
    <div id="observations">
      <Divider><Title level={2} style={{textAlign:"center"}}><Text keyboard>Observations</Text></Title></Divider>
      <Text>
        I observed a few friends using the microwave in our kitchen. I also showed them the redesign sketch and asked them to give feedback on what they think works in the sketch and what else would they like to see. Here are some of the key observations:
      </Text>
      <p/>
          <ul>
            <Title level={5}>Current Microwave</Title>
            <li>Presses buttons multiple times to invoke a response from the microwave</li>
            <li>Often misinputs numbers and stops the microwave to do it over</li>
            <li>Primarily uses microwave to reheat food</li>
            <li>Apprehensive to use the microwave to defrost food, cook microwavable meal, or bake uncooked food</li>
            <li>Stands by microwave, occasionally pops the door open to check in on the food</li>
            <li>Regardless of the food, will enter 2 minutes and stop when the food appears to be ready</li>
          </ul>
          <ul>
            <Title level={5}>Redesigned Microwave</Title>
            <li>Understands that the power levels (Low, Medium, High) can be utilized for different foods</li>
            <li>More curious to use modes that the microwave offers (Pizza, Potato, Popcorn, etc.)</li>
            <li>Circle dial is reminiscent of toasters and stoves that offer similar dial mechanics</li>
            <li>Has more confidence that the food will cook appropriately and doesn’t need to monitor it</li>
            <li>Will look into using the microwave to do more than reheat food, but will probably not change eating habits</li>
          </ul>
      <Text>
        I also asked a few questions along the way. My goal was to get a better understanding of the habits I was noticing and see if there are anything in particular about the microwave’s interface that I could pin as a pain point. Here are some of the question and some of the highlight responses:
      </Text>
      <p/>
      <div className="inline">
          <ul>
            <Title level={5}>Notable Questions</Title>
            <li>How do you use the microwave?</li>
            <li>When you want to cook a food for a specific time, what do you do?</li>
            <li>What are some of the challenges, if any, when you using the microwave?</li>
          </ul>
          <ul>
            <Title level={5}>Notable Answers</Title>
            <li>“Microwave starts when you press a number, not when you press start, so you can’t enter times like 1:30 or 2:45, only 1:00 or 2:00”</li>
            <li>“I stand by microwave to monitor the food”</li>
            <li>“I don’t like the buttons or the loud beeps, but also <Text strong>I never know when to stop cooking the food</Text>"</li>
            <li>“I don’t understand any of the current settings”</li>
            <li><Text strong>“I wouldn’t trust the pizza mode to heat up pizza, what does that even do”</Text></li>
            <li>“I don’t tust the microwave”</li>
          </ul>
      </div>
    </div>
  )
}

function renderPersonas() {
  return(
    <div id="personas">
      <Divider><Title level={2} style={{textAlign:"center"}}><Text keyboard>Personas</Text></Title></Divider>
      <Text>
        After interviewing and observing a few friends, I’ve assembled two personas based on the data I’ve collected so far. Due to Covid, I could only interview college friends, hence the similar personas. Understanding that having distinctive personas is ideal, there are a few differences to each persona to differentiate the two.
      </Text>
      <div className="flex-se">
        <Space style={{width: "min-content"}} direction="vertical">{imageFunction("persona01.png", 350)} <Text>James is a college student working from home. He buys his own groceries, and now that he's in classes, he's often too busy to cook proper meals.</Text></Space>
        <Space style={{width: "min-content"}} direction="vertical">{imageFunction("persona02.png", 350)} <Text>Jamie is a recent college grad. She and her roomates make meals together and often have leftovers that they will save for later.</Text></Space>
      </div>
    </div>
  )
}

function renderStoryboards() {
  return(
    <div id="storyboards">
      <Divider><Title level={2} style={{textAlign:"center"}}><Text keyboard>Storyboards</Text></Title></Divider>
      <Text>The last step in the project was to outline a storyboard of the user that can identify pain points and empathize the relationship between the user and the interface. Here is what I’ve drawn out:</Text>
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

function renderReflections() {
  return(
    <div id="reflections">
      <Divider><Title level={2} style={{textAlign:"center"}}><Text keyboard>Reflections</Text></Title></Divider>
      <Text>This was a great opportunity to understand and implement user models in an academic context. I would have liked to have interviewed and interacted with more users, but as mentioned before, Covid limited my options in this regard.</Text>
      <Divider/>
      <Text>Regardless, I have reaffirmed a few insights, as well as made a few new ones. In user oriented design, I have found that, if a user believes something as they interact with a design, or if they think a device is to be used a certain way, then they are right, and the design should reflect the affordances and intuition of the user. </Text>
      <Divider/>
      <Text>Microwaves have some ways to go in achieving this, but I believe that modeling microwave designs after other kitchen appliances can improve the user experience significantly.</Text>
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

function SideBar() {
  if(window.screen.width < 820) { return(<div/>) }
  return (
    <Sider className="site-layout-background" width={200}>
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', padding: "12px" }}
    >
    <Anchor affix={true}>
      <Link href="#overview" title="Overview" />
      <Link href="#interface" title="Interface" />
      <Link href="#observations" title="Observations" />
      <Link href="#personas" title="Personas" />
      <Link href="#storyboards" title="Storyboard" />
      <Link href="#reflections" title="Reflections" />
    </Anchor>
    </Menu>
  </Sider>
  );
}

export default App;
