$(function() {


    // Showing the date of today to the  user

    let d = new Date();

    // SETTING THE YEAR, MONTH AND DATE  TO  SHOW UP ON THE TOP OF THE PAGE

    let toYear = d.getFullYear();
    let toMonth = d.getMonth()+1;
    let toDay = d.getDate();

    let totalDays = new Date(toYear, toMonth, 0).getDate();

    let output =  (toMonth<10 ? '0' : ' ') + toMonth + '/' + (toDay <10 ? '0' : ' ') + toDay + '/' + toYear

$('.date').text(`${output}`)

// 
// 

$(".planner").click(function() {
$('.moal-container').toggle();

// Displaying the modal container for our page. 

$('.modal-container--close').click(function() {

    $('.modal-container').css('display', 'none');
    let row = 0, length = 1, column = 0
}) 




// opt[value='$@5 AM']{$@5 AM}*7;



//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner

//THEN the current day is displayed at the top of the calendar
//WHEN I scroll down

//THEN I am presented with timeblocks for standard business hours
//WHEN I view the timeblocks for that day
let row = 0;
let colume = 0;
let lenght = 0;


///////////////// Regex Expressions //////////////////////////////
//// Drawing Idea from https://www.rexegg.com/regex-quickstart.html/////

colume = e.target.planes.match(/\d+/) [0]; // Pulled info also from  https://medium.com/@aleks.roslyakov/using-css-grid-jquery-making-a-daily-scheduler-pt-ii-7af7d239a55d


///////////////// Regex Expressions Ends /////////////////////////

////////// SETTING THE TIMEOBJ ////////////// 

let timeObj = {

"5 AM " : 1,
"6 AM " : 2,
"7 AM " : 3,
"8 AM " : 4,
"9 AM " : 5,
"10 AM " : 6,
"11 AM " : 7,
"12 NOON " : 8,
"1 PM " : 9,
"2 PM " : 10,
"3 PM " : 11,
"4 PM " : 12,
"5 PM " : 13,
"6 PM " : 14,
"7 PM " : 15,
"8 PM " : 16,
"9 PM " : 17,
"10 PM" : 18,
"11 PM" : 19,
"12 AM" : 20,
"1 AM" : 21,
"2 AM" : 22,
"3 AM" : 23,
"4 AM" : 24
}


// PUll some code snip from   https://medium.com/@aleks.roslyakov/using-css-grid-jquery-making-a-daily-scheduler-pt-ii-7af7d239a55d
// Because the INFO directly relates to what I was trying to achieve. 

column = e.target.className.match(/\d+/)[0]

        $('.modal-container').toggle()

        $('.modal-container--close').click(function(){
            $('.modal-container').css('display', 'none')
        })
        
        $('.modal-container--form').submit(function(e){
            e.preventDefault()

length = (timeObj[$( "#end-select" ).val()]) - (timeObj[$( "#start-select" ).val()])


})