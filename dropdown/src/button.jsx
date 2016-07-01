var React = require('react');

//Creating react component class
module.exports = React.createClass({
    render : function(){
        return  <button onClick={this.props.whenCLicked} className={"btn "+this.props.className} type="button">
            {this.props.title}
            <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
        </button>
    }
});
