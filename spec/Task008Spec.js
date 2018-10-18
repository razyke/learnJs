describe("Task008 tests", function () {

    let sut;

    beforeEach(function () {
        sut = new Task008();
    });

    it('should convert Degree Celsius to Kelvin/Fahrenheit', function () {

        let expected = [63.5, 298.15, 7.7, 228.85, -23.44];

        let given = [
            [17.5, "Fahrenheit"],
            [25, "Kelvin"],
            [7.7, "qwdfrjqw"],
            [-44.3, "Kelvin"],
            [-30.8, "Fahrenheit"]
        ];

        for(let i = 0; i < expected.length; i++) {
            let res = sut.convertTo(given[i][0], given[i][1]);
            expect(res).toEqual(expected[i]);
        }

    });

});

