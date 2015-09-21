var AppDispatcher = require('../dispatcher/AppDispatcher');
var AuthConstants = require('../constants/AuthConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';


var _users = {
  1: {key: 1, email: 'anon@mail.com', password: '', verified: false},
  2: {key: 2, email: 'admin@lemonhaze.com', password: 'lemonhaze-password', verified: true}
}

var _requestUser = _users[1];

function loginUser(id) {
  _requestUser = _users[id];
}


var AuthStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getAll: function() {
    return _users;
  },
  getActive: function() {
    return _requestUser;
  },
  isAuthenticated: function() {
    return _requestUser['verified'];
  },
  findUserByEmail: function(email) {
    var users = [];
    for (key in _users) {
      if (_users[key].email === email) {
        return _users[key];
      }
    };
    return false;
  }
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case AuthConstants.LOGIN_USER:
      loginUser(action.id);
      AuthStore.emitChange();
      break;
    default:
  }
});

module.exports = AuthStore;
