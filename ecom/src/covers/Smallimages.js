import React,{useState,useEffect,useRef} from 'react'
import Slider from 'react-slick';

export default function Smallimages({item,settings,navOne}) {
    const [nav2, setnav2] = useState(null)
    const slider2 = useRef();
    var productsnav = settings;
    useEffect(() => {
        setnav2(slider2.current)
        
    }, [])
    return (
        <div className="row">
        <div className="col-12 p-0">
            <Slider {...productsnav} asNavFor={navOne} ref={slider => (slider2 = slider)} className="slider-nav">
                {item.variants?
                item.variants.map((vari, index) =>
                    <div key={index}>
                        <img src={`${vari.images}`} key={index} alt=""  className="img-fluid" />
                    </div>
                ):
                    item.pictures.map((vari, index) =>
                        <div key={index}>
                            <img src={`${vari}`} key={index} alt=""  className="img-fluid" />
                        </div>
                    )}
            </Slider>
        </div>
    </div>
    )
}
