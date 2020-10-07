import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainNavigation from '../components/MainNavigation';
import { removeProductFromCart, addProductFromCart  } from '../store/actions';
import './Panier.css';

class CartPage extends Component {
  render() {
    return (
      <React.Fragment>
        <MainNavigation  gitHub= {this.props.github} cartItemNumber={this.props.cartItemCount} />
        <main className="cart">
        <h1 style={{color: "white"}} >VOTRE PANIER:</h1>
          {this.props.cartItems.length <= 0 && <p style={{color: "white"}} > => Votre panier est vide...</p>}
          <ul>
            {this.props.cartItems.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - {cartItem.price} € (
                  {cartItem.quantity})
                </div>
                <div>
                <button className="cardButton"
                    onClick={this.props.addProductFromCart.bind(this, cartItem.id)}
                  >
                    +
                  </button>
                  
                  <button className="cardButton"
                    onClick={this.props.removeProductFromCart.bind(
                      this,
                      cartItem.id
                    )}
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    github: state.myGithub,
    cartItems: state.cart,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
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
