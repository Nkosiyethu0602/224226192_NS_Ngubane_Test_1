import React,{useState, useEffect} from 'react';
import ProductCard from './components/ProductCard'

function ProductList() {
    const[products, setProducts] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() =>{
        async function fetchProducts(){
            try{
                const response = await fetch("https://fakestoreapi.com/products/{id}")
                const data = await response.json();
                setProducts(data);
            }catch(err){
                console.log("Error fetching products:",err)

            }finally{
                setLoading(false)
            }
            
        }
        fetchProducts();
    },[])
    if(loading) return <p>Products  loading...</p>
  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"20px"}}>
        {products.map((product)=>(<ProductCard key={product.id} product={product}/>))}
        
    </div>
  )
}

export default ProductList