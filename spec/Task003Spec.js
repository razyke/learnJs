describe("Task003 tests", function () {

    let sut;

    beforeEach(function () {
        sut = new Task003();
    });

    it('should get array with sorted even/odd numbers', function () {

        let given = [[4, 2, 7, 3, 5, 8],
                    [6, 2, 4, 10, 12],
                    [3, 7, 5, 13, 17, 33]];

        for(let i = 0; i < given.length; i++) {
            let result = sut.splitOnEvenOdd(given[i]);

            for(let j = 0; j < result[0].length; j++) {
                expect(result[0][j] % 2).toBe(0, "Numbers must be even in first array");
            };

            for(let k = 0; k < result[1].length; k++) {
                expect(result[1][k] % 2).not.toBe(0, "Numbers must be odd in second array");

            };

            if(i == 1) {
                expect(result[1]).toEqual([]);
            } else if (i == 2) {
                expect(result[0]).toEqual([]);
            };
        };

    });

    it('should get magic number', function () {

        let expected = [119, 34, 765765];

        let given = [
                    [[4, 2, 8], [7, 3, 5]],
                    [[6, 2, 4, 10, 12], []],
                    [[], [3, 7, 5, 13, 17, 33]]
                    ];

        for(let i = 0; i < expected.length; i++) {

            let result = sut.getMagicNumber(given[i][0], given[i][1]);

            expect(result).toBe(expected[i]);
        };
    });
});

