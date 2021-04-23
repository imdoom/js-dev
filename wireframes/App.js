import React from 'react';
import senate from './pro-congress-117-senate.json';

const heading = {
  "title": "Senate members data for 117th congress"
};

const Banner = ({ title }) => <h1>{title}</h1>;

const getFullName = member => (
  member.middle_name ? member.first_name +' '+ member.middle_name +' '+ member.last_name : member.first_name +' '+ member.last_name
);
  
const Member = ({ member }) => (
  <tr>
    <td>{ getFullName(member) }</td>
    <td>{ member.party }</td>
    <td>{ member.state }</td>
    <td>{ member.seniority }</td>
    <td>{ member.votes_with_party_pct+'%' }</td>
  </tr>
);

const MemberList = ({ members }) => (
  <table>
    <tr>
      <th>Name</th>
      <th>Party</th>
      <th>State</th>
      <th>Seniority</th>
      <th>Percentage of votes with party</th>
    </tr>
    { members.map(member => <Member key={member.id} member={ member } />) }
  </table>
);

const App = () =>  (
  <div>
    <Banner title={heading.title}/>
    <MemberList members={ senate.results[0].members }/>
  </div>
);

export default App;