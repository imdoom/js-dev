import React from 'react';
import {InputGroup, DropdownButton, Dropdown} from "react-bootstrap";

const states = [
    'All', 'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY'
   ];

const Filter = ({selected, setSelected, checked, toggle}) => (
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">republican</InputGroup.Text>
            <InputGroup.Checkbox 
            aria-label='republican'
            checked={checked.includes('R')}
            onChange={() => toggle('R')}
            />
            <InputGroup.Text id="inputGroup-sizing-sm">democrat</InputGroup.Text>
            <InputGroup.Checkbox 
            aria-label='democrat'
            checked={checked.includes('D')}
            onChange={() => toggle('D')}
            />
            <InputGroup.Text id="inputGroup-sizing-sm">independent</InputGroup.Text>
            <InputGroup.Checkbox 
            aria-label='independent'
            checked={checked.includes('I')}
            onChange={() => toggle('I')}
            />
        </InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-sm">Filter by State:</InputGroup.Text>
        <InputGroup.Append>
            <DropdownButton
                as={InputGroup.Append}
                variant="outline-secondary"
                title={selected}
                id="input-group-dropdown"
                onSelect={setSelected}
                >
                {/* <Dropdown.Item eventKey='ALL'>ALL</Dropdown.Item> */}
                {states.map(state => <Dropdown.Item eventKey={state}>{state}</Dropdown.Item>)}
            </DropdownButton>
        </InputGroup.Append>
    </InputGroup>
);

export default Filter;
