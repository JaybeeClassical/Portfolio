import React from 'react';
import LandingPage from './landingpage';
import { Switch, Route } from 'react-router-dom';
import Resume from './resume';
import Aboutme from './aboutme';
import Project from './project';
import Contact from './contact';
import Footer from './Footer';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/resume" component={Resume} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />

        <Route path="/Footer" component={Footer} />

    </Switch>
)

export default Main; 