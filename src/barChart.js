class BarChart {
  constructor(data, options, element) {
    this.values = data.split(',');
    this.width = options.width;
    this.height = options.height;
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
    return this.element;
  }
  setElement(newElement) {
    this.element = newElement;
  }
  setDocumentStylesheet() {
    let def = 'palegoldenrod';
    var s = document.createElement('style');
    s.type = 'text/css';
    s.innerText = '.graph {display : grid;grid : repeat(10, auto)max-content / max-content repeat(' + this.values.length + ', auto);height : 100%;}/* graph bars */.graphBar {grid-row: 1 / -2;background: ' + this.options.barColor || def + 'linear-gradient(to top, gold var(--h), transparent var(--h));justify-self: cente' +
        'r;width: ' + Math.floor(225 / this.values.length) + 'px;height: 100%;text-align: center;transition: 0.3s all ease-in;}.graphBar:hover' +
        ' {opacity: 0.7;box-shadow: 3px 3px 2 3;}/* graph  labels */.graphRowLabel {margi' +
        'n-top: -0.5em;}.graphColumnLabel {justify-self: center;margin-top: 6px;}body {he' +
        'ight: 100vh;font-weight: bold;overflow: hidden;}figure {width: ' + this.width + ';max-width: 600px;height: ' + this.height + ';margin: 60px auto auto auto;}figcaption {text-align: center;margin-top: 30px;}h' +
        '1 {text-align: center;font-size: 14pt;margin-bottom: 0;}';
    document
      .head
      .appendChild(s);
  }
  makeFigure() {
    let el = document.createElement('figure');
    let main = document.querySelector(element);
    main.appendChild(el);
    return el;
  }
  setGraphProperties() {
    let parent = this.makeFigure();
    let graph = document.createElement('div');
    graph.className = 'graph';
    parent.appendChild(graph);
    return graph;
  }
  setGraphRowLabels() {
    let graph = this.setGraphProperties();
    let maxScale = Math.max(this.values);
    let step = Math.round(maxScale / 10);
    for (let i = 10; i > 0; i--) {
      let spn = document.createElement('span');
      spn.className = 'graphRowLabel';
      spn.innerHTML = '' + step * i + ' --';
      graph.appendChild(spn);
    }
    return graph;
  }
  setGraphBars() {
    let graph = this.setGraphRowLabels();
    for (let i = 0; i < this.values.length; i++) {
      let bar = document.createElement('div');
      bar.className = 'graphBar';
      bar.style.gridColumn = i + 2;
      bar
        .style
        .setProperty('--h', '' + Math.round((this.values[i] / Math.max(this.values)) * 100));
      graph.appendChild(bar);
    }
    return graph;
  }
  labelVs() {
    let graph = this.setGraphRowLabels();
    let vs = document.createElement('span');
    let sup = document.createElement('sup');
    sup.innerText = '' + this.options.y;
    let sub = document.createElement('sub');
    sub.innerText = '' + this.options.x;
    vs.innerHTML = sup + '&frasl;' + sub;
    graph.appendChild(vs);
    return graph;
  }
  setGraphColumnLabels() {
    let graph = this.labelVs();
    for (let i = 0; i < this.values.length; i++) {
      let colLabel = document.createElement('span');
      colLabel.className = 'graphColumnLabel';
      colLabel.innerHTML = '' + this.options.dataLabel[i];
      graph.appendChild(colLabel);
    }
    return graph;
  }

}
export default BarChart;