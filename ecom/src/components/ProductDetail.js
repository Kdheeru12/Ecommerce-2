import React ,{useState,useEffect,useRef} from 'react';
import ProductDescription from './ProductDescription';
import Wraper from './Wraper';
import Slider from 'react-slick';


// import { Container } from './styles';

function ProductDetail() {
    const [nav1, setnav1] = useState(null)
    const [nav2, setnav2] = useState(null)
    const [vertical, setvertical] = useState(null)
    const slider1 = useRef();
    const slider2 = useRef();
    useEffect(() => {
        if (window.innerWidth > 576) {
            setvertical(true)
        }else{
            setvertical(false)
        }
        setnav1(slider1.current)
        setnav2(slider2.current)
    }, [ ])
    var products = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true
    };
    var productsnav = {
        vertical: vertical,
        verticalSwiping: vertical,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-right-slick',
        arrows: false,
        infinite: true,
        centerMode: false,
        dots: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };
  return(
      <div>
      <Wraper title = {'Product'} />
      {(item)?
        <section >
            <div className="collection-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-10 col-xs-12">
                            <Slider {...products} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} className="product-right-slick">
                                {item.variants.map((vari, index) =>
                                    <div key={index}>
                                        <ImageZoom image={vari.images} className="img-fluid image_zoom_cls-0" />
                                    </div>
                                )}
                            </Slider>
                        </div>
                        <div className="col-lg-1 col-sm-2 col-xs-12 pl-0">
                            <SmallImages item={item} settings={productsnav} navOne={this.state.nav1} />
                        </div>

                        <Details item={item} addToWishlistClicked={addToWishlist} />

                        <Price symbol={symbol} item={item} navOne={this.state.nav1} addToCartClicked={addToCart} BuynowClicked={addToCartUnsafe} />

                    </div>
                </div>
            </div>
        </section> : ''}
      </div>
  );
}

export default ProductDetail;