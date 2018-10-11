class BarChart {
  constructor(data, options, element) {
    this.values = data;
    this.width = options.width;
    this.height = options.height;
    this.place = element;
  }
  buildBars() {
    let bars = [];
    for (let i = 0; i < this.data.length; i++) {
      bars.push({
        'dataPoint': this.data[i],
        'node': 'div',
        'attributes': {
          'id': 'bar'
        }
      });
    }
    return bars;
  }
  setBarDisplay() {

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
}
export default BarChart;
