var React = require('react');
var classNames = require('classnames');


var SimpleStat = React.createClass({
  render: function() {
    var stat = this.props.stat;
    var width = this.props.width;

    return (
      <div className={'col-md-' + width}>   
        <div className="simple-stat">
          <span className="stat-value">
            {stat.prefix + stat.value + stat.suffix}
          </span>
          <span className="stat-label">
            {stat.name}
          </span>
        </div>
      </div>
    );
  }
});

module.exports = SimpleStat;