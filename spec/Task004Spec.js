describe("Task004 tests", function () {

    let sut;

    beforeEach(function () {
        sut = new Task004();
    });

    it('should get shifted array', function () {

        let fArray = [1,2,3,4];

        let fNumber = 2;

        let fRes = sut.leftShift(fArray, fNumber);

        expect(fRes).toEqual([3,4,1,2]);

        let sArray = [13,12,11,6,8,0,5];

        let sNumber = 12;

        let sRes = sut.leftShift(sArray, sNumber);

        expect(sRes).toEqual([0,5,13,12,11,6,8]);

        let tArray = [1,7];

        let tNumber = 55;

        let tRes = sut.leftShift(tArray, tNumber);

        expect(tRes).toEqual([7,1]);
    });

});

