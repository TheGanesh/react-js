var ThumbnailList = React.createClass({

    render: function () {

        var resultList = this.props.thumbnailData.map( function(thumbnailData){
            return <Thumbnail {... thumbnailData} />
        });

        return <div>
            {resultList}
        </div>

    }

});