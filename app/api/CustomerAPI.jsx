var $ = require('jquery');

module.exports = {

  saveKendoGridOptions: function (options) {
    localStorage.setItem('kendo-grid-options', kendo.stringify(options));
    return options;
  },

  loadKendoGridOptions: function () {
    return JSON.parse(localStorage.getItem('kendo-grid-options'));
  }
};
