'use strict';
/**
 *Creates an instance of BarChart.
 * @param {*} data
 *    Array that contains Data Values
 * @param {*} options
 *    An Object that contains some mandatory customization as well as some that is optional
 * @param {*} element
 *    The id of the element on the page within which to place the graph
 *
 */
class BarChart {
  constructor(data, options, element) {
    this.values = data;
    this.width = options.width;
    this.height = options.height;
    this.options = options;
    this.place = element;
  }

  /**
   *@method getValues
   *
   * @returns data array
   * @memberof BarChart
   */
  getValues() {
    return this.values;
  }

  /**
   *@method setValues
   *
   * @param {*} values
   * @memberof BarChart
   */
  setValues(values) {
    this.values = values;
  }

  /**
   *@method getOptions
   *
   * @returns options object
   * @memberof BarChart
   */
  getOptions() {
    return this.options;
  }

  /**
   *@method setOptions
   *
   * @param {*} newOptions
   * @memberof BarChart
   */
  setOptions(newOptions) {
    this.options = newOptions;
  }

  /**
   *@method getElement
   *
   * @returns id of element on the html document
   * @memberof BarChart
   */
  getElement() {
    return this.place;
  }

  /**
   *@method setElement
   *
   * @param {*} newElement
   * @memberof BarChart
   */
  setElement(newElement) {
    this.place = newElement;
  }

  /**
   *@method setDocumentStylesheet
   *    Sets inline Styles by class for the following elements
   *
   * @memberof BarChart
   */
  setDocumentStylesheet() {
    let def = 'palegoldenrod';
    var s = document.createElement('style');
    s.type = 'text/css';
    s.innerText = '.graph {display : grid;grid : repeat(10, auto)max-content / max-content repeat(' + this.values.length + ', auto);height : 100%;}/* graph bars */.graphBar {grid-row: 1 / -2;background: ' + this.options.backdropColor + ' linear-gradient(to top, ' + this.options.barColor + ' var(--h), transparent var(--h));justify-self: center;width: ' + Math.floor(225 / this.values.length) + 'px;height: 100%;text-align: center;transition: 0.1s all ease-in;}.graphBar:hover' +
        ' {opacity: 0.7;box-shadow: 3px 3px 2 3;}/* graph  labels */.graphRowLabel {margi' +
        'n-top: -0.5em;}.graphColumnLabel {justify-self: center;margin-top: 6px;}body {he' +
        'ight: 100vh;font-weight: bold;overflow: hidden;}figure {width: ' + this.width + ';max-width: 600px;height: ' + this.height + ';margin: 60px auto auto auto;}figcaption {text-align: center;margin-top: 30px;}h' +
        '1 {text-align: center;font-size: 14pt;margin-bottom: 0;}';
    document
      .head
      .appendChild(s);
  }

  /**
   *@method makeFigure
   *    Creates html figure element
   *
   * @memberof BarChart
   */
  makeFigure() {
    let el = document.getElementById(this.place);
    let fig = document.createElement('figure');
    $(el).append(fig);
  }

  /**
   *@method addGraphElement
   *    Adds an html div with a class of graph to the page
   *
   * @memberof BarChart
   */
  addGraphElement() {
    this.makeFigure();
    let div = document.createElement('div');
    div.className = 'graph';
    $('figure').append(div);
  }

  /**
   *@method setGraphRowLabels
   *    Sets the graph scale
   *
   * @returns The highest number in the graph scale
   * @memberof BarChart
   */
  setGraphRowLabels() {
    this.addGraphElement();
    var max = this
      .getValues()
      .reduce(function (a, b) {
        return Math.max(a, b);
      });
    let step = Math.round(max / 10);
    for (let i = 10; i > 0; i--) {
      let spn = document.createElement('span');
      spn.className = 'graphRowLabel';
      spn.innerHTML = '' + step * i + ' --';
      $('.graph').append(spn);

    }
    return step * 10;
  }
  setGraphBars() {
    let max = this.setGraphRowLabels();
    for (let i = 0; i < this.values.length; i++) {
      let bar = document.createElement('div');
      let innerLabel;
      let barHeight = (this.values[i] / max) * 100;
      if (this.options.innerLabel === 'middle') {
        innerLabel = ((barHeight / 2) + (100 - barHeight)) + '%';
      } else if (this.options.innerLabel === 'bottom') {
        innerLabel = 95 + '%';
      } else {
        innerLabel = 100 - (barHeight) + '%';
      }
      bar.className = 'graphBar';
      bar.style.gridColumn = i + 2;
      bar.innerHTML = '<span style="position:relative;top:' + innerLabel + ';"><i>' + this.values[i] + '</i></span>';
      bar
        .style
        .setProperty('--h', '' + barHeight + '%');
      $('.graph').append(bar);
    }
  }
  labelVs() {
    this.setGraphBars();
    let vs = document.createElement('span');
    vs.className = 'axVs';
    let op = this.getOptions();
    $('.graph').append(vs);
    $('.axVs').append('<sup>' + op.y + '</sup>&frasl;<sub>' + op.x + '</sub>');
  }
  setGraphColumnLabels() {
    this.labelVs();
    for (let i = 0; i < this.values.length; i++) {
      let colLabel = document.createElement('span');
      colLabel.className = 'graphColumnLabel';
      colLabel.innerHTML = '' + this.options.dataLabel[i];
      $('.graph').append(colLabel);
    }
  }
  createBarGraph() {
    this.setGraphColumnLabels();
    let title = document.createElement('h1');
    title.className = 'graphTitle';
    if (this.options.titleFontSize !== '') {
      title.style.fontSize = this.options.fontSize + 'px';
    }
    if (this.options.titleColor !== '') {
      title.style.color = this.options.titleColor;
    }
    title.innerText = '' + this.options.y + ' vs ' + this.options.x;
    $('body').prepend(title);
    let cap = document.createElement('figcaption');
    $('figcaption').text('' + this.options.x);
    $('figure').append(cap);
    this.setDocumentStylesheet();
    return true;
  }

}
