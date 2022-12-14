let beginUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdXhhA1CDODfN2n5kFQ8Ic4TjKwBP9dS9Mbbgqi32qQ0RiGEA/viewform?usp=pp_url";
let nameprefix = '&entry.354864998=';
var myName;
let locationprefix = '&entry.327151725=';
var myLocation;
let hallprefix = '&entry.1258500424=';
var myHall;
let wingprefix = '&entry.435344810=';
var myWing = 'Nil';
let laneprefix = '&entry.661715170=';
var myLane;
let travellerinsideprefix = '&entry.347452778=';
var myTravellerInside;
let travellerheightprefix = '&entry.1300027041=';
var myTravellerHeight;
let ageprefix = '&entry.45061827=';
var myAge;
let baggageprefix = '&entry.1095819260=';
var myBaggage = 'Yes';
let irisprefix = '&entry.2075619033=';
var myIris;
let fpprefix = '&entry.1751873266=';
var myFp;
let maskprefix = '&entry.2086046119=';
var myMask = 'Yes';
let mask1stprefix = '&entry.1669305542=';
var myMask1st = 'No';
let mask2ndprefix = '&entry.1385705137=';
var myMask2nd;
let spectaclesprefix = '&entry.736465663=';
var mySpectacles;
let capprefix = '&entry.9993390=';
var myCap;
let capprefix1st = '&entry.1261226136=';
var myCap1st;
let capprefix2nd = '&entry.267818453=';
var myCap2nd;
let tascentprefix = '&entry.850741057=';
var myTascent = 'Yes';
let stickerprefix = '&entry.1159158121=';
var mySticker = 'Yellow Sticker';
let instructionprefix = '&entry.535551333=';
var myInstruction = 'Yes';
let tentcardprefix = '&entry.550993234=Tent card';
let tvinstructionprefix = '&entry.550993234=TV Instructions';
let officersprefix = '&entry.550993234=Officers';
let dayprefix = '&entry.1103047838_day=';
let monthprefix = '&entry.1103047838_month=';
let yearprefix = '&entry.1103047838_year=';
let hourprefix = '&entry.1979247708_hour=';
let minuteprefix = '&entry.1979247708_minute=';
let entryOpen = '&entry.1832172790=';
let entryClose = '&entry.827409349=';
let exitOpen = '&entry.617492091=';

function submitForm() {
    myName = document.getElementById("mySelectName").value;
    myLocation = document.getElementById("mySelectLocation").value;
    myHall = document.getElementById("mySelectHall").value;
    myLane = document.getElementById("mySelectLane").value;
    myTravellerInside = document.getElementById("mySelectTravellerInside").value;
    myTravellerHeight = document.getElementById("mySelectTravellerHeight").value;
    myAge = document.getElementById("mySelectAge").value;
    if (exitOpenTimeLapsed > 15) {
        myIris = "2nd";
    } else if (exitOpenTimeLapsed < 16) {
	myIris = "1st";
    }

    if (exitOpenTimeLapsed > 29) {
	myFp = "Yes";
    } else if (exitOpenTimeLapsed < 30) {
	myFp = "No";
    }

    if (exitOpenTimeLapsed > 15) {
        myMask2nd = "No";
    } else {
	myMask2nd = "N/A";
    }

    mySpectacles = document.getElementById("mySelectSpectacles").value;
    myCap = document.getElementById("mySelectCap").value;
    myCap1st = document.getElementById("mySelectCap1st").value;

    if (exitOpenTimeLapsed < 16) {
	myCap2nd = "N/A";
    } else {
        myCap2nd = myCap1st;
    }
    window.open(
	beginUrl + nameprefix + myName + locationprefix + myLocation + 
	hallprefix + myHall + wingprefix + myWing + laneprefix + myLane + 
	travellerinsideprefix + myTravellerInside + travellerheightprefix + myTravellerHeight +
	ageprefix + myAge + baggageprefix + myBaggage + irisprefix + myIris + 
	fpprefix + myFp + maskprefix + myMask + mask1stprefix + myMask1st + 
	mask2ndprefix + myMask2nd + spectaclesprefix + mySpectacles +
	capprefix + myCap + capprefix1st + myCap1st + capprefix2nd + myCap2nd + 
	tascentprefix + myTascent + stickerprefix + mySticker + 
	instructionprefix + myInstruction + 
	tentcardprefix + tvinstructionprefix + officersprefix + dayprefix + beginDate + 
	monthprefix + beginMonth + yearprefix + beginYear +
	hourprefix + beginHours + minuteprefix + beginMins +
	entryOpen + entryOpenTimeLapsed + entryClose + entryCloseTimeLapsed +
	exitOpen + exitOpenTimeLapsed);
}

