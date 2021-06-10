function Matching(){
    let weekdays = [{day:"Sunday", class:""},{day:"Monday", class:""},{day:"Tuesday", class:""},{day:"Wednesday", class:""},{day:"Thursday", class:""},{day:"Friday", class:""},{day:"Saturday", class:""}]

    function getWeekDays(){
        return weekdays
    }
    function checkDay(allDays){
        weekdays = [{day:"Sunday", class:""},{day:"Monday", class:""},{day:"Tuesday", class:""},{day:"Wednesday", class:""},{day:"Thursday", class:""},{day:"Friday", class:""},{day:"Saturday", class:""}]
       return weekdays[allDays].class = "red"
    }
    function confirmDay(allDays){
        alert(allDays);
        weekdays = [{day:"Sunday", class:""},{day:"Monday", class:""},{day:"Tuesday", class:""},{day:"Wednesday", class:""},{day:"Thursday", class:""},{day:"Friday", class:""},{day:"Saturday", class:""}]
        return  weekdays[allDays].class = "blue";
       
    }
    // function sameDay(allDays){
    //     weekdays = [{day:"Sunday", class:""},{day:"Monday", class:""},{day:"Tuesday", class:""},{day:"Wednesday", class:""},{day:"Thursday", class:""},{day:"Friday", class:""},{day:"Saturday", class:""}]
    //     weekdays[allDays].class = "green"
    // }
                

    return{
        getWeekDays,
        checkDay,
        confirmDay,
    }
}