var d;
var beginTime;
var beginHours;
var beginMins;
var beginSecs;
var beginDate;
var beginMonth;
var beginYear;

function displayTime() {
    d = new Date();
    beginTime = d.getTime();
    beginHours = d.getHours();
    beginMins = d.getMinutes();
    beginMins = beginMins.toString().padStart(2, '0');
    beginSecs = d.getSeconds();
    beginSecs = beginSecs.toString().padStart(2, '0');
    beginDate = d.getDate();
    beginMonth = d.getMonth() + 1;
    beginYear = d.getFullYear();
    document.getElementById("demo").innerHTML = "Scan passport on: " + beginDate + "/" + beginMonth + "/" + beginYear;
    document.getElementById("demo1").innerHTML = " at " + beginHours + ":" + beginMins + ":" + beginSecs + " (h:min:sec)";
}
