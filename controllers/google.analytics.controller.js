const Product = require('../models/google.analytics.model');

'use strict';
const { google } = require('googleapis');
const service_account = require('./google-auth-json/oauth2.keys.json');

const reporting = google.analyticsreporting('v4');

let scopes = ['https://www.googleapis.com/auth/analytics.readonly'];
var url = "/dashboard/districtdashboard"
var d = new Date();
d.setDate(d.getDate() - 6);
let text = d.toISOString();
console.log(text);
var startDate = d.toISOString().substring(0, 10);
console.log("sasas", startDate);
let jwt = new google.auth.JWT(
  service_account.client_email,
  null,
  service_account.private_key,
  scopes
);

let view_id = '265834372';
exports.test = function (req, res) {
  // runSample();
  console.log(startDate);
  let basic_report = {
    "reportRequests": [
      {
        "viewId": view_id,
        "samplingLevel": "DEFAULT",
        "filtersExpression": "ga:pagePath==" + url,
        "dateRanges": [
          {
            'startDate': startDate,
            'endDate': 'today'
          }
        ],
        "metrics": [
          {
            "expression": "ga:pageviews",
            "alias": ""
          }
        ],
        "dimensions": [
          { 'name': 'ga:date' }
        ]
      }
    ]
  };
  console.log(basic_report.dateRanges);
  getReports(basic_report)
    .then(response => { return res.send(response.data ) })




};
// async function runSample() {
//   let basic_report = {
//     "reportRequests": [
//       {
//           "viewId": view_id, 
//           "samplingLevel": "DEFAULT",
//           "filtersExpression": "ga:pagePath==" +url, 
//           "dateRanges": [
//           {
//               "startDate": "2022-05-20",
//               "endDate": "today"
//           }
//           ],
//           "metrics": [
//           {
//               "expression": "ga:pageviews",
//               "alias": ""
//           }
//           ],
//           "dimensions": [
//           {'name': 'ga:date'}
//           ]
//       }
//       ]
//   };
//   getReports(basic_report)
//   .then(response => console.log(JSON.stringify(response.data) ,arrData= response.data)

//   )
//   .catch(e => console.log(e));



// }
let getReports = async function (reports) {

  await jwt.authorize();

  let request = {
    'headers': { 'Content-Type': 'application/json' }, 'auth': jwt, 'resource': reports
  };

  return await reporting.reports.batchGet(request);

};


// if invoked directly (not tests), authenticate and run the samples
if (module === require.main) {
  runSample.catch(console.error);
}

exports.product_details = function (req, res) {
  Product.find({}, function (err, product) {
    runSample();
    if (err) return next(err);
    res.send(product);
  })
};