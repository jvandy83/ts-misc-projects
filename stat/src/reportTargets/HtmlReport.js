"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var HtmlReport = /** @class */ (function () {
    function HtmlReport() {
    }
    HtmlReport.prototype.print = function (report) {
        var html = "\n      <!DOCTYPE html>\n      <html lang=\"en\">\n        <head>\n          <meta charset=\"UTF-8\" />\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n          <title>Html Report</title>\n        </head>\n        <body>\n          <div>\n            <h1>Analysis Output</h1>\n            <p>Team Man United won 18 games.</p>\n          </div>\n        </body>\n      </html>\n    ";
        fs_1["default"].writeFile('report.html', html, function (err) {
            if (err) {
                console.error("Error: " + err.message + " \nmessage: " + err.message);
            }
            else {
                console.log("report.html file created successfully!!!");
            }
        });
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
