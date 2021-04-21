import React,{useEffect,useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductList from './ProductList';
import Wraper from './Wraper';
import { useQuery } from '@apollo/client';
import {SEARCH} from '../Graphql/Queries';
import { css } from "@emotion/core";
import ScaleLoader from 'react-spinners/ScaleLoader';
import queryString from 'query-string';
import dog from '../dog.jpg'

function Search() {
    var qs = require('qs');
    const [delayProduct,setDelayProduct] = useState(true)
    const [products, setproducts] = useState([]);
    const [hasMoreitems, sethasMoreitems] = useState(true)
    const [limit, setlimit] = useState(20);
    const {search} = useLocation()
    const {query} = queryString.parse(search)
    console.log(query)
    var { loading ,data} = useQuery(SEARCH,{variables:{query:query}})
    useEffect(() => {
        if (!loading) {
            setproducts(data.getSearch)

        } else {
            console.log('not')
        }
        
        setTimeout(() => {
            setDelayProduct(false)  
        }, 500);

    }, [delayProduct])
    const fetchMoreItems = () => {
        if (limit >= products.length) {
            sethasMoreitems(false)
            return;
        }
        // a fake async api call
        setTimeout(() => {
            setlimit(limit+3)
        }, 3000);

    }
    const override = css`
    display: block;
    margin: 10 auto;
    padding:auto;
    align-items:center;
    text-align:center;
    justify-content:center;
`;
    console.log(products);
        return (
            (delayProduct)?
            <ScaleLoader css={override} color={'#F78205'} loading={delayProduct} height={50} width={4} radius={2} margin={2} />
            :
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
                                                <h4>Products</h4>
                                            </div>
                                        </div>
                                        <div className="collection-product-wrapper">
                                            <div className="section-t-space portfolio-section portfolio-padding metro-section port-col">
                                                {products.length > 0 ?
                                                    <InfiniteScroll
                                                        dataLength={limit} //This is important field to render the next data
                                                        next={fetchMoreItems}
                                                        hasMore={hasMoreitems}
                                                        loader={<div className="loading-cls"></div>}
                                                        endMessage={
                                                            <p className="seen-cls seen-it-cls">
                                                                <b>Yay! You have seen it all</b>
                                                            </p>
                                                        }

                                                    >
                                                        <div className="isotopeContainer row">
                                                            { products.slice(0,limit).map((product) =>
                                                                <div className="col-xl-3 col-sm-6 isotopeSelector" key={product.id}>
                                                                    <ProductList product={product} 
                                                                                //  onAddToCompareClicked={() => addToCompare(product)}
                                                                                //  onAddToWishlistClicked={() => addToWishlist(product)}
                                                                                //  onAddToCartClicked={addToCart} 
                                                                                key={product.id}
                                                                                 
                                                                                 />
                                                                </div>)}
                                                        </div>
                                                    </InfiniteScroll>
                                                    :
                                                    <div className="row">
                                                        <div className="col-sm-12 text-center section-b-space mt-5 no-found" >
                                                            <img src={dog} className="img-fluid mb-4" />
                                                            <h3>Sorry! Couldn't find the product you were looking For!!!    </h3>
                                                            <p>Please check if you have misspelt something or try searching with other words.</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/`} className="btn btn-solid">continue shopping</Link>
                                                        </div>
                                                    </div>
                                                    }
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


export default Search