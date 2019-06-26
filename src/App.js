import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Footer from '.components/Footer';


function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-nav" title="Jude Chinweike Obiejesi" scroll>
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About me</Link>
            <Link to="/project">Project</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="I'm Jude">
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About me</Link>
            <Link to="/project">Project</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
