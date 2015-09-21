/** @jsx React.DOM */

var React = require('react');
var Tab = require('./Tab.react');
var TabPane = require('./TabPane.react');


var Tabs = React.createClass({

  render: function() {
    var allTabs = this.props.allTabs;
    var tabs = [];
    var tabPanes = [];

    for (var key in allTabs) {
      tabs.push(<Tab tab={allTabs[key]} />);
      tabPanes.push(<TabPane tab={allTabs[key]} />);
    }
    return (
      <div>
        <ul className="nav nav-pills nav-justified">
          {tabs}
        </ul>
        <div className="tab-content">
          {tabPanes}
        </div>
      </div>
    );
  }
});

module.exports = Tabs;