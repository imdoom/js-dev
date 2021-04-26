import React from 'react';
import {InputGroup} from "react-bootstrap";

const Filter = ({checked, toggle}) => (
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">republican</InputGroup.Text>
            <InputGroup.Checkbox 
            aria-label="republican"
            checked={checked.includes("R")}
            onChange={() => toggle("R")}
            />
            <InputGroup.Text id="inputGroup-sizing-sm">democrat</InputGroup.Text>
            <InputGroup.Checkbox 
            aria-label="democrat"
            checked={checked.includes("D")}
            onChange={() => toggle("D")}
            />
            <InputGroup.Text id="inputGroup-sizing-sm">independent</InputGroup.Text>
            <InputGroup.Checkbox 
            aria-label="independent"
            checked={checked.includes("I")}
            onChange={() => toggle("I")}
            />
        </InputGroup.Prepend>
    </InputGroup>
);

export default Filter;
