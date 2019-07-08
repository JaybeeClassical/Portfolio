import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Footers from './footer';

function Resume() {
    return (
        <div>
            <Grid className="resume-grid">
                <Cell className="resume-left" col="4">
                    <div >
                        <img
                            src="https://pbs.twimg.com/profile_images/1115179633081815040/H7m30Dph_400x400.jpg"
                            alt="avater"
                            className="avater-img"
                            style={{ height: '200px' }}
                        />
                    </div>
                    <h2>Jude Chinweike Obiejesi</h2>
                    <h4>Front-end Developer</h4>
                    <hr style={{ borderTop: '3px solid #182848', width: '50%' }} />
                    <p>
                        I am a proactive person and a learner who always involve in building
                        successful products that aims at making the world a better
                        place, while I keep growing my technical and soft skills as a
                        frontend developer. An enthusiastic team player and doer.
                    </p>
                    <p>
                        I am an Energetic front-end developer with 1+ year experience
                        developing responsive web application and full jamstack web app and
                        efficient code for Tech startups
                    </p>
                    <hr style={{ borderTop: '3px solid #182848', width: '50%' }} />
                </Cell>
                <Cell className="resume-right" col="8">
                    <h2>Education</h2>
                    <Education
                        startYear={2015}
                        endYear={2018}
                        schoolName={'JohnBosco Institute of Technology Akure Nigeria '}
                        schoolDescription={'Computer Science Technology'}
                    />

                    <Education
                        startYear={2019}
                        endYear={'present'}
                        schoolName={'YabaTech College of Technology Lagos Nigeria '}
                        schoolDescription={'Computer Science Technology'}
                    />

                    <hr style={{ borderTop: '3px solid #182848' }} />

                    <Experience
                        startYear={'January 2019'}
                        endYear={'August 2019'}
                        jobName={'Guinea Insurance Plc'}
                    />


                    <Experience
                        startYear={'2019'}
                        endYear={'Present'}
                        jobName={'DeepTech Africa'}
                        jobDescription={'ssdsdssd'}
                    />

                    <hr style={{ borderTop: '3px solid #182848' }} />

                    <h3>Skills</h3>
                    <Skills
                        skill="javaScript"
                        progress={80}
                    />
                    <Skills
                        skill="React"
                        progress={95}
                    />
                    <Skills
                        skill="Wordpress"
                        progress={90}
                    />
                    <Skills
                        skill="Html"
                        progress={98}
                    />
                    <Skills
                        skill="CSS"
                        progress={70}
                    />

                </Cell>
            </Grid>
            <Footers />
        </div>
    );
}

export default Resume;