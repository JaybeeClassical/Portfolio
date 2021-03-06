import React from 'react';
import * as Markdown from 'react-markdown';
import { Link } from 'react-router-dom';
import moment from 'moment';

const BlogItem = (props) => (
    <div className="box">
        <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                    <img src={props.icon} alt="image" />
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <h1>{props.title}</h1>
                    <Markdown source={props.content.split("")
                        .splice(0, 150).join("").concat('...')} />
                </div>
                <div className="level">
                    <div className="level-left">
                        <Link className="level-item button is-small is-link is-outlined"
                            to={{
                                pathname: `/blog/${props.path}`,
                                state: { props }
                            }}>
                            Read more
                        </Link>
                    </div>
                    <div className="level-right">
                        <p className="level-item button is-small is-link is-size-7">
                            {moment(props.date).calendar(null, {
                                sameDay: '[Today]',
                                lastDay: '[Yesterday]',
                                lastWeek: '[Last] dddd',
                                sameElse: 'MMM Do YYYY'
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </div>
)

export default BlogItem