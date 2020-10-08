import React from 'react';
import { connect } from 'react-redux';

import MainNavigation from '../components/MainNavigation';
import { removeProductFromCart, addProductFromCart  } from '../store/actions';
import './Panier.css';

const CartPage =(props)=> {
 
  // let Total = ()=>{
  //   // console.log( props.cartItems);
  //   let total = 0;
  //   if (props.cartItems){
  //     props.cartItems.foreach(produit => total += produit.price * produit.quantity);
  //   }

  //    props.cartItems.map(produit => total += produit.price * produit.quantity);
  //    return total;
  // }
    return (
      <React.Fragment>
        <MainNavigation  prixTotal = {props.prixTotal}  gitHub= {props.github} cartItemNumber={props.cartItemCount} />
        <main className="cart">
        <h1 style={{color: "white"}} >VOTRE PANIER:</h1>
          {props.cartItems.length <= 0 && <p style={{color: "white"}} > => Votre panier est vide...</p>}
          <ul>
            {props.cartItems.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - {cartItem.price} € (
                  {cartItem.quantity})
                </div>
                <div>
                <button className="cardButton"
                    onClick={()=>props.addProductFromCart( cartItem.id)}
                  >
                    +
                  </button>
                  
                  <button className="cardButton"
                    onClick={ ()=> props.removeProductFromCart(
                      cartItem.id
                    )}
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <h2 style={{color: "yellow"}}> Total : {props.prixTotal} </h2>
          </div>
        </main>
      </React.Fragment>
    );
  
}

const mapStateToProps = state => {
  return {
    prixTotal: state.Total,
    github: state.myGithub,
    cartItems: state.cart,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0),
   
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProductFromCart: id => dispatch(addProductFromCart(id)),
    removeProductFromCart: id => dispatch(removeProductFromCart(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
