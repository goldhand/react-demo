var React = require('react');
var classNames = require('classnames');
var TabActions = require('../actions/TabActions');

var Tab = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    this._activate();
  },
  render: function() {
    var tab = this.props.tab;
    return (
      <li
        key={'tab-' + tab.key}
        className={classNames({
          'active': tab.active
          })}
        >
        <a
          onClick={this.handleClick}
          href="#"
            >
          {tab.name}
          </a>
        </li>
    );
  },
  _activate: function() {
    TabActions.activate(this.props.tab);
  }
});

module.exports = Tab;