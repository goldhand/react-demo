var React = require('react');
var AuthStore = require('../stores/AuthStore');
var AuthEmailInput = require('./AuthEmailInput.react');
var AuthPasswordInput = require('./AuthPasswordInput.react');
var AuthActions = require('../actions/AuthActions');

var AuthLogin = React.createClass({
  getInitialState: function() {
    return {
      email: this.props.email || '',
      password: this.props.password || ''
    };
  },
  render: function() {
    return (
      <div className="login-page">
        <h1 className="page-title">LemonHaze</h1>
        <div className="container">
        <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="login-form form well">
            <h2>Login</h2>
            <AuthEmailInput
              id='email-input'
              className='form-control'
              placeholder='Email'
              onBlur={this._checkEmail}
            />
            <AuthPasswordInput
              id='password-input'
              className='form-control'
              placeholder='Password'
              onSave={this._login}
            />
          </div>
        </div>
        </div>
        </div>
      </div>
    );
  },
  _checkEmail: function(text) {
    // verify that email is valid

    // set email state
    this.setState({
      email: text
    });
  },
  _login: function(text) {
    if (text.trim()) {
      var user = AuthStore.findUserByEmail(this.state.email);
      if (user && user.password === text) {
        AuthActions.login(user);
      };
    };
  }
});

module.exports = AuthLogin;