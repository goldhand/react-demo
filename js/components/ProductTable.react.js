var React = require('react');
var ProductRow = require('./ProductRow.react');
var React = require('react');


var _productColumnLabels = {
  1: {key: 1, name: 'Brand'},
  2: {key: 2, name: 'Type'},
  3: {key: 3, name: 'Unit Size'},
  4: {key: 4, name: 'Units'},
  5: {key: 5, name: 'Gross Revenues'},
  6: {key: 6, name: 'Rev/Unit'},
  7: {key: 7, name: 'MoM Rev/Unit'},
  8: {key: 8, name: 'Avg. Cost per Unit'},
  9: {key: 9, name: 'Net Profit per Unit'},
  10: {key: 10, name: 'Net Profit'}
}

var ProductTableHead = React.createClass({
  render: function() {
    var productLabels = [];
    for (key in _productColumnLabels) {
      productLabels.push(<th>{_productColumnLabels[key].name}</th>);
    };
    return (
      <thead><tr>{productLabels}</tr></thead>
    );
  }
});

var ProductTable = React.createClass({
  render: function() {
    var products = this.props.products;
    var productRows = [];
    for (key in products) {
      productRows.push(<ProductRow product={products[key]} />);
    };
    return (
      <table className="table table-striped product-table">
        <ProductTableHead />
        <tbody>
          {productRows}
        </tbody>
      </table>
    );
  }
});

module.exports = ProductTable;