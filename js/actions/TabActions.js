var AppDispatcher = require('../dispatcher/AppDispatcher');
var TabConstants = require('../constants/TabConstants');


var TabActions = {
  activate: function(tab) {
    AppDispatcher.dispatch({
      actionType: TabConstants.TAB_ACTIVATE,
      id: tab.key
    });
  }
};

module.exports = TabActions;