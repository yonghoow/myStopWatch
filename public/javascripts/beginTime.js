var d;
var beginTime;
var beginHours;
var beginMins;
var beginDate;
var beginMonth;
var beginYear;

function displayTime() {
    d = new Date();
    beginTime = d.getTime();
    beginHours = d.getHours();
    beginMins = d.getMinutes();
    beginDate = d.getDate();
    beginMonth = d.getMonth() + 1;
    beginYear = d.getFullYear();
    document.getElementById("demo").innerHTML = "Scan passport on: " + beginDate + "/" + beginMonth + "/" + beginYear + " at " + beginHours + ":" + beginMins + " hrs";
}
