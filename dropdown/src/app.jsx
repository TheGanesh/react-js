var React = require('react');
var ThumbnailList = require('./thumbnail-list.jsx');

var options = {
    thumbnailData: [
        {
            label: "React JS",
            description: "This is React JS logo",
            imageUrl: "https://assets.toptal.io/uploads/blog/category/logo/291/react.png",
            title: "Inbox",
            number: "5"
        },
        {
            label: "Angular 2",
            description: "This is Angular JS logo",
            imageUrl: "https://angular.io/resources/images/logos/standard/shield-large.png",
            title: "Inbox",
            number: "5"
        }
    ]
};

//Instantiating component
var element = React.createElement(ThumbnailList, options);

//Rendering instantiated component ReactDOM for new version
React.render(element, document.querySelector(".target"));