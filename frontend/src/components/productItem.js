import React from 'react'
import './productItem.css'
import IconList from './iconList'

const SingleItem = ({title,price,imageurl}) => {
    const truncateWords = (str, numWords) => {
        return str.split(' ').slice(0, numWords).join(' ') + (str.split(' ').length > numWords ? '...' : '')
      }
    return (
        <>
            <div className="product"> 
                <img src={imageurl} alt="" />
                <IconList />
            </div>
            <div className="tag bg-red">sale</div>
            <div className="title pt-4 pb-1">{truncateWords(title, 5)}</div>
            <div className="d-flex align-content-center justify-content-center"> 
                <span className="fas fa-star"></span> <span className="fas fa-star"></span> 
                <span className="fas fa-star"></span> <span className="fas fa-star"></span> 
                <span className="fas fa-star"></span> </div>
            <div className="price">₹ {price}</div>
        </>
        
    )
}

const ProductItem = ({title,price,image}) => {
  return (
    <>
        <SingleItem title={title} price={price} imageurl={image} />
    </>
  )
}

export default ProductItem