// JavaScript Document
$(document).ready(function() {
  var hamburger = $('.menu');
  hamburger.click(function() {
     hamburger.toggleClass('open');
  });
});