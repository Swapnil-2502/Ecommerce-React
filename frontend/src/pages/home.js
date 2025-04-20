import Ads from "../components/ads";
import Carousel from "../components/carousel";

import Navbar from "../components/navbar";
import ProductSection from "../components/productSection";


const Home = () => {
    let products = [
        {
            url:"https://cdn.dribbble.com/userupload/3678787/file/original-f2f87380d8169e2875eb1a1c1c831804.png?resize=400x0",
            name: 'Shoes'
        },
        {
            url:"https://5.imimg.com/data5/EK/EK/JK/SELLER-15664414/clothes-online-e-commerce-website-designing-services-500x500.jpg",
            name: 'Clothes'
        },
        {
            url:"https://halothemes.net/cdn/shop/products/superkart-home-1-pc.jpg?v=1674055253",
            name:'Electronics'
        }
       
        
    ]

    return (
        <>
            <Navbar />
            <Carousel />
            <div className="d-flex justify-content-center flex-wrap gap-4 mt-4">
                {products.map((item, index) => <Ads key = {index} url={item.url} name={item.name}/>)}
            </div>
            <ProductSection />
        </>
       
    )
}

export default Home;