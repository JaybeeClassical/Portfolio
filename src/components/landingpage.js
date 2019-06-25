import React from 'react';
import { Grid, Cell } from 'react-mdl';

function LandingPage() {
    return (
        <div className="landingPage">
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img
                        src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
                        alt="avater"
                        className="avater-img"
                    />
                </Cell>
            </Grid>
        </div>
    );
}

export default LandingPage;