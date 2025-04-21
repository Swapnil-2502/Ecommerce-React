import React from 'react'

import Navbar from "../components/navbar";
import { useSelector } from 'react-redux';
import ProductDetails from '../components/productDetails';

const Details = () => {
    
    let product = useSelector((state) => state.currentProduct.product);


    return (
        <>
            <div >
                <Navbar />
            </div>
            
            <div>
                <ProductDetails product = {product} />
            </div>
            
        </>
       
    )
}

export default Details