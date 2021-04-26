import React from 'react';

const Banner = ({title}) => <h1 style={center}>{title}</h1>;

const center = {
    display: 'flex',  
    justifyContent:'left'
};

export default Banner;