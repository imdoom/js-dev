import { React, useState } from 'react';
import SenateMembers from './components/SenateMembers';
import HouseMembers from './components/HouseMembers';
import Navigation from './components/Navigation';
import Filter from './components/Filter';
import Home from './components/Home';
import Banner from './components/Banner';
import { Route, Switch } from 'react-router-dom';

const heading = {
  "title": "TGIF Logo"
};

const App = () =>  {
  const useSelection = () => {
    const [checked, setSelected] = useState([]);
    const toggle = (x) => {
      setSelected(checked.includes(x) ? checked.filter(y => y !== x) : [x].concat(checked))
    };
    return [ checked, toggle ];
  };
  const [checked, toggle] = useSelection();

  return (
    <div>
      <Banner title={heading.title} />
      <Navigation />
      <Filter checked={checked} toggle={toggle}/>
      <Switch>
        <Route path='/senateMembers' component={() => (<SenateMembers checked={checked}/>)}/>
        <Route path='/houseMembers' component={() => (<HouseMembers checked={checked}/>)}/>
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
