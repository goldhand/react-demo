var React = require('react');
var ReactPropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;

var TodoTextInput = React.createClass({

  propTypes: {
    className: ReactPropTypes.string,
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired,
    value: ReactPropTypes.string
  },

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },

  render: function() {
    return (
      <div className="form-group">
        <input
          className={this.props.className}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onBlur={this._save}
          onChange={this._onChange}
          onKeyDown={this._onKeyDown}
          value={this.state.value}
          type='password'
        />
        <span className="help-text">
          Press 'Enter' to submit
        </span>
      </div>
    );
  },

  _save: function() {
    this.props.onSave(this.state.value);
  },

  _onChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }
});

module.exports = TodoTextInput;