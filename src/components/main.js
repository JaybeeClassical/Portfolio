import React from 'react';
import LandingPage from './landingpage';
import { Switch, Route } from 'react-router-dom';
import Home from './landingpage';
import Aboutme from './aboutme';
import Resume from './resume';
import Project from './project';
import Contact from './contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/resume" component={Resume} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />


    </Switch>
)

export default Main; 