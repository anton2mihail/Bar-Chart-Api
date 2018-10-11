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
  $('head').append('<link rel="icon" href="./assets/images/favicon.png"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"crossorigin="anonymous"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"crossorigin="anonymous"><link rel="stylesheet" type="text/css" media="screen" href="./assets/main.css" /><script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"crossorigin="anonymous"></script>');
  $('body').append('<center><i class="far fa-chart-bar "></i><h1><b>CHARTABLE</b></h1></center>');
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