var jsdom = require("jsdom");
require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }

    var $ = require("jquery")(window);

    var sURL = "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers?$format=json";

    function testJSONfetch() {
        $.ajax({
            type: "GET",
            contentType: "application/json;odata=verbose charset=utf-8",
            datatype: "json",
            url: sURL,
            error: bad,
            success: good,
            beforeSend: function (XMLHttpRequest) {
                //Specifying this header ensures that the results will be returned as JSON.
                XMLHttpRequest.setRequestHeader("Accept", "application/json;odata=verbose");
            }
        });
    }

    function good(response)
    {
      console.log('good response');
    }

    function bad(response)
    {
      console.log('bad response');
    }

    testJSONfetch();
});
