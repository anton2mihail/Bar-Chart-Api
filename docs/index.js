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

let data2 = [
  45,
  74,
  95,
  34,
  65,
  44,
  85,
  54
];
let options2 = {
  'width': '400px',
  'height': '220px',
  'barColor': 'orange',
  'y': 'Student Marks (%)',
  'x': 'Students',
  'dataLabel': [
    'Eric',
    'Zac',
    'Melanie',
    'Mel',
    'Judy',
    'Su',
    'Sam',
    'Alex'
  ],
  'backdropColor': 'yellow'
}
let element2 = 'second';

let barChart = new BarChart(data, options, element);
barChart.createBarGraph();
let otherbarChart = new BarChart(data2, options2, element2)
otherbarChart.createBarGraph();
