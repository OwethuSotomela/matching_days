function Matching(){
    let weekdays = [{day:"Sunday", class:""},{day:"Monday", class:""},{day:"Tuesday", class:""},{day:"Wednesday", class:""},{day:"Thursday", class:""},{day:"Friday", class:""},{day:"Saturday", class:""}]
    let firstday = ""
    let secondDay = ""
    

    function getWeekDays(){
        return weekdays
    }
    
    function checkDay(allDays){
        allDays = new Date(allDays)
        var day1 = allDays.getDay()
        firstday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day1];

    }

    function confirmDay(allDays){
        allDays = new Date(allDays);
        var day2 = allDays.getDay()
        secondDay =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day2];

    }

    function getDayString(){
        return{
            firstday,
            secondDay
        }
    }

    function compareDays(){
        weekdays = [{day:"Sunday", class:""},{day:"Monday", class:""},{day:"Tuesday", class:""},{day:"Wednesday", class:""},{day:"Thursday", class:""},{day:"Friday", class:""},{day:"Saturday", class:""}]
        if (firstday != secondDay && secondDay == "" && firstday != ""){
            weekdays.forEach((verify)=>{
                if(verify.day == firstday){
                    verify.class = "red";
                }
            })
            return weekdays
        }
        if (secondDay != firstday && firstday == "" && secondDay != ""){
            weekdays.forEach((doubleCheck)=>{
                if(doubleCheck.day == secondDay){
                    doubleCheck.class = "blue";
                }
            })
            return weekdays
                }
        if (secondDay != firstday && firstday != "" && secondDay != ""){
            weekdays.forEach((verify)=>{
                if(verify.day == firstday){
                    verify.class = "red";
                }if(verify.day == secondDay){
                    verify.class = "blue";
                }
            })
            return weekdays
        } else{
            weekdays.forEach((verify)=>{
                if(verify.day == secondDay){
                    verify.class = "green";
                }
            })
            return weekdays
        }
    }
                
    return{
        getWeekDays,
        checkDay,
        confirmDay,
        compareDays,
        getDayString,
    }
}