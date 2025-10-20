import { Link, useLocation } from "react-router-dom";

const ProductDetails = () => {
    const {state} = useLocation();
    // console.log(state);
  return (
    <div className="product-details">
      <h2>Product Details</h2>
      {state ? <article className="product-details-article">
        <img src={state.images[0]} alt={state.title} className="product-details-img" />
        <h3 className="product-details-title">{state.title}</h3>
              <p><strong>Category: </strong> {state.category}</p>
              <p><strong>Price:</strong> {state.price}</p>
              <p><strong>Rating:</strong> {state.rating}</p>
              <p><strong>Brand:</strong> {state.brand}</p>
              <p><strong>Description:</strong> {state.description && state.description.substring(1,100)}...</p>
              <Link to={`/products`} className="product-link">Continue Shopping</Link>
      </article> : <p>Product details not available</p>
      }
    </div>
  )
}

export default ProductDetails
