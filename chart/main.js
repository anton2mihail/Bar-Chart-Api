let formElements = ['#X-Axis', '#Y-Axis', '#data', '#barColor', '#labelColor'];
const drawBarChart = (data, options, element) => {

};
const main = function () {
  for (let i = 0; i < formElements.length; i++) {
    $(formElements[i]).on('blur', (e) => {
      $(formElements[i]).css({
        'border': '3px solid',
        'border-color': 'green'
      });
    });
  }

  $('#specs').on('submit', (e) => {
    e.preventDefault();
    let data, options, element;
    if ($(formElements[0]).val() !== '' && $(formElements[1]).val() !== '' && $(formElements[2]).val() !== '' && $(formElements[3]).val() !== '' && $(formElements[4]).val() !== '') {
      data = $(formElements[2]).val();
      options = {

      }
    } else {
      alert('Fill All Form Fields');
    }
  });
};

$('document').ready((() => {
  $('body').prepend('<center><i class="far fa-chart-bar "></i><h1><b>CHARTABLE</b></h1></center>');
  $('.frm').append('<center><form id="specs"><div class="form-group"><input type="axisTitle" class="form-control" id="X-Axis" placeholder="X Title:"></div><div class="form-group"><input type="axisTitle" class="form-control" id="Y-Axis" placeholder="Y Title:"></div><div class="form-group"><label for="barColor" style="color:salmon;margin-right: 4%;">Bar Color</label><label for="labelColor" style="color:salmon;margin-left: 15%;">Label Color</label><br /><input type="color" name="Color Picker" id="barColor" style="margin-right: 12%;" /><input type="color" name="Color Picker" id="labelColor" style="margin-left: 10%;" /></div><div class="input-group mb-3" style="width:45%;height: 40px;"><div class="input-group-prepend"><span class="input-group-text" style="background-color:rgba(255,255,255,0.2);color: salmon;">Data</span></div><textarea class="form-control" id="data" placeholder="Enter Comma Seperated Numerical Data:"></textarea></div><button type="submit" class="btn btn-primary">Submit</button></form></center>');
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