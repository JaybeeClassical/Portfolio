import React from 'react';
import { FooterSection, FooterLinkList } from 'react-mdl';

function Footer() {
    return (
        <div>
            <Footer size="mini">
                <FooterSection type="left" logo="Title">
                    <FooterLinkList>
                        <a href="#">Help</a>
                        <a href="#">Privacy & Terms</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>
        </div>
    );
}

export default Footer;