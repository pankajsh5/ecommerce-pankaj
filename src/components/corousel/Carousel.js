import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./data";


const ProductCarousel = ({products}) => {
    return(
        <div>
            <Carousel
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 500ms ease"
            transitionDuration={1000}
            >
                {products}
                </Carousel>
        </div>
    )
}

export default ProductCarousel