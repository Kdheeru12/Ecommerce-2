import React, {Component} from 'react';
import HeaderOne from './headerone';



class Layout extends Component {

    render() {
        return (
            <div>
                <HeaderOne logoName={'logo.png'}/>
                {this.props.children}

                {/* <ThemeSettings /> */}

            </div>
        );
    }
}

export default Layout;
