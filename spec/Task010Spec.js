describe("Task010 tests", function () {

    let sut;

    beforeEach(function () {
        sut = new Task010();
    });

    it('should return sorted names array', function () {

        let expected = [
            ["Abram", "Bill", "Louis", "Ray"],
            ["Avery", "Jack", "Logan", "Sofia", "William"],
            ["Elizabeth", "Henry", "Olivia"]
        ];

        let given = [
            ["Louis", "Abram", "Ray", "Bill"],
            ["Jack", "William", "Logan", "Avery", "Sofia"],
            ["Henry", "Olivia", "Elizabeth"]
        ];

        for(let i = 0; i < expected.length; i++) {
            let res = sut.sortByNames(given[i]);
            expect(res).toEqual(expected[i]);
        }

    });

});

