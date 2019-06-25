import React from 'react';
import { Grid, Cell } from 'react-mdl';

function LandingPage() {
    return (
        <div className="landingPage">
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img
                        src="https://robohash.org/88.130.49.243.png?set=set2"
                        alt="avater"
                        className="avater-img"
                    />
                    <div className="banner-text">
                        <h1>Front-End Developer</h1>

                        <hr />

                        <p>ReactJs| Redux| Html5| Css| JavaScript</p>
                        <div className="social-links">
                            <a href="https://stackoverflow.com/users/10690238/jude-obiejesi" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-stack-overflow" aria-hidden="true"></i>
                            </a>

                            <a href="https://github.com/JaybeeClassical" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>

                            <a href="https://twitter.com/Chinweike_Dev" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    );
}

export default LandingPage;