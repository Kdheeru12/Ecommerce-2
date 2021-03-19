import React,{useContext} from 'react'
import CartContext from '../helpers/cart'

export default function Price({item}) {
    const {addToCart,cartItems,cartTotal } = useContext(CartContext)
    console.log(cartItems);
    const plusQty = (id) => {
        console.log(id);
        if(true) {
            console.log('ddd');
            addToCart(id,'add')
        }
    }
    const minusQty = (id,quantity) => {
        if(quantity >= 1) {
            addToCart(id,'remove')
        }
    }
    return (
        <div className="col-lg-4">
        <div className="product-right product-form-box">
            <h4>
                <del>{item.price}</del>
                <span>{'item.discount'}% off</span>
            </h4>
            <h3>{(item.price)} </h3>
            <div className="product-description border-product">
                <h6 className="product-title">Time Reminder</h6>
                <div className="timer">
                    <p id="demo">
                        <span>25
                            <span className="padding-l">:</span>
                            <span className="timer-cal">Days</span>
                        </span>
                        <span>22
                            <span className="padding-l">:</span>
                            <span className="timer-cal">Hrs</span>
                        </span>
                        <span>13
                            <span className="padding-l">:</span>
                            <span className="timer-cal">Min</span>
                        </span>
                        <span>57
                            <span className="timer-cal">Sec</span>
                        </span>
                    </p>
                </div>
            </div>
            <div className="product-description border-product">
                <h6 className="product-title size-text">select size
                    <span><a href="" data-toggle="modal"
                             data-target="#sizemodal">size chart</a></span></h6>
                <div className="modal fade" id="sizemodal" tabIndex="-1"
                     role="dialog" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered"
                         role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title"
                                    id="exampleModalLabel">Sheer Straight
                                    Kurta</h5>
                                <button type="button" className="close"
                                        data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/size-chart.jpg`}
                                     alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>

                <span>{'avalible'}</span>

            </div>
            <div className="product-buttons" >
                <a className="btn btn-solid" onClick={() =>plusQty(item.id)}>add to cart</a>
                <a >add to wishlist</a>
            </div>
        </div>
    </div>
    )
}
