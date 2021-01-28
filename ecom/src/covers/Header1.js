import React, { Component } from 'react';

import Pace from 'react-pace-progress'
import { Link } from 'react-router-dom';

// Import custom components
import TopBar from './Topbar';


class 
HeaderTwo extends Component {

    constructor(props) {
        super(props);

		this.state = {
			isLoading:false
		}
    }
    /*=====================
         Pre loader
         ==========================*/
    componentDidMount() {
        setTimeout(function() {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);

        this.setState({ open: true });
    }

    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll);
	}
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number >= 300) {
            if (window.innerWidth < 576) {
                document.getElementById("sticky").classList.remove('fixed');
            }else
            	document.getElementById("sticky").classList.add('fixed');
        } else {
            document.getElementById("sticky").classList.remove('fixed');
        }
    }

    

    openNav() {
        var openmyslide = document.getElementById("mySidenav");
        if(openmyslide){
            openmyslide.classList.add('open-side')
		}
    }
    openSearch() {
        document.getElementById("search-overlay").style.display = "block";
    }

    closeSearch() {
        document.getElementById("search-overlay").style.display = "none";
    }

	load = ()=>{
		this.setState({isLoading: true});
		fetch().then(()=>{
			// deal with data fetched
			this.setState({isLoading: false})
		})
	};
	
	render() {

		return (
			<div>
				<header id="sticky" className="sticky">
					{this.state.isLoading ? <Pace color="#27ae60"/> : null}
					{/* <div className="mobile-fix-option"></div> */}
					{/*Top Header Component*/}
					{/* <TopBar/> */}

					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="main-menu">
									<div className="menu-left">
										<div className="brand-logo">
                                            <Link to={`${process.env.PUBLIC_URL}/`} >
                                                <img src={`https://www.shutterstock.com/image-vector/world-wide-web-icon-trendy-flat-1423730216`} alt="" className="img-fluid" />
                                            </Link>;
										</div>
									</div>
									<div className="menu-right pull-right">
										{/*Top Navigation Bar Component*/}
										{/* <NavBar/> */}

										<div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
			)
	}
}

export default HeaderTwo;