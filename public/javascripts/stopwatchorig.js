var sw = {
	// (A) PROPERTIES
	etime : null, //html time display
	erst : null, //html reset button
	ego : null, //html start/stop button
	timer : null, //timer object
	now : 0, //current elapsed time


	// (B) INITIALIZE
	init : () => {
		// (B!) GET HTML ELEMENTS
		sw.etime = document.getElementById("sw-time");
		sw.erst = document.getElementById("sw-rst");
		sw.ego = document.getElementById("sw-go");

		// (B2) ENABLE BUTTON CONTROLS
		sw.erst.onclick = sw.reset;
		sw.ego.onclick = sw.start;
		sw.erst.disabled = false;
		sw.ego.disabled = false;
	},


	// (C) START!
	start : () => {
		sw.timer = setInterval(sw.tick, 10);
		sw.ego.value = "Stop";
		sw.ego.onclick = sw.stop;
	},

	// (D) STOP
	stop : () => {
		clearInterval(sw.timer);
		sw.timer = null;
		sw.ego.value = "Start";
		sw.ego.onclick = sw.start;
	},

	// (E) TIMER ACTION
	tick : () => {
		// (E1) CALCULATE MINS, SECONDS, MSECS
		sw.now++;
		let mins = 0, secs = 0, msecs = 0,
		remain = sw.now;
		mins = Math.floor(remain / 6000);
		remain -= mins * 6000;
		secs = Math.floor(remain / 100);
		remain -= secs * 100;
		msecs = remain;

		// (E2) UPDATE THE DISPLAY TIMER
		if (mins < 10) {mins = "0" + mins;}
		if (secs < 10) {secs = "0" + secs;}
		if (msecs < 10) {msecs = "0" + msecs}
		sw.etime.innerHTML = mins + ":" + secs + ":" + msecs;
	},

	// (F) RESET
	reset : () => {
		if (sw.timer != null) { sw.stop(); }
		sw.now = -1;
		sw.tick();
	}
};
window.addEventListener("load", sw.init);
