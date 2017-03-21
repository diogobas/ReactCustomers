var React = require('react');

var CustomerAPI = require('CustomerAPI');

var CustomerList = React.createClass({
  componentDidMount () {
    $("#KendoDiv").kendoGrid({
      dataSource: {
        data: this.props.customers,
          schema: {
            model: {
              fields: {
                ContactName: { type: "string" },
                ContactTitle: { type: "string" },
                CompanyName: { type: "string" },
                Country: { type: "string" }
              }
            }
          },
          pageSize: 15
      },
      height: 550,
        groupable: true,
        sortable: true,
        reorderable: true,
        resizable: true,
        columnMenu: true,
        filterable: {
            mode: "row"
        },
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5
        },
      columns: [{
            field: "ContactName",
            title: "Contact Name",
            width: 250,
            locked: true
        }, {
            field: "ContactTitle",
            title: "Contact Title",
            width: 350
        }, {
            field: "CompanyName",
            title: "Company Name",
            width: 350
        }, {
            field: "Country",
            width: 450
        }]
    });

    var grid = $("#KendoDiv").data("kendoGrid");

      $("#save").click(function (e) {
          e.preventDefault();
          CustomerAPI.saveKendoGridOptions(grid.getOptions());
      });

      $("#load").click(function (e) {
          e.preventDefault();
          grid.setOptions(CustomerAPI.loadKendoGridOptions());
      });

  },
  render: function () {
    return (
      <div>
        <div>
          <div className="box wide">
            <a href="#" className="k-button" id="save">Save State</a>
            <a href="#" className="k-button" id="load">Load State</a>
          </div>
          <div id="KendoDiv"></div>
        </div>
      </div>
    )
  }
});

module.exports = CustomerList;
