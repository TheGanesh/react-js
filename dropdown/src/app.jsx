var React = require('react');
var Dropdown = require('./dropdown.jsx');

var options = {

    title: "Select Desert",
    entries: [
        "Apple pie",
        "whatever 1",
        "whatever 2"
    ]
};

//Instantiating component
var element = React.createElement(Dropdown, options);

//Rendering instantiated component ReactDOM for new version
React.render(element, document.querySelector(".target"));