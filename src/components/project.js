import React from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <Card shadow={10} style={{ width: '300px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fdf', height: '140px', background: 'url(https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            This is a Filter Search Project made with reactjs to make name search easier
                        </CardText>
                        <CardActions border>
                            <Button colored>Get Started</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#000' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* The second Card Section */}
                    <Card shadow={10} style={{ width: '300px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fdf', height: '140px', background: 'url(https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            This is a Filter Search Project made with reactjs to make name search easier
                        </CardText>
                        <CardActions border>
                            <Button colored>Get Started</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#000' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* The Third Card Section */}
                    <Card shadow={10} style={{ width: '300px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fdf', height: '140px', background: 'url(https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            This is a Filter Search Project made with reactjs to make name search easier
                        </CardText>
                        <CardActions border>
                            <Button colored>Get Started</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#000' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>JavaScript Projects</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>Html/Css</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>Wordpress</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>ReactJs </Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>Html/Css</Tab>
                    <Tab>Wordpress</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>

            </div>
        );
    }
}

export default Projects;