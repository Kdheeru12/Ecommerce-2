import React,{useContext} from 'react';
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
import Wraper from './Wraper';
import CartContext from '../helpers/cart';
import 'react-toastify/dist/ReactToastify.css';


export default function Wishlist() {
    const {addToCart,wishlist,addtowish } = useContext(CartContext)
    const plusQty = (id) => {
        console.log(id);
        if(true) {
            console.log('ddd');
            addToCart(id,'add')
            addtowish(id)
        }
    }
    return (
        <div>
            {/*SEO Support*/}
            <Helmet>
                <title>MultiKart | Cart List Page</title>
                <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
            </Helmet>
            {/*SEO Support End */}

            <Wraper title={'wishlist'}/>

            {(wishlist) ?
            <section className="cart-section section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <table className="table cart-table table-responsive-xs">
                                <thead>
                                <tr className="table-head">
                                    <th scope="col">image</th>
                                    <th scope="col">product name</th>
                                    <th scope="col">price</th>
                                    <th scope="col">quantity</th>
                                    <th scope="col">action</th>
                                    <th scope="col">total</th>
                                </tr>
                                </thead>
                                {
                                    wishlist.map((items)=>(


                                    <tbody key={items.id}>
                                        <tr>
                                            <td>
                                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/1`}>
                                                    <img src={`http://127.0.0.1:8000/media/${items.product.image}`}/>
                                                </Link>
                                            </td>
                                            <td><Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/1`}>{items.product.name}</Link>
                                                <div className="mobile-cart-content row">
                                                    <div className="col-xs-3">
                                                            <div className="qty-box">
                                                            <div className="input-group">
                                                               
                                                                <span className="input-group-prepend">
                                                                <button className="btn quantity-right-plus" //onClick={() => this.props.incrementQty(item, 1)}  
                                                                data-type="plus" //disabled={(item.qty >= item.stock)? true : false}
                                                                onClick={() =>plusQty(items.product.id)}
                                                                >
                                                                move to cart                                                                </button>
                                                            </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color">{items.product.price}</h2>
                                                    </div>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color">
                                                            <a href={null} type="button" className="icon" //onClick={() => this.props.removeFromCart(item)}
                                                            onClick={()=>addtowish(items.product.id)}
                                                            >
                                                                <i className="icon-close"></i>
                                                            </a>
                                                        </h2>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><h2>{items.product.price}</h2></td>
                                            <td>
                                                <div className="qty-box">
                                                    <div className="input-group">
                                                        <span className="input-group-prepend">
                                                        <button className="btn quantity-right-plus" //onClick={() => this.props.incrementQty(item, 1)}  
                                                        onClick={() =>plusQty(items.product.id)}
                                                        data-type="plus" //disabled={(item.qty >= item.stock)? true : false}
                                                        >
                                                        move to cart                                                        </button>
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* {(item.qty >= item.stock)? 'out of Stock' : ''} */}
                                            </td>
                                            <td>
                                                <a href={null} type="button" className="icon" //onClick={() => this.props.removeFromCart(item)}
                                                onClick={()=>addtowish(items.product.id)}
                                                >
                                                    <i className="fa fa-times"></i>
                                                </a>
                                            </td>
                                            <td><h2 className="td-color">{items.product.price}</h2></td>
                                        </tr>
                                    </tbody> 
                                        ))}
                            </table>
                            <table className="table cart-table table-responsive-md">
                                <tfoot>
                                <tr>
                                    <td>total price :</td>
                                    <td><h2>{'dd'} </h2></td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div className="row cart-buttons">
                        <div className="col-6">
                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} className="btn btn-solid">continue shopping</Link>
                        </div>
                        <div className="col-6">
                            <Link to={`${process.env.PUBLIC_URL}/checkout`} className="btn btn-solid">check out</Link>
                        </div>
                    </div>
                </div>
            </section>
            :
            <section className="cart-section section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div >
                                <div className="col-sm-12 empty-cart-cls text-center">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon-empty-cart.png`} className="img-fluid mb-4" alt="" />
                                    <h3>
                                        <strong>Your Wishlist is Empty</strong>
                                    </h3>
                                    <h4>Explore more shortlist some items.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            }
        </div>
    )
}