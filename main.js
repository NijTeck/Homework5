/*var holdHour = -1;
const clock = document.getElementById("currentDay");
setInterval(() => {
    const now = moment();
    const humanReadable = now.format('MMMM Do YYYY, h:mm:ss a');
    currentDay.textContent = humanReadable;
    var currentHour = now.format("H");
    if (currentHour != holdHour) {
        holdHour = currentHour;
        for (var i = 1; i <= 15; i++) {
            var block = $("#inputBlock" + i);
            var time = (i + 7);
            block.removeClass();
            block.addClass("description");
            if (time < currentHour) {
                block.addClass("past");
            } else if (time > currentHour) {
                block.addClass("future");
            } else {
                block.addClass("present");
            }
        }
    }
}, 1000); */


$(function() {

    let d = new Date()

    let year = d.getFullYear()
    let month = d.getMonth() + 1;
    let day = d.getDate()

    let totalDays = new Date(year, month, 0).getDate()

    let output =
        (month < 10 ? '0' : '') + month + '/' +
        (day < 10 ? '0' : '') + day + '/' + year

    $('.date').text(`${output}`)





})

$(".calendar-container").click(function(e) {

    let row = 0,
        length = 1,
        column = 0


    let timeObj = {
        "5 AM": 1,
        "6 AM": 2,
        "7 AM": 3,
        "8 AM": 4,
        "9 AM": 5,
        "10 AM": 6,
        "11 AM": 7,
        "12 PM": 8,
        "1 PM": 9,
        "2 PM": 10,
        "3 PM": 11,
        "4 PM": 12,
        "5 PM": 13,
        "6 PM": 14,
        "7 PM": 15,
        "8 PM": 16,
    }

    //http://www.rexegg.com/regex-quickstart.html

    column = e.target.className.match(/\d+/)[0]

    $('.modal-container').toggle();

    $('.modal-container--close').click(function() {
        $('.modal-container').css('display', 'none')
    });

    $('.modal-container--form').submit(function(e) {
        e.preventDefault();

        row = timeObj[$("#start-select").val()];
        length = (timeObj[$("#end-select").val()]) - (timeObj[$("#start-select").val()]);
        $('.content').append(`<div class='event' style='grid-row:${row}/span ${length};grid-column:${column};background-color: yellow;'>Reservation</div>`);
        $('.modal-container--form')[0].reset();
        $('.modal-container--form').off();
        $('.calendar-container').toggle();
    })
});