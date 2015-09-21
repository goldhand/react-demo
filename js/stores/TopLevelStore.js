var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');



var _pie = {
  1: {key: 1, name: 'Vaporizer Cartridge', k: 364, p: 67.70},
  2: {key: 2, name: 'CO2 Wax', k: 32, p: 2.31},
  3: {key: 3, name: 'JuJu Joint', k: 310, p: 10.82},
  4: {key: 4, name: 'Pre-Pack', k: 325, p: 28.18},
  5: {key: 5, name: 'Tanker', k: 31, p: 0.93}
}

var _aggs = {
  1: {key: 1, name: 'Gross Revenue', value: 663, prefix: '$', suffix: 'K'},
  2: {key: 2, name: 'Total Cost', value: 458, prefix: '$', suffix: 'K'},
  3: {key: 3, name: 'Net Profit', value: 205, prefix: '$', suffix: 'K'},
  4: {key: 4, name: 'Units', value: 103968, prefix: '', suffix: ''},
  5: {key: 5, name: 'Store Coverage', value: 40.76, prefix: '', suffix: '%'}
}

module.exports = _aggs;