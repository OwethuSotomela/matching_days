var weekdaysElement = document.querySelector(".weekDays");
var firstDateElement = document.querySelector(".firstD");
var secondDateElement = document.querySelector(".secondD");



var weekTemplateEle = document.querySelector(".weekTemplate").innerHTML
var weekTemplate = Handlebars.compile(weekTemplateEle)

const days = Matching()

document.getElementById("weekDays").innerHTML = weekTemplate({ week: days.getWeekDays() });

function myDays() {

    var firstDateElement0 = document.querySelector(".firstE").value;

    // alert(firstDateElement);

    if (firstDateElement0) {
        var data = new Date(firstDateElement0);
        console.log(data);
        days.checkDay(data.getDay())
        document.getElementById("weekDays").innerHTML = weekTemplate({ week: days.getWeekDays() });
    }
}
function mySecDays() {

    var secondDateElement1 = document.querySelector(".secondE").value;

    if (secondDateElement1)
        var dataDate = new Date(secondDateElement1);
    console.log(dataDate);
    // weekdaysElement.classList.remove(day.confirmDay());
    days.confirmDay(dataDate.getDay());
    document.getElementById("weekDays").innerHTML = weekTemplate({ week: days.getWeekDays() });
}


firstDateElement.addEventListener('change', myDays)
secondDateElement.addEventListener('change', mySecDays)
