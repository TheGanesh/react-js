var options ={

    thumbnailData:     [
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


    ]};
//Instantiating component
var element = React.createElement(ThumbnailList,options);

//Rendering instantiated component
ReactDOM.render(element,document.querySelector(".target"));
//Creating react component class
var Badge = React.createClass({displayName: "Badge",
    render : function(){
        return  React.createElement("button", {className: "btn btn-primary", type: "button"}, 
            this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
        )
    }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",

    render: function () {

        var resultList = this.props.thumbnailData.map( function(thumbnailData){
            return React.createElement(Thumbnail, React.__spread({},   thumbnailData))
        });

        return React.createElement("div", null, 
            resultList
        )

    }

});
var Thumbnail = React.createClass({displayName: "Thumbnail",
    render : function(){
        return   React.createElement("div", {className: "thumbnail"}, 
            React.createElement("img", {src: this.props.imageUrl}), 
            React.createElement("div", {className: "caption"}, 
                React.createElement("h3", null, this.props.label), 
                React.createElement("p", null, this.props.description), 
                React.createElement("p", null, 
                    React.createElement(Badge, {title: this.props.title, number: this.props.number})
                )
            )
        )
    }
});
