var exitOpenTime;
var exitOpenTimeLapsed;
var irisAttempt;
    function displayTime4() {
    d = new Date();
    exitOpenTime = d.getTime();
    exitOpenTimeLapsed = (exitOpenTime - entryCloseTime) / 1000;
    exitOpenTimeLapsed = exitOpenTimeLapsed.toFixed(2);
    if (exitOpenTimeLapsed < 16) {
        irisAttempt = "1st Iris Attempt";
    }else if (exitOpenTimeLapsed > 15 && exitOpenTimeLapsed < 30) {
        irisAttempt = "2nd Iris Attempt";
    }else if (exitOpenTimeLapsed > 30) {
	irisAttempt = "2nd Iris and fingerprint attempt";
    }
    document.getElementById("demo4").innerHTML = "Time Taken: " + exitOpenTimeLapsed + " sec";
    document.getElementById("demo5").innerHTML = irisAttempt;
}
