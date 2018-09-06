describe("Task001 test", function () {

    let sut;

    beforeEach(function () {
        sut = new Task001();
    });

    it('should get sum all elements', function () {

        let sum = sut.doOperation([1, 1, 1, 1, 1, 1]);

        expect(sum).toBe(6, "There must be sum of all elements");

        let sum2 = sut.doOperation([2, 2, 1, 1, 1, 1, 1, 1, 1, 10]);


        expect(sum2).toBe(21, "There must be sum of all elements");
    });

    it('should get subtraction all elements', function () {

        let sub = sut.doOperation([5, 1, 2]);

        let sub2 = sut.doOperation([10, 0, 3, 2]);

        let sub3 = sut.doOperation([5, 4, 3, 2, 1]);

        expect(sub).toBe(2, "There must be subtraction between elements ");

        expect(sub2).toBe(5, "There must be subtraction between elements ");

        expect(sub3).toBe(-5, "There must be subtraction between elements ");
    });

    it('should get division of 2 elements', function () {

        let expected = [5, 5, 3];

        let given = [[5, 1], [10, 2], [9, 3]];

        for (let i = 0; i < expected.length; i++){
            let res = sut.doOperation(given[i]);
            expect(res).toBe(expected[i], "There must be division")
        }
        let lastElement2 = sut.exGetLastElement([3, 5, "bingo"]);

        expect(lastElement2).toEqual("bingo", "last element in array is \"bingo\"");
    });

    it('should get \"EMPTY ARRAY\"', function () {

        let result = sut.doOperation([]);

        expect(result).toEqual("EMPTY ARRAY", " empty array must return \"EMPTY ARRAY\"");
    });

});