var chart = AmCharts.makeChart( "chartdiv", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "Campaign": "Campaign1",
    "ECC": 501.9
  }, {
    "Campaign": "Campaign2",
    "ECC": 301.9
  }, {
    "Campaign": "Campaign3",
    "ECC": 201.1
  } ],
  "valueField": "ECC",
  "titleField": "Campaign",
   "balloon":{
   "fixedPosition":true
  },
  "export": {
    "enabled": true
  }
} );

var chart1 = AmCharts.makeChart( "chartdiv1", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "title": "New",
    "value": 4852
  }, {
    "title": "Returning",
    "value": 9899
  } ],
  "titleField": "title",
  "valueField": "value",
  "labelRadius": 5,

  "radius": "42%",
  "innerRadius": "60%",
  "labelText": "[[title]]",
  "export": {
    "enabled": true
  }
} );

var chart2 = AmCharts.makeChart( "chartdiv2", {
      "type": "pie",
      "theme": "light",
      "dataProvider": [ {
        "title": "New",
        "value": 4852
      }, {
        "title": "Returning",
        "value": 9899
      } ],
      "titleField": "title",
      "valueField": "value",
      "labelRadius": 5,

      "radius": "42%",
      "innerRadius": "60%",
      "labelText": "[[title]]",
      "export": {
        "enabled": true
      }
    } );