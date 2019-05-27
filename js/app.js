$(document)
  .foundation()
  .on("submit", function(ev) {
    ev.preventDefault();
    $('#successWindow').foundation('open');
    $('#company-name-result').text($('#company').val());
    $('#full-name-result').text($('#full-name').val());
    $('#form-register')[0].reset();
  });
  $('#access').click(function(){
    alert('Welcome to your account');
  });