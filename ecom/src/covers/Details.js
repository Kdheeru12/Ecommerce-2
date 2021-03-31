import React from 'react'

export default function Details({item}) {
    return (
        <div className="col-lg-4">
        <div className="product-right product-description-box">
            <h2> {item.name} </h2>
            <div className="border-product">
                <h6 className="product-title">product details</h6>
                <p>{item.name}</p>
            </div>
            <div className="single-product-tables border-product detail-section">
                <table>
                    <tbody>
                    <tr>
                        <td>price:</td>
                        <td>{item.price}</td>
                    </tr>
                    <tr>
                        <td>Avalibility:</td>
                        <td>InStock</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="border-product">
                <h6 className="product-title">share it</h6>
                <div className="product-icon">
                    <ul className="product-social">
                        <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://plus.google.com/discover" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                        <button className="wishlist-btn" 
                        // onClick={() => addToWishlistClicked(item)}
                        >
                            <i className="fa fa-heart"></i><span className="title-font">Add To WishList</span>
                        </button>
                </div>
            </div>
            <div className="border-product">
                <h6 className="product-title">100% SECURE PAYMENT</h6>
                <div className="payment-card-bottom">
                    <ul>
                        <li>
                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/visa.png`} alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/mastercard.png`} alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/paypal.png`} alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/american-express.png`} alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/discover.png`} alt="" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}
