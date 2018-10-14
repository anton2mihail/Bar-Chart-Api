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
  'barColor': [
    'yellow',
    'orange',
    'brown',
    'gold',
    'silver',
    'yellow',
    'silver',
    'orange'
  ],
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
  'labelColors': [
    'yellow',
    'orange',
    'brown',
    'gold',
    'silver',
    'yellow',
    'silver',
    'orange'
  ],
  'backdropColor': 'lightblue'
}
let element = 'place';
let barChart = new BarChart(data, options, element);
barChart.createBarGraph();
