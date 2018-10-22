describe("Task009 tests", function () {

    let sut;

    beforeEach(function () {
        sut = new Task009();
    });

    it('should return salary', function () {

        let expected = [12000, 20000, 53000, 84700];

        let given = [
            [10000, 20],
            [20000, 60],
            [42400, 25],
            [77000, 10],
        ];

        for(let i = 0; i < expected.length; i++) {
            let res = sut.calculateIncreaseSalary(given[i][0], given[i][1]);
            expect(res).toEqual(expected[i]);
        }

    });

});

