let beginUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdXhhA1CDODfN2n5kFQ8Ic4TjKwBP9dS9Mbbgqi32qQ0RiGEA/viewform?usp=pp_url";
let nameprefix = '&entry.354864998=';
let myName = 'Yong Hoow';
let dayprefix = '&entry.1103047838_day=';
let monthprefix = '&entry.1103047838_month=';
let yearprefix = '&entry.1103047838_year=';
let hourprefix = '&entry.1979247708_hour=';
let minuteprefix = '&entry.1979247708_minute=';
let entryOpen = '&entry.1832172790=';
let entryClose = '&entry.827409349=';
let exitOpen = '&entry.617492091=';

function submitForm() {
    window.open(
	beginUrl + nameprefix + myName + dayprefix + beginDate +
	monthprefix + beginMonth + yearprefix + beginYear +
	hourprefix + beginHours + minuteprefix + beginMins +
	entryOpen + entryOpenTimeLapsed + entryClose + entryCloseTimeLapsed +
	exitOpen + exitOpenTimeLapsed);
}

