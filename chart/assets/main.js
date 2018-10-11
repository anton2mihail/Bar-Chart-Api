const drawBarChart = (data, options, element) => {

};
const main = function () {
  $('#X-Axis').on('blur', (e) => {
    $('#X-Axis').css({
      'border': '3px solid',
      'border-color': 'green'
    });
  });
  $('#Y-Axis').on('blur', (e) => {
    $('#Y-Axis').css({
      'border': '3px solid',
      'border-color': 'green'
    });
  });
  $('#specs').on('submit', (e) => {
    e.preventDefault();
    console.log('submitted');
  });
};

$('document').ready((() => {
  $('.frm').append('<center><form id="specs"><div class="form-group"><input type="axisTitle" class="form-control" id="X-Axis" placeholder="X Title:"></div><div class="form-group"><input type="axisTitle" class="form-control" id="Y-Axis" placeholder="Y Title:"></div><div class="form-group"><label for="barColor" style="color:salmon;margin-right: 4%;">Bar Color</label><label for="labelColor" style="color:salmon;margin-left: 15%;">Label Color</label><br /><input type="color" name="Color Picker" id="barColor" style="margin-right: 12%;" /><input type="color" name="Color Picker" id="labelColor" style="margin-left: 10%;" /></div><div class="input-group mb-3" style="width:45%;height: 40px;"><div class="input-group-prepend"><span class="input-group-text" style="background-color:rgba(255,255,255,0.2);color: salmon;">Data</span></div><textarea class="form-control" aria-label="With textarea" placeholder="Enter Comma Seperated Numerical Data:"></textarea></div><button type="submit" class="btn btn-primary">Submit</button></form></center>');
  $('#Y-Axis').css({
    'width': '45%',
    'margin-bottom': '10px',
    'margin-top': '30px'
  });
  $('#X-Axis').css({
    'width': '45%',
  });
  $('#data').css({
    'width': '45%',
  });
  main();
}));