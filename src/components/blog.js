import React from 'react';
import * as contentful from 'contentful'
import BlogItem from '../blog/BlogItem';
import BlogPageHeader from './BlogPageHeader';

class Blog extends React.Component {
    state = {
        posts: []
    }

    client = contentful.createClient({
        space: '4cvz01czbdfv',
        accessToken: 'OtikD-CnzqU80JYSaj-wQwzL2j91Xbj--xwt6FAj498'
    })

    componentDidMount() {
        this.fetchPosts().then(this.setPosts);
    }

    fetchPosts = () => this.client.getEntries()

    setPosts = response => {
        this.setState({
            posts: response.items
        })
    }

    render() {
        return (
            <div>
                <BlogPageHeader color="is-info" title="Code Blog">
                    Your standard <strong>JavaScript</strong> programming blog, albeit,
                    probably not very good, but I will at least try to keep it entertaining.
                    This blog is a chronological mix of random posts on Angular, React,
                    Functional Programming, and my <strong>project walkthroughs</strong>.
                </BlogPageHeader>
                <br />
                {this.state.posts.map(({ fields }, i) =>
                    <BlogItem key={i} {...fields} />
                )}
            </div>
        )
    }

}

export default Blog; 