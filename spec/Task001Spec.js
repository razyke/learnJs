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

        let sub2 = sut.doOperation([1, 0, 3, 2]);

        let sub3 = sut.doOperation([5, 4, 3, 2, 1]);

        expect(sub).toBe(-8, "There must be subtraction between elements ");

        expect(sub2).toBe(-6, "There must be subtraction between elements ");

        expect(sub3).toBe(-15, "There must be subtraction between elements ");
    });

    it('should get division of 2 elements', function () {

        let expected = [5, 5, 3];

        let given = [[5, 1], [10, 2], [9, 3]];

        for (let i = 0; i < expected.length; i++){
            let res = sut.doOperation(given[i]);
            expect(res).toBe(expected[i], "There must be division")
        }

    });

    it('should get number in cube', function () {

        let result = sut.doOperation([2]);

        expect(result).toBe(8, "There must be number in cube");

        let result2 = sut.doOperation([3]);

        expect(result2).toBe(27, "There must be number in cube");

    });

    it('should get \"EMPTY ARRAY\"', function () {

        let result = sut.doOperation([]);

        expect(result).toEqual("EMPTY ARRAY", " empty array must return \"EMPTY ARRAY\"");
    });

});