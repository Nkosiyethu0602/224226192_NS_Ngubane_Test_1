import React from 'react'

function ProductDetail(){
  const{id} = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() =>{
    async function FetchProduct() {
      const response = await fetch("https://fakestoreapi.com/products/${id}")
      const data = response.json();
      setProduct(data);
    }
    FetchProduct()
  },[id]);

  if(!product) return <p>Products loading...</p>

  return(
  <div>
    <img src={product.image} alt={product.title} />
    <h3>{product.title}</h3>
    <p>{product.description}</p>
    <h3>{product.price}</h3>
  </div>
);
}
export default ProductDetail