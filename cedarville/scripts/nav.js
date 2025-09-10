// JavaScript Document
/*$('body').on('click', '.menu', function(){
  $(this).toggleClass('open');
});*/

$(document).ready(function() {
  var hamburger = $('.menu');
  hamburger.click(function() {
     hamburger.toggleClass('open');
  });
});