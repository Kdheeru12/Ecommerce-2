import React, { useState,useEffect,useContext, } from 'react';

import Pace from 'react-pace-progress'
import { Link, useHistory } from 'react-router-dom';
// Import custom components
import CartContainer from './CartContainer';
import SideBar from './Sidenavbar';
import TopBar from './Topbar';
import Search from '../Images/search.png'
import Settings from '../Images/setting.png'
import Offers from '../covers/Offers'

export default function HeaderOne() {
	const [loading, setloading] = useState(false);
	const [open, setopen] = useState();
	const [search, setsearch] = useState(null)
	const handleScroll = () => {
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
	useEffect(() => {
		setTimeout(function() {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);

        setopen(true);
		window.addEventListener('scroll', handleScroll);
		window.removeEventListener('scroll', handleScroll);
	}, []);
	const openNav = () =>{
		var openmyslide = document.getElementById("mySidenav");
        if(openmyslide){
            openmyslide.classList.add('open-side')
		}
	}
	const openSearch = () =>{
		document.getElementById("search-overlay").style.display = "block";
		
	}
	const closeSearch = () =>{
		document.getElementById("search-overlay").style.display = "none";
	}
	const 	load = ()=>{
		setloading(true);
		fetch().then(()=>{
			// deal with data fetched
			setloading(true);
		})
	};
	const history = useHistory()
	const Submit = (e) =>{
		e.preventDefault()
		history.push(`/search?query=${search}`)
		window.location.reload()
	}


		return (
			<div>
				<header id="sticky" className="sticky">
					{loading ? <Pace color="#27ae60"/> : null}
					<div className="mobile-fix-option"></div>
					{/*Top Header Component*/}
					<TopBar/>
					
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="main-menu">
									<div className="menu-left">
										<div className="navbar">
											<a href='/' 
											//onClick={openNav}
											>
												<div className="bar-style"> <i className="fa fa-home " aria-hidden="true"> Home</i></div>
											</a>
											{/*SideBar Navigation Component*/}
											<SideBar/>
										</div>
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
											<div className="icon-nav">
												<ul>
													<li className="onhover-div mobile-search">
														<div><img src={Search} onClick={openSearch} className="img-fluid" alt="" />
															<i className="fa fa-search" onClick={openSearch}></i></div>
													</li>
													<li className="onhover-div mobile-setting">
														<div><img src={Settings} className="img-fluid" alt="" />
															<i className="fa fa-cog"></i></div>
														<div className="show-div setting">
															<h6>language</h6>
															{/* <ul>
																<li><a href={null} onClick={() => this.changeLanguage('en')}>English</a> </li>
																<li><a href={null} onClick={() => this.changeLanguage('fn')}>French</a> </li>
															</ul>
															<h6>currency</h6>
															<ul className="list-inline">
																<li><a href={null} onClick={() => this.props.changeCurrency('€')}>euro</a> </li>
																<li><a href={null} onClick={() => this.props.changeCurrency('₹')}>rupees</a> </li>
																<li><a href={null} onClick={() => this.props.changeCurrency('£')}>pound</a> </li>
																<li><a href={null} onClick={() => this.props.changeCurrency('$')}>doller</a> </li>
															</ul> */}
														</div>
													</li>
													{/*Header Cart Component */}
													<CartContainer/>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>

                <div id="search-overlay" className="search-overlay">
                    <div>
                        <span className="closebtn" onClick={closeSearch} title="Close Overlay">×</span>
                        <div className="overlay-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <form onSubmit={Submit}>
                                            <div className="form-group">
                                                <input type="text" value={search} onChange={(e) => setsearch(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Search a Product" />
                                            </div>
                                            <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

			</div>
			)

}
