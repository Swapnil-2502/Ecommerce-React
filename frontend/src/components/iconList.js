import React from 'react'
import {Link} from 'react-router-dom'

const IconList = () => {
  return (
    <>
        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
            <Link onClick={()=>alert("Hi, I am detail page")}>
                <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
            </Link>
            <Link onClick={()=>alert("Hi, I am wishlist page")}>
                <li className="icon mx-3"><span className="far fa-heart"></span></li>
            </Link>
            <Link onClick={()=>alert("Hi, I am cart page")}>
                <li className="icon"><span className="fas fa-shopping-bag"></span></li>
            </Link>
        </ul>
        
    </>
  )
}

export default IconList;