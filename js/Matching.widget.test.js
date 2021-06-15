describe('Matching Days', function () {
    it('Should return all the days of the week', function () {
        let match = Matching();
        let weekdays = [{ day: "Sunday", class: "" }, { day: "Monday", class: "" }, { day: "Tuesday", class: "" }, { day: "Wednesday", class: "" }, { day: "Thursday", class: "" }, { day: "Friday", class: "" }, { day: "Saturday", class: "" }]

        assert.deepEqual(weekdays, match.getWeekDays())
    })
    it('Should return the first day in a string', function () {
        let match = Matching();
        match.checkDay('1989-03-01')
        assert.deepEqual("Wednesday", match.getDayString().firstday)
    })
    it('Should return the last day in a string', function(){
        let match = Matching();
        match.confirmDay('2021-06-20')
        assert.deepEqual("Sunday", match.getDayString().secondDay)
    })
    it("Should return all the days and color for that specific first day entered", function () {
        let match = Matching();
        match.checkDay('20201-06-17')
        var weekdays = [{day:"Sunday", class:""},{day:"Monday", class:""},{day:"Tuesday", class:""},{day:"Wednesday", class:"red"},{day:"Thursday", class:""},{day:"Friday", class:""},{day:"Saturday", class:""}]
        assert.deepEqual("Wednesday", match.getDayString().firstday)
        assert.deepEqual(weekdays, match.compareDays())
    })
    it("Should check if the first and the second date are on the same week and add class", function(){
        let match = Matching();
        match.checkDay('2021-06-09');
        match.confirmDay('2021-06-16');
        var weekdays = [{day:"Sunday", class:""},{day:"Monday", class:""},{day:"Tuesday", class:""},{day:"Wednesday", class:"green"},{day:"Thursday", class:""},{day:"Friday", class:""},{day:"Saturday", class:""}]
        assert.equal("Wednesday", match.getDayString().firstday)
        assert.equal("Wednesday", match.getDayString().secondDay)
        assert.deepEqual(weekdays, match.compareDays());
    })

    it("Should return all the days, with different colors since they don't match", function () {
        let match = Matching();
        match.checkDay('20201-06-17')
        match.confirmDay('20209-06-17')
        var weekdays = [{day:"Sunday", class:""},{day:"Monday", class:""},{day:"Tuesday", class:""},{day:"Wednesday", class:"red"},{day:"Thursday", class:""},{day:"Friday", class:""},{day:"Saturday", class:"blue"}]
        assert.equal("Wednesday", match.getDayString().firstday)
        assert.equal("Saturday", match.getDayString().secondDay)
        assert.deepEqual(weekdays, match.compareDays())
    })
})
