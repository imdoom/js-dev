import React from 'react';
import SenateMembers from './components/SenateMembers';
import HouseMembers from './components/HouseMembers';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Banner from './components/Banner';
import { Route, Switch } from 'react-router-dom';

const heading = {
  "title": "Senate members data for 117th congress"
};



const App = () =>  (
  <div>
    <Banner title={heading.title} />
    <Navigation />
    <Switch>
      <Route path='/senateMembers' component={SenateMembers}/> 
      <Route path='/houseMembers' component={HouseMembers}/>
      <Route path='/' component={Home}/>
    </Switch>
  </div>
);

export default App;
