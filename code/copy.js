// JavaScript Document
<!--
function fixDate(date) {
  var base = new Date(0);
  var skew = base.getTime();
  if (skew > 0)
  date.setTime(date.getTime() - skew);
}
var cur = new Date();
fixDate(cur);
var year = cur.getFullYear();
document.write('Copyright &copy ');
document.write(year);
document.write(' Adam J. Thompson - <a href=\"http://www.adamjthompson.com\">adamjthompson.com</a>.');
// -->