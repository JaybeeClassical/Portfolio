import React from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Footers from './footer';


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card className="shadow" shadow={4} style={{ width: '300px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fdf', height: '140px', background: 'url(https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            This is a Filter Search Project made with reactjs to make name search easier
                        </CardText>
                        <CardActions border>
                            <Button colored>Get Started</Button>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#000' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* The second Card Section */}
                    <Card shadow={4} style={{ width: '300px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fdf', height: '140px', background: 'url(https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            This is a Filter Search Project made with reactjs to make name search easier
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#000' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* The Third Card Section */}
                    <Card shadow={4} style={{ width: '300px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fdf', height: '140px', background: 'url(https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            This is a Filter Search Project made with reactjs to make name search easier
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#000' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* The Fourth Card Section */}
                    <Card shadow={4} style={{ width: '300px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fdf', height: '140px', background: 'url(https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            This is a Filter Search Project made with reactjs to make name search easier
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#000' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
                /* The React Card Projects Stop here */
            )
        } else if (this.state.activeTab === 1) {
            return (
                /* The JavaScript Card Projects Start here */
                <div className="projects-grid">
                    <Card shadow={4} style={{ width: '300px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fdf', height: '140px', background: 'url(https://i.ya-webdesign.com/images/vector-javascript-icons-2.png) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            This is a Filter Search Project made with reactjs to make name search easier
                        </CardText>
                        <CardActions border>
                            <Button colored>Get Started</Button>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#000' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* The second Card Section */}
                    <Card shadow={4} style={{ width: '300px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fdf', height: '140px', background: 'url(https://i.ya-webdesign.com/images/vector-javascript-icons-2.png) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            This is a Filter Search Project made with reactjs to make name search easier
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#000' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* The Third Card Section */}
                    <Card shadow={4} style={{ width: '300px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#000', height: '140px', background: 'url(https://i.ya-webdesign.com/images/vector-javascript-icons-2.png) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            This is a Filter Search Project made with reactjs to make name search easier
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#000' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
                /* The JavaScript Card Projects Stop here */
            )
        } else if (this.state.activeTab === 2) {
            return (
                /* The Html/Css Card Projects Start here */
                <div>
                    <Card shadow={4} style={{ width: '300px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fdf', height: '140px', background: 'url(https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            This is a Filter Search Project made with reactjs to make name search easier
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#000' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
                /* The Html/Css Card Projects Stop here */
            )
        } else if (this.state.activeTab === 3) {
            return (
                /* The Wprdpress Card Projects Start here */
                <div className="projects-grid">
                    <Card shadow={4} style={{ width: '300px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fdf', height: '140px', background: 'url(https://bowerwebsolutions.com/newbws/wp-content/uploads/2016/12/wordpress-logo-circle.jpg) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            This is a Filter Search Project made with reactjs to make name search easier
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#000' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* The second Card Section */}
                    <Card shadow={4} style={{ width: '300px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fdf', height: '140px', background: 'url(https://bowerwebsolutions.com/newbws/wp-content/uploads/2016/12/wordpress-logo-circle.jpg) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            This is a Filter Search Project made with reactjs to make name search easier
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#000' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
                /* The Wordpress Card Projects Stop here */
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

                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
                <Footers />
            </div>
        );
    }
}

export default Projects;