var React = require('react');
var CustomerList = require('CustomerList');

var GridApp = React.createClass({
  getInitialState: function () {
    return {
      searchName: '',
      customers: [
        {
          CustomerID: 1,
          ContactName: 'Maria Anders',
          ContactTitle: 'Sales Representative',
          CompanyName: 'Alfreds Futterkiste',
          Country: 'Germany'
        },
        {
          CustomerID: 2,
          ContactName: 'Ana Trujillo',
          ContactTitle: 'Owner',
          CompanyName: 'Ana Trujillo Emparedados y helados',
          Country: 'Mexico'
        },
        {
          CustomerID: 3,
          ContactName: 'Antonio Moreno',
          ContactTitle: 'Owner',
          CompanyName: 'Antonio Moreno Taquería',
          Country: 'Brazil'
        },
        {
          CustomerID: 4,
          ContactName: 'Thomas Hardy',
          ContactTitle: 'Sales Representative',
          CompanyName: 'Around the Horn',
          Country: 'UK'
        }
      ]
    };
  },
  render: function () {
    var {customers} = this.state;
    return (
      <div>
        <CustomerList customers={customers} />
      </div>
    )
  }
});

module.exports = GridApp;
