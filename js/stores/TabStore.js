var AppDispatcher = require('../dispatcher/AppDispatcher');
var TabConstants = require('../constants/TabConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var React = require('react');
var NVD3Chart = require('react-nvd3');

var SimpleStat = require('../components/SimpleStat.react');
var ProductTable = require('../components/ProductTable.react');

var CHANGE_EVENT = 'change';


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


var _products = {
  1: {key: 1, brand: 'Jackpot SeaWeed', type: 'Pre-Pack', unitSize: 1, unitMeasure: 'g', units: 39318, gross: 1118953, revUnit: 3.03, momRevUnit: -3.31, avgCostUnit: 3.38, netProfitUnit: -0.35, netProfit: -13942},
  2: {key: 2, brand: 'Jackpot SeaWeed', type: 'Pre-Pack', unitSize: 2, unitMeasure: 'g', units: 10225, gross: 59408, revUnit: 5.81, momRevUnit: 7.85, avgCostUnit: 6.76, netProfitUnit: -0.95, netProfit: -9713},
  // ...
  5: {key: 5, brand: 'Jackpot SeaWeed', type: 'Vaporizer Cartridge', unitSize: 0.5, unitMeasure: 'g', units: 10359, gross: 98093, revUnit: 9.47, momRevUnit: 0.9, avgCostUnit: 1.24, netProfitUnit: 8.23, netProfit: 85248},
}



var piedatum = [];

for (var key in _pie) {
  piedatum.push({value: _pie[key].p, label: _pie[key].name + ' ' + _pie[key].p + '% (' + _pie[key].k + 'K)'});
};

var stats = [];

for (var key in _aggs) {
  stats.push(<SimpleStat stat={_aggs[key]} width={2} />)
}



var _revenues = {
  1: {name: 'Issaquah Cannabis Company', revenues: 18396},
  2: {name: 'Green Theory', revenues: 14110},
  3: {name: 'Herbs House', revenues: 9968},
  4: {name: 'Hashtag', revenues: 7567},
  5: {name: 'GreenLight', revenues: 6500},
  6: {name: 'The Happy Crop Shop', revenues: 5944},
}
var revenuedatum =  [{
          key: "Cumulative Return",
          values: []
        }];

for (var key in _revenues) {
  revenuedatum[0].values.push({label: _revenues[key].name, value: _revenues[key].revenues, tooltip: '$' + _revenues[key].revenues});
};

/* just a close guess based on graph */
var _fakeLineData = {
  1: {key: 1, name: 'Liberty Reach', color: '#e46d53', data: [[0, 350], [1, 370], [2, 290], [3, 410], [4, 320], [5, 360], [6, 420], [7, 372], [8, 50]]},
  2: {key: 2, name: 'Jackpot SeaWeed', color: '#4e8dd5', data: [[1, 20], [2, 20], [3, 40], [4, 80], [5, 110], [6, 120], [7, 291], [8, 45]]}
}

var lineDatum = [];

for (var key in _fakeLineData) {
  var _values = [];
  for (var i = 0; i < _fakeLineData[key].data.length; i++) {
    _values.push(
      {
        x: _fakeLineData[key].data[i][0],
        y: _fakeLineData[key].data[i][1]
      }
    );
  };
  lineDatum.push(
    {
      values: _values,
      key: _fakeLineData[key].name,
      color: _fakeLineData[key].color,
      isArea: false,
      area: false
    }
  );
};

var _tabs = {
  1: {'key': 1, 'active': true, 'name': 'Top Level', 
    'content': 
      (
       <div>
        <div className="col-md-6">
          <NVD3Chart type='pieChart' datum={piedatum} x='label' y='value' 
            donut='true' donutRatio='.6'
            showLabels='true' labelThreshold='.05' />
        </div>
        <div className="col-md-6">
          <div className="row">
            {stats}
          </div>
          <div className="lineChart">
            <NVD3Chart type="lineChart" datum={lineDatum} id="lineChart"
              margin-left={50} useInteractiveGuideline={true} isArea={false} pointSize={1} fixedTop={50}
              showLegend={true} showYAxis={true} showXAxis={false} showTooltip={false}
              />
          </div>
        </div>
      </div>
      )
    },
  2: {'key': 2, 'active': false, 'name': 'Product', 
    'content': 
      (
       <div>
        <ProductTable products={_products} />
      </div>
      )
    },
  3: {'key': 3, 'active': false, 'name': 'Salesperson', 
    'content': 
      (
       <div>
        <h2>Salesperson</h2>
      </div>
      )
    },
  4: {'key': 4, 'active': false, 'name': 'Retailers', 
    'content': 
      (
       <div>
        <div className="revenues">
          <NVD3Chart id="revenueBarChart" type="discreteBarChart" datum={revenuedatum} x="label" y="value"
            rotateLabels={50}
            />
        </div>
        <div className="revenues-breakdown">
        </div>
      </div>
      )
    },
  5: {'key': 5, 'active': false, 'name': 'Heat Map Analysis', 
    'content': 
      (
       <div>
        <h2>Heat Map Analysis</h2>
      </div>
      )
    }
};

// set initial active tab
var _activeTab = _tabs[1];


function update(id, updates) {
  _tabs[id] = assign({}, _tabs[id], updates);
}

function deactivate(id) {
  update(id, {active: false});
}

function activate(id) {
  for (var _key in _tabs) {
    deactivate(_key);
  }
  update(id, {active: true});
  _activeTab = _tabs[id];  // set the active tab
}

var TabStore = assign({}, EventEmitter.prototype, {
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
    return _tabs;
  },
  getActive: function() {
    return _activeTab;
  }
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case TabConstants.TAB_ACTIVATE:
      activate(action.id);
      TabStore.emitChange();
      break;
    default:
  }
});


module.exports = TabStore;