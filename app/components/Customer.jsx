import React, { Component } from 'react';

var Customer = React.createClass({
  render: function () {
    var {CustomerID, ContactName, ContactTitle, CompanyName, Country} = this.props;

    return (
      <div>
          {ContactName}
      </div>
    )
  }
});

module.exports = Customer;
