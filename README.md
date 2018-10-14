# Bar Chart Api

A simple Bar Chart api written in javascript that creates custom barcharts that can be placed anywhere on the page.

## Getting Started

All that needs to be done when using this is to clone this repo, and move the `barChart.js` file into your working directory and link it as a script in the head, or body of your html document.
```html
<script src='pathToFile/barChart.js'></script>
```
Make sure that this script link is placed before your own script link(s) so that you have acess to it when writing your javascript code. 

### Prerequisites

The only dependency required for this api to function correctly is jquery, so add that as a script tag in your head html element before any other scripts like so -->
```html
<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
    crossorigin="anonymous"></script>
    <script src='anyOtherScripts.js'></script>
```

### Usage

Usage is pretty easy because it is simply packaged as a class.

Declare your parameters:
  First is a comma seperated list of data values that you want the bars to display

```javascript
let data = [45,74,95,34,65,44,85,54];
```
  Next is an object that declares values for many different parameters...
  Possible parameters are:
  
  * Chart Width
  
     _Specifies the width of the chart in pixels. Make sure to actually include px when writing; Example:_`200px`  
     
  * Chart Height
  
     _Specifies the height of the chart in pixels. Same syntax as above._
     
  * Y-Axis Title
  
     _This property is set with simply writing_ `'y':'Axis Title'`
     
  * X-Axis Title
  
     _This property is set simmilarly to the y-axis title_ `'x':'Axis Title'`
     
  * Data Labels
  
     _This property is set as an array. Make sure to give the bar labels in the order that the data was given. For example:_`'dataLabel':['a','b','c','d','e','f','g','h']` 
     
  * Inner Data Value Position
  
     _This property refers to the position in which each data value shoud be placed within its respective bar, it has two options, if this parameter is excluded, the default position is top; The two options are:`bottom`, or `middle`. An Example would be `'innerLabel':''` --> Would set the labels at the tops of the bars.
     
  * Title font Size
  
     _The title of the graph is generated automatically, but it's font size can be changed by adding this property to the options object like so: `'titleFontSize':'23px'`
     
   * Individual Data Label Colors
      _This can be passed in as an array of colors written in literal format ie.('red','blue'), or in hex code ie.(#fff), regardless the length of this list must be the same as the length of the data array. It is included as `'labelColors'`.
      
   * Individual Bar Colors
      _Simmilar to data label colors this is included as an array with the same color formats available as the labels. The length of this list must as well be equal to the length of the data array. It is used as `'barColor'`.
      
      
###### More options are coming Soon (Multiple Values for each bar as well as customization for each)...







  Finally you must give the id of the container within which you want to place the graph: `let element = 'idOfContainer';`
  Now create an instance of the bar chart class passing in these parameters, and call the `createBarGraph()` method on the BarChart object. 
  ```javascript
  let barGraph = new BarChart(data, options, element);
  barGraph.createBarGraph();
  ```
  
#### Example Implementation

main.js
```javascript
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
```
index.html
```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Api Test</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
    crossorigin="anonymous"></script>
</head>

<body>
  <div id="place"></div>
  <script src="barChart.js"></script>
  <script src="index.js"></script>
</body>

</html>
```
#### Result ->
![alt text](https://github.com/anton2mihail/Bar-Chart-Api/blob/master/docs/screenshots/ImplementationExample.png 'Example')


## Authors

* **Anton Lachmaniucu**

## Acknowledgments

* MDN Web Documentation, because without it I wouldn't know any fancy css commands...

