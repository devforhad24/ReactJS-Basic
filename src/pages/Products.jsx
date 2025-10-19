import { useEffect, useState } from "react";

const Products = () => {

const [products, setProducts] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const fetchData = () => {
   setIsLoading(true);
    setError(null);

    fetch('https://dummyjson.com/products')
    .then((res) => {
      if(!res.ok){
        throw new Error('Data could not be fetched');
      }
      return res.json();
    })
    .then((data) => {
      setProducts(data.products);
      setIsLoading(false);
    })
    .catch((error) => setError(error.message))
    .finally(() => setIsLoading(false));
}

  useEffect(() => {
   fetchData();
  },[]);

  return (
    <div>
      <h2>All Products</h2>
      {
        isLoading && <p>Products are loading...</p>
      }
      <section className="products">
        {
          products && products.length > 0 && products.map((product) => {
            const {id,title,description,price,category} = product;
            return (
              <article key={id} className="product">
              <h3>{title}</h3>
              <p>Category: {category}</p>
              <p>Price: {price}</p>
              <p>Description: {description && description.substring(1,100)}...</p>
              <button>Show Details</button>
            </article>
            );
          })
        }
      </section>
    </div>
  )
}

export default Products