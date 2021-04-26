import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import senate from '../pro-congress-117-senate.json';

const getFullName = member => (
    member.middle_name ? member.first_name +' '+ member.middle_name +' '+ member.last_name : member.first_name +' '+ member.last_name
  );
    
  const Member = ({ member }) => (
    <tr>
      <td><a href={member.url}>{ getFullName(member) }</a></td>
      <td>{ member.party }</td>
      <td>{ member.state }</td>
      <td>{ member.seniority }</td>
      <td>{ member.votes_with_party_pct+'%' }</td>
    </tr>
  );
  
  const SenateMembers = ({selected, checked}) => {
    var list = senate.results[0].members.filter(member => checked.includes(member.party));
    list = (selected == 'ALL' ? list : list.filter(member => checked.includes(member.party) && selected == member.state));
    return (
    <Table striped bordered hover>
      <tr>
        <th>Name</th>
        <th>Party</th>
        <th>State</th>
        <th>Years in Office</th>
        <th>Percentage of votes with party</th>
      </tr>
      <tbody>
      { list.map(member => <Member key={member.id} member={ member } />) }
      </tbody>
    </Table>
    );
  };

  export default SenateMembers;