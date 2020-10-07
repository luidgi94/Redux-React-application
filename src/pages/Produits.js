import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainNavigation from '../components/MainNavigation';
import { addProductToCart } from '../store/actions';
import './Produits.css';
import Particles from "react-particles-js";

 
  const paramConfig = {
    "particles": {
      "number": {
          "value": 50
      },
      "size": {
          "value": 3
      },
      color: {
         value: "#fd0303"
      },
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
}; 

class ProductsPage extends Component {
  
  render() {
    return (
      <React.Fragment>
        
        <MainNavigation   gitHub= {this.props.github} cartItemNumber={this.props.cartItemCount} />

        <main className="products">
          <h1 style={{color: "white"}} >LISTE DES PRODUITS :</h1>
          <ul>
            {this.props.products.map(product => (
              <li key={product.id}>
                <div>
                  <strong>{product.title}</strong> - {product.price} €
                </div>
                <div>
                  <button
                    onClick={this.props.addProductToCart.bind(this, product)}
                  >
                    Ajouter au Panier
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
        <Particles className="mi-home-particle" params={paramConfig} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {    // Lecture du state du reducer
  return {
    github: state.myGithub,
    products: state.products,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  };
};
// const githubLink = state =>{
//   return {
//     Github: state.myGithub
//   };

// };

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: product => dispatch(addProductToCart(product))
  };
};

export default connect(  // connection du reducer et action avec le composant
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
