describe('checkDay', function () {
    it('Should return the message "Not a supported format type"', function () {
        let matchDay = Matching([])
        var theDay1 = "Monday";
        var theDay2 = "Tuesday";
        var theDay3 = "Wednesday";
        var theDay4 = "Thursday";
        var theDay5 = "Friday";
        var theDay6 = "Saturday";
        var theDay7 = "Sunday";

        matchDay.checkDay(theDay1)
        matchDay.checkDay(theDay2)
        matchDay.checkDay(theDay3)
        matchDay.checkDay(theDay4)
        matchDay.checkDay(theDay5)
        matchDay.checkDay(theDay6)
        matchDay.checkDay(theDay7)

        assert.deepEqual(["Monday", theDay2, theDay3, theDay4, theDay5, theDay6, theDay7], matchDay.getWeekDays());
        // assert.deepEqual('7',);
        // matchDay.setRegi(carReg)
        assert.deepEqual("Not a supported format type", matchDay.getWeekDays(theDay7))
    })
    it('Should return the message "Not a supported format type"', function () {
        let matchDay = Matching([])
        var carReg = "EC 154-89"

        matchDay.setRegi(carReg)

        assert.equal("Format doesn't match the required!", matchDay.getMessage(carReg))
    })
    it('Should return the message "Car registration successfully added"', function () {
        let matchDay = Matching([])
        var carReg = "CA 154-859"

        matchDay.setRegi(carReg)

        assert.equal("Car registration added successfully!", matchDay.getMessage(carReg))
    })
    it('Should return the message "Car registration number already added"', function () {
        let matchDay = Matching([])
        var carReg = "CA 154-859"

        matchDay.setRegi(carReg)
        matchDay.setRegi(carReg)

        assert.equal("Car registration number already entered!", matchDay.getMessage(carReg))
    })
})
describe('setRegi', function () {
    it('Should return the list of registration numbers entered', function () {
        let matchDay = Matching([])
        var carReg = "CA 123-456"
        var carReg1 = "CX 456-258"
        var carReg2 = "CY 587 756"
        var carReg3 = "CW 456-875"
        var carReg4 = "CA 965-256"
        var carReg5 = "CY 789-586"
        var carReg6 = "CX 987-256"

        matchDay.setRegi(carReg)
        matchDay.setRegi(carReg1)
        matchDay.setRegi(carReg2)
        matchDay.setRegi(carReg3)
        matchDay.setRegi(carReg4)
        matchDay.setRegi(carReg5)
        matchDay.setRegi(carReg6)

        assert.deepEqual([carReg, carReg1, carReg2, carReg3, carReg4, carReg5, carReg6], matchDay.getRegi())
        assert.deepEqual(7, matchDay.getRegi().length)
    })
    it('Should return the list of registration numbers entered', function () {
        let matchDay = Matching([])
        var carReg = "CA 123-456"
        var carReg1 = "CX 456-258"
        var carReg2 = "CY 587 756"
        var carReg3 = "CW 456-875"
        var carReg4 = "CA 965-256"
        var carReg5 = "CY 789-586"
        var carReg6 = "CX 987-256"
        var carReg7 = "CW 965-255"
        var carReg8 = "CY 789-546"
        var carReg9 = "CY 987-656"

        matchDay.setRegi(carReg)
        matchDay.setRegi(carReg1)
        matchDay.setRegi(carReg2)
        matchDay.setRegi(carReg3)
        matchDay.setRegi(carReg4)
        matchDay.setRegi(carReg5)
        matchDay.setRegi(carReg6)
        matchDay.setRegi(carReg7)
        matchDay.setRegi(carReg8)
        matchDay.setRegi(carReg9)

        assert.deepEqual([carReg, carReg1, carReg2, carReg3, carReg4, carReg5, carReg6, carReg7, carReg8, carReg9], matchDay.getRegi())
        assert.deepEqual(10, matchDay.getRegi().length)
    })
    it('Should return the first two characters of a registration number in UPPERCASE', function () {
        let matchDay = Matching([])
        var carReg = "cy 254635"
        var carReg = "cy 254635"

        matchDay.setRegi(carReg)

        assert.equal('CY 254635', matchDay.getRegi(carReg))
    })
    it('Should return the first two characters of a registration number in UPPERCASE', function () {
        let matchDay = Matching([])
        var carReg = "cx 539-874"
        var carReg = "cx 539-874"

        matchDay.setRegi(carReg)

        assert.equal('CX 539-874', matchDay.getRegi(carReg))
    })
})
