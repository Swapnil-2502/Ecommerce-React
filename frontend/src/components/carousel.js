import React from 'react'

const Carousel = () => {
  return (
    <div>

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg" className="d-block mx-auto" style={{ height: '600px', objectFit: 'cover' }} alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://img.freepik.com/free-vector/flat-horizontal-banner-template-black-friday-sale_23-2150852978.jpg?semt=ais_hybrid&w=740" className="d-block mx-auto" style={{ height: '600px',objectFit: 'cover'}} alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://c8.alamy.com/comp/2H4RC9Y/ecommerce-web-banner-with-3d-smartphone-illustration-with-shopping-bags-wallet-and-credit-card-icons-pump-out-of-screen-2H4RC9Y.jpg" className="d-block mx-auto" style={{ height: '600px', objectFit: 'cover' }} alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}

export default Carousel