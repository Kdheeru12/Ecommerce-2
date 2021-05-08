import React,{useContext} from 'react'
import { useHistory } from 'react-router'
import CartContext from '../helpers/cart'

export default function Price({item}) {
    const {addToCart,cartid } = useContext(CartContext)
    const history = useHistory()
    const plusQty = (id) => {
        console.log(id);
        if(cartid.indexOf(id)===-1) {
            console.log('ddd');
            addToCart(id,'add')
        }
        else if(cartid.indexOf(id)!==-1){
            history.push('/cart')
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
            <h3>{item.offerPercentage!==0 ? item.price - (item.price*item.offerPercentage)/100 :item.price}
            {item.offerPercentage!==0 ?
            <del><span className="money">{item.price}</span></del>:''}
            </h3><span style={{color:item.offerPercentage !==0 ? "red" :"black"}} className="money">{}{item.offerPercentage !==0 ? `${item.offerPercentage}% off` : ''}</span>
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
                <a className="btn btn-solid" onClick={() =>plusQty(item.id)}>{(cartid.indexOf(item.id)!==-1) ? "go to cart" :"add to cart"}</a>
            </div>
        </div>
    </div>
    )
}
