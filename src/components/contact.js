import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Footers from './footer';

function Contact() {
    return (
        <div>
            <Grid className="contact-grid">
                <Cell col="6">
                    <h3>Jude Chinweike Obiejesi</h3>
                    <img src="https://pbs.twimg.com/profile_images/1115179633081815040/H7m30Dph_400x400.jpg"
                        alt="avater"
                        className="avater-img" style={{ height: '220px' }} />
                    <p>
                        Jude Chinweike (Jaybee) is a front-end developer,
                        Technical Content Writer and Speaker who have passion in skill education
                        working hard to see that tech opportunities are evenly distributed
                    </p>
                </Cell>
                <Cell col="6" className="contact-me">
                    <h2>Contact me</h2>

                    <hr />
                    <List>
                        <ListItem>
                            <ListItemContent icon="email">johnboscoobiejesi@gmail.com</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon="phone">09031807262</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon="home">9 Ajayi Street, Ago palace, Okota Lagos</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent ><i className="fa fa-twitter"></i>Jude Obiejesi</ListItemContent>
                        </ListItem>
                    </List>

                </Cell>
            </Grid>
            <hr />
            <Footers />

        </div>
    );
}

export default Contact;