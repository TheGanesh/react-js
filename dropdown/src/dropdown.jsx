var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item.jsx');

module.exports = React.createClass({

    handleItemClick: function (item) {
        console.log(item + "   clicked");
        this.setState({
            open: false,
            itemTitle: item
        });
    },
    handleClick: function () {
        this.setState({
            open: !this.state.open
        });
    },
    getInitialState: function () {
        return {open: false}
    },

    render: function () {

        var list = this.props.entries.map(function (item) {
            return <ListItem whenItemClicked={this.handleItemClick}
                             item={item}
                             className={this.state.itemTitle === item ? "active": ""}/>
        }.bind(this));

        return <div class="dropdown">
            <Button whenCLicked={this.handleClick}
                    className="btn-default"
                    title={this.state.itemTitle || this.props.title}
                    subTitleClassName="caret"/>

            <ul className={"dropdown-menu "+ (this.state.open ? "show":"")}>
                {list}
            </ul>
        </div>
    }
});
