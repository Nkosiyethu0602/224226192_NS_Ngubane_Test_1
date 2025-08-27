import React from 'react'
import {Link} from 'react-router-dom'

function ProductCard({product}){
  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
      </Link>
      <p>${product.price}</p>
    </div>
  );
}
export default ProductCard
