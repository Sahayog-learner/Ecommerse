import React from "react";
import { connect } from "react-redux";

import './cart-dropdown.css';

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

 const CartDropDown =({cartItems}) => (

    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(cartItem => <CartItem key ={cartItem.id} item= {cartItem}/>)}    
        </div>
        <CustomButton> GO CHECKOUT</CustomButton>

    </div>
 );

 const mapStateToProps = ({cart :{cartItems}}) => ({
    cartItems
 });
 export default connect(mapStateToProps) (CartDropDown);
