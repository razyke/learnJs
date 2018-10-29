describe("Task011 tests", function () {

    let sut;

    beforeEach(function () {
        sut = new Task011();
    });

    it('should return rome number', function () {

        let expected = ["IV", "XXXVII", "LXXXIII", "LII", "XLVIII", "XCIX", "XII", "XXIX", "IX"];

        let given = [4, 37, 83, 52, 48, 99, 12, 29, 9];

        for(let i = 0; i < expected.length; i++) {
            let res = sut.convertToRomeNumber(given[i]);
            expect(res).toEqual(expected[i]);
        }

    });

});

