import React,{useState,useEffect} from 'react'

export default function Smallimages({item,settings}) {
    const [nav2, setnav2] = useState(null)
    const slider2 = useRef();
    var productsnav = settings;

    return (
        <div className="row">
        <div className="col-12 p-0">
            <Slider {...productsnav} asNavFor={this.props.navOne} ref={slider => (this.slider2 = slider)} className="slider-nav">
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
