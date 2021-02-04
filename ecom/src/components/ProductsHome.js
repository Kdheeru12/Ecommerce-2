import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductList from './ProductList';
import Wraper from './Wraper';
import { useQuery } from '@apollo/client';
import { ALL_PRODUCTS } from '../Graphql/Queries';

function ProductHome() {
       const {loading,error,data } = useQuery(ALL_PRODUCTS) 
       if(loading){
           console.log(loading);
       }
       if(error){
           console.log(error);
       }
       console.log(data)
       useEffect(() => {
            if(!loading){
                console.log(data);
            }
       }, []);
        return (
            <div>
                <Wraper title={'Collection'}/>

                <section className="section-b-space">
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="collection-content col">
                                    <div className="page-main-content">
                                        <div className="top-banner-wrapper">
                                            <a href="#">
                                                <img src="/assets/images/mega-menu/2.jpg" className="img-fluid blur-up lazyload" alt="" /></a>
                                            <div className="top-banner-content small-section pb-0">
                                                <h4>fashion</h4>
                                                <h5>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry.</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s, when an unknown printer took a galley of type
                                                    and scrambled it to make a type specimen book. It has survived not
                                                    only five centuries, but also the leap into electronic typesetting,
                                                    remaining essentially unchanged. It was popularised in the 1960s
                                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                                    and more recently with desktop publishing software like Aldus
                                                    PageMaker including versions of Lorem Ipsum.</p>
                                            </div>
                                        </div>
                                        <div className="collection-product-wrapper">
                                            <div className="section-t-space portfolio-section portfolio-padding metro-section port-col">
                                                {/* {products.length > 0 ? */}
                                                    <InfiniteScroll
                                                        dataLength={1} //This is important field to render the next data
                                                        // next={this.fetchMoreItems}
                                                        // hasMore={this.state.hasMoreItems}
                                                        loader={<div className="loading-cls"></div>}
                                                        endMessage={
                                                            <p className="seen-cls seen-it-cls">
                                                                <b>Yay! You have seen it all</b>
                                                            </p>
                                                        }
                                                    >
                                                        <div className="isotopeContainer row">
                                                            {/* { products.slice(0, this.state.limit).map((product, index) => */}
                                                                <div className="col-xl-3 col-sm-6 isotopeSelector" key={1}>
                                                                    <ProductList product={{name:'ddd'}} 
                                                                                //  onAddToCompareClicked={() => addToCompare(product)}
                                                                                //  onAddToWishlistClicked={() => addToWishlist(product)}
                                                                                //  onAddToCartClicked={addToCart} key={1}
                                                                                 
                                                                                 />
                                                                </div>)
                                                            {/* } */}
                                                        </div>
                                                    </InfiniteScroll>
                                                    :
                                                    <div className="row">
                                                        <div className="col-sm-12 text-center section-b-space mt-5 no-found" >
                                                            <img src={`${process.env.PUBLIC_URL}/assets/images/empty-search.jpg`} className="img-fluid mb-4" />
                                                            <h3>Sorry! Couldn't find the product you were looking For!!!    </h3>
                                                            <p>Please check if you have misspelt something or try searching with other words.</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/`} className="btn btn-solid">continue shopping</Link>
                                                        </div>
                                                    </div>
                                                {/* } */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
// const mapStateToProps = (state) => ({
//     products: getVisibleproducts(state.data, state.filters),
//     symbol: state.data.symbol,
// })

export default ProductHome