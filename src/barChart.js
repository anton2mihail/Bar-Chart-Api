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
  setDocument() {
    let bd = document.querySelector('body');
    bd.style.height = '100vh';
    bd.style.overflow = 'hidden';
    bd.style.fontWeight = 'bold';
  }
  setFigureDisplay() {
    let el = document.createElement('figure');
    el.style.maxWidth = '600px';
    el.style.width = this.width;
    el.style.height = this.height;
    el.style.margin = '60px auto auto auto';
    return el;
  }
  setGraphProperties() {
    let parent = this.setFigureDisplay();
    let graph = document.createElement('div');
    graph.className = 'graph';
    graph.style.display = 'grid';
    graph.style.grid = 'repeat(10, auto) max-content / max-content repeat(5, auto)';
    graph.style.height = '100%';
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
      spn.style.marginTop = '-0.5em';
      spn.innerHTML = '' + step * i + ' --';
      graph.appendChild(spn);
    }
  }
  buildBars() {
    let bars = [];
    for (let i = 0; i < this.values.length; i++) {}
  }

}
export default BarChart;