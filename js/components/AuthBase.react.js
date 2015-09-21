var React = require('react');
var AuthStore = require('../stores/AuthStore');
var AuthLogin = require('./AuthLogin.react');
var Dashboard = require('./Dashboard.react');


function getAuthState() {
  return {
    activeUser: AuthStore.getActive(),
    isAuthenticated: AuthStore.isAuthenticated()
  }
}

var AuthBase = React.createClass({
  getInitialState: function() {
    return getAuthState();
  },
  componentDidMount: function() {
    AuthStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    AuthStore.removeChangeListener(this._onChange);
  },
  render: function() {
    var mainView = this.state.isAuthenticated ?
        <Dashboard /> : <AuthLogin />;
    return (
      <div className="authbase">
        {mainView}
      </div>
    );
  },
  _onChange: function() {
    this.setState(getAuthState());
  }
});

module.exports = AuthBase;