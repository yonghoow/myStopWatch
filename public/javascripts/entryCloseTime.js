var entryCloseTime;
var entryCloseTimeLapsed;
function displayTime3() {
    d = new Date();
    entryCloseTime = d.getTime();
    entryCloseTimeLapsed = (entryCloseTime - entryOpenTime) / 1000;
    entryCloseTimeLapsed = entryCloseTimeLapsed.toFixed(2); 
    document.getElementById("demo3").innerHTML = "Time Taken: " + entryCloseTimeLapsed + " sec";
}
