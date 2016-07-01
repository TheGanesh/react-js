var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item.jsx');

module.exports = React.createClass({

    render: function () {

        var handleClick = function () {
            alert("button clicked");
        };

        var list = this.props.entries.map(function (item) {
            return <ListItem item={item}/>
        });
        return <div class="dropdown">
            <Button whenCLicked={handleClick} className="btn-default" title={this.props.title}
                    subTitleClassName="caret"/>

            <ul>
                {list}
            </ul>
        </div>
    }
});
