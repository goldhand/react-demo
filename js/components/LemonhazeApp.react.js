var React = require('react');
var AuthBase = require('./AuthBase.react');

var LemonhazeApp = React.createClass({
  render: function() {
    return (
      <div>
        <AuthBase />
      </div>
    );
  }
});

module.exports = LemonhazeApp;