import React, { useState, useEffect } from 'react';

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
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


       {data.products.map((product) => (
        <div key={product.id}>
          <img src={product.img} alt="its an img" width="30vh" height="40vh" />
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
          <h4>{product.category}</h4>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;