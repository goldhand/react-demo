var AppDispatcher = require('../dispatcher/AppDispatcher');
var AuthConstants = require('../constants/AuthConstants');


var AuthActions = {
  login: function(user) {
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGIN_USER,
      id: user.key,
    });
  }
};

module.exports = AuthActions;