var weekdaysElement = document.querySelector(".weekDays");
var firstDateElement = document.querySelector(".firstD");
var secondDateElement = document.querySelector(".secondD");



var weekTemplateEle = document.querySelector(".weekTemplate").innerHTML
var weekTemplate = Handlebars.compile(weekTemplateEle)

const days = Matching()

document.getElementById("weekDays").innerHTML = weekTemplate({ week: days.getWeekDays() });

function myFirstDays() {
  
        var firstDateElement = document.querySelector(".firstE").value;
        days.checkDay(firstDateElement)
        document.getElementById("weekDays").innerHTML = weekTemplate({ week: days.compareDays() });
    
}

function mySecDays() {
    var secondDateElement1 = document.querySelector(".secondE").value;
    days.confirmDay(secondDateElement1);
    document.getElementById("weekDays").innerHTML = weekTemplate({ week: days.compareDays() });
}

firstDateElement.addEventListener('change', myFirstDays)
secondDateElement.addEventListener('change', mySecDays)
