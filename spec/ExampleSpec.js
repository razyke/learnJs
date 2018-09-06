describe("Example test", function () {

    let sut;

    beforeEach(function () {
        sut = new Example();
    });

    it('should get summarize of 2 numbers', function () {

        let sum = sut.exSum(2, 2);

        expect(sum).toBe(4, "2 + 2 equals 4");

        let sum2 = sut.exSum(6, 4);

        expect(sum2).toBe(10, "6 + 4 equals 10");
    });

    it('should get subtraction of 2 numbers', function () {

        let sub = sut.exSub(2, 2);

        expect(sub).toBe(0, "2 - 2 equals 0");

        let sub2 = sut.exSub(6, 5);

        expect(sub2).toBe(1, "6 - 5 equals 1");
    });

    it('should get last element in array', function () {

        let lastElement = sut.exGetLastElement([1, 2, 3]);

        expect(lastElement).toBe(3, "last index in array is 3");

        let lastElement2 = sut.exGetLastElement([3, 5, "bingo"]);

        expect(lastElement2).toEqual("bingo", "last element in array is \"bingo\"");
    });

});