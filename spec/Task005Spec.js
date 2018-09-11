describe("Task005 tests", function () {

    let sut;

    beforeEach(function () {
        sut = new Task005();
    });

    it('should get sentence in upper case', function () {

        let expected = ["Hi Tom, How Are You?", "Hey Hey Dance Ok", "Be Was Been"];

        let given = ["hi tom, how are you?", "hey hey dance ok", "be was been"];

        for(let i = 0; i < expected.length; i++) {
            expect(sut.transformSentence(given[i])).toEqual(expected[i]);
        }

    });

});

