class BarChart {
  constructor(data, options, element) {
    this.values = data;
    this.width = options.width;
    this.height = options.height;
    this.place = element;
  }
  createChart() {}
  getValues() {
    return this.values;
  }
  setValues(value) {
    this.values = values;
  }
}
export default BarChart;