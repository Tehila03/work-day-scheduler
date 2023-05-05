//Add current date and time to #currentDay
//Add a p-tag immediately before table with id="appointmentAdded"
//Create a table 9 rows with 3 columns inside container element
//Give container mx-auto
//Make with of first and last columns col-1
//Make middle column col-8
//Add input in each row
//setList inputs to localStorage() with key "hour __" and value "input.value"
//getList inputs from localStorage()
//Assign each time row a number in military time equal to the corresponding time
//Create if function to measure time against our calendar
//if current time > previous hour value && current time > next hour, assign class "present"
//if current time > previous hours, assign class="past"
//if current time < future hours, assign class="future"

//Display time in hero
var currentTimeDisplay = $("#currentDay");
currentTimeDisplay.text(moment().format('llll'));

//Create variables for textarea to be used to get value
var hourNineText = $("#hour-9");
var hourTenText = $("#hour-10");
var hourElevenText = $("#hour-11");
var hourTwelveText = $("#hour-12");
var hourThirteenText = $("#hour-13");
var hourFourteenText = $("#hour-14");
var hourFifteenText = $("#hour-15");
var hourSixteenText = $("#hour-16");
var hourSeventeenText = $("#hour-17");
var confirmationMsg = $("#confirmation-msg");
var timeBlock = $(".time-block")


//Create variables for save button to initialize a click event to store textarea value to local storage
var saveBtn = $(".saveBtn");

//Onclick, save the value of all items to local storage
saveBtn.on("click", function (e) {
    e.preventDefault();
    hourNineVal = hourNineText.val();
    hourTenVal = hourTenText.val();
    hourElevenVal = hourElevenText.val();
    hourTwelveVal = hourTwelveText.val();
    hourThirteenVal = hourThirteenText.val();
    hourFourteenVal = hourFourteenText.val();
    hourFifteenVal = hourFifteenText.val();
    hourSixteenVal = hourSixteenText.val();
    hourSeventeenVal = hourSeventeenText.val();
    localStorage.setItem("hour09", hourNineVal);
    localStorage.setItem("hour10", hourTenVal);
    localStorage.setItem("hour11", hourElevenVal);
    localStorage.setItem("hour12", hourTwelveVal);
    localStorage.setItem("hour13", hourThirteenVal);
    localStorage.setItem("hour14", hourFourteenVal);
    localStorage.setItem("hour15", hourFifteenVal);
    localStorage.setItem("hour16", hourSixteenVal);
    localStorage.setItem("hour17", hourSeventeenVal);
});

//On page load, place all items from local storage to pageset
function init() {
    hourNineText.text(localStorage.getItem("hour09"));
    hourTenText.text(localStorage.getItem("hour10"));
    hourElevenText.text(localStorage.getItem("hour11"));
    hourTwelveText.text(localStorage.getItem("hour12"));
    hourThirteenText.text(localStorage.getItem("hour13"));
    hourFourteenText.text(localStorage.getItem("hour14"));
    hourFifteenText.text(localStorage.getItem("hour15"));
    hourSixteenText.text(localStorage.getItem("hour16"));
    hourSeventeenText.text(localStorage.getItem("hour17"));
};

init()


//Find value for current hour
var currentHour = moment().hours();
// var currentHour = 12
// console.log(currentHour);

for (var i = 0; i < timeBlock.length; i++) {
    if (timeBlock[i].dataset.time == currentHour) {
        timeBlock[i].classList.remove("past");
        timeBlock[i].classList.remove("future");
        timeBlock[i].classList.add("present");
    };
    if (timeBlock[i].dataset.time > currentHour) {
        timeBlock[i].classList.remove("past");
        timeBlock[i].classList.remove("present");
        timeBlock[i].classList.add("future");
    };
    if (timeBlock[i].dataset.time < currentHour) {
        timeBlock[i].classList.remove("present");
        timeBlock[i].classList.remove("future");
        timeBlock[i].classList.add("past");
    }
};
