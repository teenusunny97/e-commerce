import React, { useEffect ,useState} from "react";
import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import { getProductId } from "../../ApiService/Api";
function ProductDetails() {
    const {id}=useParams()
    const [productDetails,setProductDetails]=useState(null)
   useEffect(()=>{
    const fetchDetails=async() => {
        const data=await getProductId(id)
        setProductDetails(data)
    }
    fetchDetails()
   },[id])
    return (
     <div className="product-details-container">
             <img src={productDetails?.image} alt="alt" className="product-image"/>
                   
        <div className="product-info">
            <h2 className="product-title">
            {productDetails?.title}
            </h2>
            <p className="product-description">
            {productDetails?.description}
            </p>
            <p className="product-price">
            ${productDetails?.price}
            </p>
            <button className="buy-now-button">Buy Now</button>
            <Link to="/">
            <button className="go-back-button">Go Back Home</button>
            </Link>

        </div>
       
     </div>
    );
  }
  
  export default ProductDetails;