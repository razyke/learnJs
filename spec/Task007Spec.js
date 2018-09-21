describe("Task007 tests", function () {

    let sut;

    beforeEach(function () {
        sut = new Task007();
    });

    it('should get reverse word', function () {

        let expected = ["olleH","dneirF", "!dlroW"];

        let given = ["Hello", "Friend", "World!"];

        for(let i = 0; i < expected.length; i++) {
            let res = sut.reverseWord(given[i]);
            expect(res).toEqual(expected[i]);
        }

    });

});

