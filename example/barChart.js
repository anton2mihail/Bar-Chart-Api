'use strict';

class BarChart {
  constructor(data, options, element) {
    this.values = data;
    this.width = options.width;
    this.height = options.height;
    this.options = options;
    this.place = element;
  }
  getValues() {
    return this.values;
  }
  setValues(value) {
    this.values = values;
  }
  getOptions() {
    return this.options;
  }
  setOptions(newOptions) {
    this.options = newOptions;
  }
  getElement() {
    return this.place;
  }
  setElement(newElement) {
    this.place = newElement;
  }
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
  makeFigure() {
    let el = document.getElementById(this.place);
    $(el).append('<figure></figure>');
  }
  setGraphProperties() {
    this.makeFigure();
    $('figure').append('<div class="graph"></div>');
  }
  setGraphRowLabels() {
    this.setGraphProperties();
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
