import { React, useState } from 'react';
import SenateMembers from './components/SenateMembers';
import HouseMembers from './components/HouseMembers';
import Navigation from './components/Navigation';
import Filter from './components/Filter';
import Home from './components/Home';
import Banner from './components/Banner';
import { Route, Switch } from 'react-router-dom';
import Attendance from './components/Attendance';
import PartyLoyalty from './components/PartyLoyalty';
import Statistics from './components/Statistics';

const heading = {
  "title": "TGIF Logo"
};

const App = () =>  {
  const useSelection = () => {
    const [checked, setSelected] = useState(['R']);
    const toggle = (x) => {
      setSelected(checked.includes(x) ? checked.filter(y => y !== x) : [x].concat(checked))
    };
    return [ checked, toggle ];
  };
  const [checked, toggle] = useSelection();
  const [selected, setSelected] = useState('ALL');
  const [chamber, setChamber] = useState("null");
  return (
    <div>
      <Statistics/>
      <Banner title={heading.title} />
      <Navigation setChamber = {setChamber}/>
      <Filter selected={selected} setSelected={setSelected} checked={checked} toggle={toggle}/>
      <Switch>
        <Route path='/senateMembers' component={() => (<SenateMembers selected={selected} checked={checked}/>)}/>
        <Route path='/houseMembers' component={() => (<HouseMembers selected={selected} checked={checked}/>)}/>
        <Route path='/attendance' component={() => (<Attendance chamber={chamber}/>)}/>
        <Route path='/partyLoyalty' component={() => (<PartyLoyalty chamber={chamber}/>)}/>
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
