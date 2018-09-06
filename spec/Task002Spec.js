describe("Task002 tests", function () {

    let sut;

    beforeEach(function () {
        sut = new Task002();
    });

    it('should say can we create Alisa word or not', function () {

        let expected = [true, false, true, false, false];

        let given = [
                      ['A','l','i','s','a'],
                      ['o', 'R', 'I', 'S', 's', 'a', 'a', 'l', 'i'],
                      ['L', 'l', 's', 'R', 'a', 'A', 'i'],
                      ['L', 'l', 's', 'R', 'A', 'A', 'i'],
                      ['q', 'r', 's', 'a', 'A', 'e', 'q', 'z']
                    ];

        for(let i = 0; i < expected.length; i++) {
            let result = sut.isAlisaCouldCreated(given[i]);
            expect(result).toBe(expected[i]);
        };

    });

});