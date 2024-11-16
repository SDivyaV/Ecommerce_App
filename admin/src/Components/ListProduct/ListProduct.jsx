import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross from '../../assets/cross.png';

const ListProduct = () => {

  const [allproducts,setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:3000/allproduct')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async(id) => {
    await fetch('http://localhost:3000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
       'Content-type':'application/json',
      },
      body: JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='list-product'>
      <h1>ALL PRODUCTS LIST</h1>
      <div className='listproduct-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className='listproduct-allproducts'>
        <hr />
        {allproducts.map((product,index)=>{
            return <>
              <div key={index} className='listproduct-format-main listproduct-format'>
                <img src={product.image} alt='' className='listproduct-product-icon' />
                <p>{product.name}</p>
                <p>Rs {product.new_price}</p>
                <p>{product.category}</p>
                <img onClick={()=>{remove_product(product.id)}} src={cross} alt='' className='listproduct-remove-icon' />
              </div>
              <hr />
              </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
