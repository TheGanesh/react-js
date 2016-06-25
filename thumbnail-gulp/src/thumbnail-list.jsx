var React = require('react');
var Thumbnail = require('./thumbnail.jsx');

module.exports = React.createClass({

    render: function () {

        var resultList = this.props.thumbnailData.map( function(thumbnailData){
            return <Thumbnail {... thumbnailData} />
        });

        return <div>
            {resultList}
        </div>

    }

});