var React = require('react');
var classNames = require('classnames');


var ProductRow = React.createClass({
  render: function() {
    var product = this.props.product;

    return (
      <tr>
        <td>{product.brand}</td>
        <td>{product.type}</td>
        <td>{product.unitSize + product.unitMeasure}</td>
        <td>{product.units}</td>
        <td>{'$' + product.gross}</td>
        <td>{'$' + product.revUnit}</td>
        <td className={classNames({'loss': (product.momRevUnit < 0),'profit': (product.momRevUnit > 0)})}>{product.momRevUnit + '%'}</td>
        <td>{'$' + product.avgCostUnit}</td>
        <td className={classNames({'loss': (product.netProfitUnit < 0),'profit': (product.netProfitUnit > 0)})}>{'$' + product.netProfitUnit}</td>
        <td className={classNames({'loss': (product.netProfit < 0),'profit': (product.netProfit > 0)})}>{'$' + product.netProfit}</td>
      </tr>
    );
  }
});

module.exports = ProductRow;