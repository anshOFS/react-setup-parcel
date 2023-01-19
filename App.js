import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
    "h1",
    {
        id: "title",
        key: "h1"
    },
    "Sakthivel"
);
const heading2 = React.createElement(
    "h2", 
    {
        id: "title2",
        key: "h2"
    }, 
    "Testing from remote."
);

const container = React.createElement(
    'div', 
    {
        id: 'container',
        key: "contain"
    }, 
    [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
