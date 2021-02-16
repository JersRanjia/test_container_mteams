import React, {useState, userEffect} from 'react';
import Navbar from './Navbar/Navbar';
import Conversation from './Conversations/Conversation';
import Activity from './Activities/Activity';
import Appel from './Appels/Appel';
import Reunion from './Reunions/Reunion';
import Equipe from './Equipes/Equipe';
import Fichier from './Fichiers/Fichier';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

function Main(){
  return(
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path='/Conversation' component = {Conversation}/>
        <Route path='/Activity' component = {Activity}/>
        <Route path='/Appel' component = {Appel}/>
        <Route path='/Reunion' component = {Reunion}/>
        <Route path='/Equipe' component = {Equipe}/>
        <Route path='/Fichier' component = {Fichier}/>
        <Redirect to='/Conversation'/>
        <Redirect to='/Activity'/>
        <Redirect to='/Appel'/>
        <Redirect to='/Reunion'/>
        <Redirect to='/Equipe'/>
        <Redirect to='/Fichier'/>
      </Switch>
    </React.Fragment>
  );
}

export default withRouter(Main);
