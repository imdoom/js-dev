import React from 'react';
import {InputGroup} from "react-bootstrap";

const Filter = ({selected, toggle}) => (
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">republican</InputGroup.Text>
            <InputGroup.Checkbox 
            aria-label="republican"
            checked={selected.includes("R")}
            onChange={() => toggle("R")}
            />
            <InputGroup.Text id="inputGroup-sizing-sm">democrat</InputGroup.Text>
            <InputGroup.Checkbox 
            aria-label="democrat"
            checked={selected.includes("D")}
            onChange={() => toggle("D")}
            />
            <InputGroup.Text id="inputGroup-sizing-sm">independent</InputGroup.Text>
            <InputGroup.Checkbox 
            aria-label="independent"
            checked={selected.includes("I")}
            onChange={() => toggle("I")}
            />
        </InputGroup.Prepend>
    </InputGroup>
);

export default Filter;
