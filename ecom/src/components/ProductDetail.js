import React ,{useState,useEffect,useRef} from 'react';
import ProductDescription from './ProductDescription';
import Wraper from './Wraper';
import Slider from 'react-slick';
import Details from '../covers/Details';
import Smallimages from '../covers/Smallimages';
import Price from '../covers/Price';
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router'
import { GET_PRODUCT } from '../Graphql/Queries';

// import { Container } from './styles';

function ProductDetail() {
    const {id} = useParams()
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
    const { loading, data,error } =  useQuery(GET_PRODUCT,{
        variables:{id:id}
    });
    const [item, setitem] = useState()
    const [delayProduct,setDelayProduct] = useState(true)
    useEffect(() => {
        if (!loading) {
            // console.log(data.allProducts);
            // const pro = data.searchProducts.edges.map((it) =>it.node)
            // console.log(pro);
            setitem(data.getProduct)

        } else {
            console.log('not')
        }
        
        setTimeout(() => {
            setDelayProduct(false)  
        }, 5000);

    }, [delayProduct])
    if (error){
        console.log(error)
    }
console.log('shsy')
  return(
      <div>
      <Wraper title = {'Product'} />
      {/*Section Start*/}
      {(item)?
        <section >
            <div className="collection-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-10 col-xs-12">
                            
                                    <div>
                                        <img src={`http://127.0.0.1:8000/media/${item.image}`}  className="img-fluid image_zoom_cls-0" />
                                    </div>
                            
                        </div>

                        <Details item={item} />

                        <Price  item={item} navOne={nav1} />

                    </div>
                </div>
            </div>
        </section> : ''}
        {/*Section End*/}
        <section className="tab-product m-0">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-12">
                        <ProductDescription item={item} />
                    </div>
                </div>
            </div>
        </section>
      </div>
  );
}

export default ProductDetail;