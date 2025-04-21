import React, { useEffect, useState } from 'react'
import ProductItem from './productItem'

const ProductSection = () => {

  const [products, setProducts] = useState([]);

  const getProducts = () =>{
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => setProducts(data))
  }

  useEffect(getProducts,[]);

  return (
    <div className="container">
        <div className="row">
        {products.map((product,index)=> 
            <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                <ProductItem key={index} title={product.title} price ={product.price} image = {product.image}/>
            </div>
        )}
        </div>
    </div>
  )
}

export default ProductSection