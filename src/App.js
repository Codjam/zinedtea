import React, { Component, Fragment } from 'react';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Route, Link, Switch } from 'react-router-dom';
import home from './components/home.js';
import teas from './components/teas.js';
import comments from './components/comments.js';
import user from './components/user.js';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';

class App extends Component {
  render() {
    return (
      <Fragment>
      <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Zinedtea" scroll>
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/comments">Comments</Link>
                <Link to="/teas">Teas</Link>
                <Link to="/user">User</Link>
            </Navigation>
        </Header>
          <Drawer title="Login">
              <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/comments">Comments</Link>
                <Link to="/teas">Teas</Link>
                <Link to="/user">User</Link>
              </Navigation>
          </Drawer>
          <Content>
            <Switch>
              <Route  exact path='/' component={home} />
              <Route  path='/home' component={home} />
              <Route path='/teas' component={teas} />
              <Route path='/comments' component={comments} />
              <Route path='/user' component={user} />
            </Switch>
          </Content>
      </Layout>
  </div>
  <Footer className="bottom-bar"  size="mini">
      <FooterSection type="left" logo="Deniz & Jamal">
          <FooterLinkList>
              <a href="#">Help</a>
              <a href="#">Privacy & Terms</a>

          </FooterLinkList>
      </FooterSection>
  </Footer>
</Fragment>
    );
  }
}


export default App;
