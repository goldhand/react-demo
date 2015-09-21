var React = require('react');
var TabStore = require('../stores/TabStore');
var Tabs = require('./Tabs.react');


function getDashboardState() {
  return {
    activeTab: TabStore.getActive(),
    allTabs: TabStore.getAll()
  }
}

var Dashboard = React.createClass({
  getInitialState: function() {
    return getDashboardState();
  },
  componentDidMount: function() {
    TabStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    TabStore.removeChangeListener(this._onChange);
  },
  render: function() {
    return (
      <div className="dashboard">
        <h1 className="page-title">{this.state.activeTab.name}</h1>
        <Tabs allTabs={this.state.allTabs} />
      </div>
    );
  },
  _onChange: function() {
    this.setState(getDashboardState());
  }
});

module.exports = Dashboard;