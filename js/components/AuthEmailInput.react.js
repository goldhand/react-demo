var React = require('react');
var ReactPropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;

var TodoTextInput = React.createClass({

  propTypes: {
    className: ReactPropTypes.string,
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    onBlur: ReactPropTypes.func.isRequired,
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
          onBlur={this._blur}
          onChange={this._onChange}
          value={this.state.value}
          autoFocus={true}
        />
      </div>
    );
  },

  _blur: function() {
    this.props.onBlur(this.state.value);
  },

  _onChange: function(event) {
    this.setState({
      value: event.target.value
    });
  }
});

module.exports = TodoTextInput;