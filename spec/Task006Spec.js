describe("Task006 tests", function () {

    let sut;

    beforeEach(function () {
        sut = new Task006();
    });

    it('should get count of \"hi\"', function () {

        let expected = [3, 0, 1, 1];

        let given = ["hi HI Hi hI hehi hi mihi hi", "hihihi", "12hi hi _hi", "behi HI hi 3"];

        for(let i = 0; i < expected.length; i++) {
            let res = sut.getHiWordsCount(given[i]);
            expect(res).toEqual(expected[i]);
        }

    });

});

