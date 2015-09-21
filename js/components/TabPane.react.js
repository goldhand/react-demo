var React = require('react');
var classNames = require('classnames');



var TabPane = React.createClass({
  render: function() {
    var tab = this.props.tab;
    var content = this.props.tab.content;

    return (
      <div
        role="tabpanel"
        className={classNames({
          'active': tab.active,
          'tab-pane': true
        })}
        >
        {content}
      </div>
    );
  }
});

module.exports = TabPane;