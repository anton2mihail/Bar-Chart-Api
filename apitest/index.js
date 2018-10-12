let data = [
  45,
  74,
  95,
  34,
  65,
  44,
  85,
  54
];
let options = {
  'width': '600px',
  'height': '420px',
  'barColor': 'blue',
  'y': 'Y-Axis Title',
  'x': 'X-Axis Title',
  'dataLabel': [
    'x',
    'x',
    'x',
    'x',
    'x',
    'x',
    'x',
    'x'
  ],
  'backdropColor': 'green'
}
let element = 'place';

let barChart = new BarChart(data, options, element);
barChart.createBarGraph();