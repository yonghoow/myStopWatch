var entryOpenTime;
var entryOpenTimeLapsed;
function displayTime2() {
	d = new Date();
        entryOpenTime = d.getTime();
        entryOpenTimeLapsed = (entryOpenTime - beginTime) / 1000 ;
	entryOpenTimeLapsed = entryOpenTimeLapsed.toFixed(2);
        document.getElementById("demo2").innerHTML = "Time Taken: " + entryOpenTimeLapsed + " sec";
}
