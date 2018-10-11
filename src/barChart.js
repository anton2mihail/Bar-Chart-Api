class BarChart {
  constructor(data, options, element) {
    this.values = data;
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
  buildBars() {
    let bars = [];
    for (let i = 0; i < this.data.length; i++) {
      let bar = document.createElement('div');
      bar.style.transition = 'all .5s ease-in-out';
      bar.style.display = 'inline-block';
      bar.style.position = 'relative';
      bar.style.width = '40px';
      bar.style.margin = '8px';
      bar.style.backgroundColor = this.options.barColor;
      bar.style.verticalAlign = 'baseline';
      let p = document.createElement('p');
      p.innerText = this.data[i];
      p.style.position = 'absolute';
      p.style.height = '100%';
      p.style.width = '100%';
      p.style.padding = '0';
      p.style.margin = '0';
      p.style.textAlign = 'center';
      bars.push([bar, p]);
    }
    return bars;
  }
  setDocument() {
    let bd = document.querySelector('body');
    let ht = document.querySelector('html');
    bd.style.width = '100%';
    bd.style.height = '100%';
    ht.style.width = '100%';
    ht.style.height = '100%';
    bd.style.overflow = 'hidden';
    ht.style.overflow = 'hidden';
  }
  setElementDisplay() {
    let el = document.querySelector(this.getElement());
    el.style.width = 'fit-content';
    el.style.height = 'fit-content';
    el.style.margin = '15% 0 0 35%';
    el.style.borderLeftWidth = '1px';
    el.style.borderLeftColor = 'blue';
    el.style.borderBottomWidth = '1px';
  }
  setBarDisplay() {

  }

}
export default BarChart;