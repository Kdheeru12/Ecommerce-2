import React, {useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContext from '../helpers/cart';

function ProductList({product}) {
    const [open, setOpen] = useState(false);
    const [quantity, setqunatity] = useState(1);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const {addToCart,wishitems,addtowish} = useContext(CartContext)
    
    const plusQty = (id) => {
        console.log(id);
        if(true) {
            console.log('ddd');
            addToCart(id,'add')
        }
    }

    return (
        
        <div className="product-box">


            <div className="img-wrapper">
                    <div className="front">
                        <Link to={`${process.env.PUBLIC_URL}/${product.id}/product-detail`} ><img
                        // src={product.variants?
                        //     this.state.image?this.state.image:product.variants[0].images
                        //     :product.pictures[0]}
                        src={`http://127.0.0.1:8000/media/${product.image}`}
                        className="img-fluid"
                        alt="" /></Link>
                    </div>
                <div className="cart-info cart-wrap">
                    <button  title="Add to cart" 
                    onClick={() =>plusQty(product.id)}
                    >
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </button>
                    <a  href="javascript:void(0)" title="Add to Wishlist" 
                    onClick={()=>addtowish(product.id)} 
                    >
                        <i  style={{color: (wishitems.indexOf(product.id)!==-1) ? "red" :"black"}} className="fa fa-heart" aria-hidden="true"></i>
                    </a>
                    <a href="javascript:void(0)" data-toggle="modal"
                        data-target="#quick-view"
                        title="Quick View"
                        onClick={onOpenModal}><i className="fa fa-search" aria-hidden="true"></i></a>
                    <Link to={`${process.env.PUBLIC_URL}/compare`} title="Compare" 
                    //onClick={onAddToCompareClicked}
                    >
                        <i className="fa fa-refresh" aria-hidden="true"></i></Link>
                </div>
                {/* {product.variants?
                <ul className="product-thumb-list">
                    {product.variants.map((vari, i) =>
                        <li className={`grid_thumb_img ${(vari.images === this.state.image)?'active':''}`} key={i}>
                            <a href="javascript:void(0)" title="Add to Wishlist">
                                <img src={`${vari.images}`} onClick={() => this.onClickHandle(vari.images)} />
                            </a>
                        </li>)
                    }
                </ul>:''} */}

            </div>
            <div className="product-detail">
                <div>
                    <div className="rating">
                        {5}
                    </div>
                    <Link to={`${process.env.PUBLIC_URL}/${product.id}/product-detail`}>
                        <h6>{product.name}</h6>
                    </Link>
                    <h4>{}{product.price}
                        <del><span className="money">{}{product.price}</span></del></h4>
                    {/* {product.variants?
                    <ul className="color-variant">
                        {product.variants.map((vari, i) => {
                            return (
                                <li className={vari.color} key={i} title={vari.color} onClick={() => onClickHandle(vari.images)}></li>)
                        })}
                    </ul>:''} */}
                </div>
            </div>
        <Modal open={open} onClose={onCloseModal} center>
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content quick-view-modal">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6  col-xs-12">
                                    <div className="quick-view-img">
                                        <img src={`http://127.0.0.1:8000/media/${product.image}`} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-6 rtl-text">
                                    <div className="product-right">
                                        <h2> {product.name} </h2>
                                        <h3>{}{product.price}
                                            <del><span className="money">{}{product.price}</span></del>
                                        </h3>
                                        {product.variants?
                                        <ul className="color-variant">
                                            {product.variants.map((vari, i) =>
                                                <li className={vari.color} key={i} title={vari.color} 
                                                //onClick={() => onClickHandle(vari.images)}
                                                ></li>)
                                            }
                                        </ul>:''}
                                        <div className="border-product">
                                            <h6 className="product-title">product details</h6>
                                            <p>{product.shortDetails}</p>
                                        </div>
                                        <div className="product-description border-product">
                                            {product.size?
                                            <div className="size-box">
                                                <ul>
                                                    {product.size.map((size, i) => {
                                                        return <li key={i}><a href="#">{size}</a></li>
                                                    })}
                                                </ul>
                                            </div>:''}
                                            <h6 className="product-title">quantity</h6>
                                            {/* <div className="qty-box">
                                                <div className="input-group">
                                                    <span className="input-group-prepend">
                                                    <button type="button" className="btn quantity-left-minus" onClick={minusQty} data-type="minus" data-field="">
                                                        <i className="fa fa-angle-left"></i>
                                                    </button>
                                                    </span>
                                                    <input type="text" name="quantity" value={quantity}   className="form-control input-number" />
                                                    <span className="input-group-prepend">
                                                    <button type="button" className="btn quantity-right-plus" onClick={plusQty} data-type="plus" data-field="">
                                                    <i className="fa fa-angle-right"></i>
                                                    </button>
                                                    </span>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="product-buttons">
                                            <button  className="btn btn-solid"  >add to cart</button>
                                            {/* onClick={() => onAddToCartClicked(product, quantity)} */}
                                            <Link to={`${process.env.PUBLIC_URL}/${product.id}/product-detail`} className="btn btn-solid">view detail</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </Modal>

        </div>
    )
}

export default ProductList
