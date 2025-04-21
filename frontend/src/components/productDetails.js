import React from 'react'
import './details.css'


const ProductDetails = ({product}) => {
  
    return (
        <>
            <section id="product-info">

                <div className="item-image-parent">
                    <div className="item-image-main" style={{width:"180px"}}>
                        <img src={product.imageurl} alt="default" />
                    </div>
                </div>

                <div className="item-info-parent">
                    
                    <div className="main-info">
                        <h4>{product.title}</h4>
                        <div className="star-rating">
                            <span>★★★★</span>★            
                        </div>
                        <p>Price: <span id="price">₹ {product.price}</span></p>
                    </div>
                    
                </div>
            </section>
        </>

    
    )
}

export default ProductDetails