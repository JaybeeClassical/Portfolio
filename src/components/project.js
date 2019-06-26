import React from 'react';
import { Tab, Tabs } from 'react-mdl';

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    render() {
        return (
            <div className="Category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>ReactJs</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>Html/Css</Tab>
                </Tabs>
                <section>
                    <div className="content">Content for the tab: {this.state.activeTab}</div>
                </section>
            </div>
        );
    }
}

export default Projects;