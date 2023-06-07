import React, { useState, useEffect } from 'react';
import products from './ProductData'
function Products() {
  const [data, setData] = useState(products);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/1');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>


       {products.map((product) => (
        <div key={product.id}>
          <img src={product.img} alt="its an img" width="200vh" height="190vh" />
          <h2>{product.name}</h2>
          <h3>{product.price}$</h3>
          <h4>{product.category}</h4>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;

