import React from 'react';
import { NavLink } from 'react-router-dom';
import LineIcon from 'react-lineicons';
import './MainNavigation.css';

const mainNavigation = props => (
  <header className="main-navigation">
    <nav>
      <ul>
      <li style={{color:"white"}}> Lien Github :</li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href={props.gitHub}> 
            <LineIcon name="github"/>
          </a>
        </li>
        <li>
          <NavLink to="/">Liste des Produits disponibles </NavLink>
        </li>
        <li>
          <NavLink to="/cart">Consultez votre panier ({props.cartItemNumber})</NavLink>
        </li>
        <li style={{color:"yellow"}}> Total : {props.prixTotal} € </li>
        
      </ul>
    </nav>
  </header>
);

export default mainNavigation;
