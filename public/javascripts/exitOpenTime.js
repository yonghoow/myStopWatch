var exitOpenTime;
var exitOpenTimeLapsed;
    function displayTime4() {
    d = new Date();
    exitOpenTime = d.getTime();
    exitOpenTimeLapsed = (exitOpenTime - entryCloseTime) / 1000;
    exitOpenTimeLapsed = exitOpenTimeLapsed.toFixed(2);
    document.getElementById("demo4").innerHTML = "Time Taken: " + exitOpenTimeLapsed + " sec";
}
