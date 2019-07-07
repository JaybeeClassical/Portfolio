import React, { Component } from 'react';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';


class Footers extends Component {
    render() {
        return (
            <div className="footer">
                <Footer size="mini">
                    <FooterSection type="left" logo="Title">
                        <FooterLinkList>
                            <a href="/">Blog</a>
                            <a href="/">Contact </a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
            </div>
        )
    }
}

export default Footers;