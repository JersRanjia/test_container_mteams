import React, {useState, userEffect} from 'react';
import "./Navbar.css";
import {Link} from 'react-router-dom'

export default function Navbar(){
  return(
    <React.Fragment>
      <nav className="menu">
        <input type="text" id="search" name="search" placeholder="Rechercher"/>
      </nav>
      <aside>
        <div className="menu" id="vertical">
          <div className="menuItem" id="activite">
            <Link className="menuLink" to='/Activity'>
              <span>Activité</span>
            </Link>
          </div>
          <div className="menuItem" id="conversations">
            <Link className="menuLink" to='/Conversation'>
              <span>Conversations</span>
            </Link>
          </div>
          <div className="menuItem" id="equipes">
            <Link className="menuLink" to='/Equipe'>
              <span>Equipes</span>
            </Link>
          </div>
          <div className="menuItem" id="reunions">
            <Link className="menuLink" to='/Reunion'>
              <span>Reunions</span>
            </Link>
          </div>
          <div className="menuItem" id="appels">
            <Link className="menuLink" to='/Appel'>
              <span>Appels</span>
            </Link>
          </div>
          <div className="menuItem" id="fichiers">
            <Link className="menuLink" to='/Fichier'>
              <span>Fichiers</span>
            </Link>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
}
