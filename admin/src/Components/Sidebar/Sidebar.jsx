import React from 'react'
import './Sidebar.css';
import { Link } from "react-router-dom";
import cart from '../../assets/cart.png';
import product from '../../assets/product.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={"/addproduct"} style={{textDecoration:'none'}}>
        <div className='sidebar-item'>
            <img src={cart} alt="" className='cart-icon'/>
            <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listproduct"} style={{textDecoration:'none'}}>
        <div className='sidebar-item'>
            <img src={[product]} alt="" className='product-icon'/>
            <p>Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
