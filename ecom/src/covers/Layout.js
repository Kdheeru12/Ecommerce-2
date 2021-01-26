import React, {Component} from 'react';
import FooterOne from './Footer';
import HeaderOne from './headerone';



class Layout extends Component {

    render() {
        return (
            <div>
                <HeaderOne logoName={'logo.png'}/>
                {this.props.children}
                <FooterOne logoName={'logo.png'}/>

                {/* <ThemeSettings /> */}

            </div>
        );
    }
}

export default Layout;
