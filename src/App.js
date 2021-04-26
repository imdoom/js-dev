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
    const [selected, setSelected] = useState([]);
    const toggle = (x) => {
      setSelected(selected.includes(x) ? selected.filter(y => y !== x) : [x].concat(selected))
    };
    return [ selected, toggle ];
  };
  const [selected, toggle] = useSelection();

  return (
    <div>
      <Banner title={heading.title} />
      <Navigation />
      <Filter selected={selected} toggle={toggle}/>
      <Switch>
        <Route path='/senateMembers' component={() => (<SenateMembers selected={selected}/>)}/>
        <Route path='/houseMembers' component={() => (<HouseMembers selected={selected}/>)}/>
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
