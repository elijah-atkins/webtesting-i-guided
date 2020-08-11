const { add, staticString } = require('./calculator.js');


// AAA
// A = Arrange
// A = Act
// A = Assert

describe('calculator functions', () => {

    describe('addition tests', () => {


        test('that it adds 2 numbers', () => {
            let expected = 4;
            let actual = add(2, 2);
            expect(actual).toBe(expected);

            expected = 5;
            actual = add(2, 3);
            expect(actual).toBe(expected);

            expected = -2;
            actual = add(-5, 3);
            expect(actual).toBe(expected);
        });
        test.todo('that it adds floats');
        test.todo('that it adds long numbers');
        test.todo('that it adds negative numbers');

        test('that it adds arrays of numbers', () => {
            expect(add([1, 2, 3])).toBe(6);
            expect(add([1, 2, 3, 5])).toBe(11);
        });

        test('that it adds >2 arguments', () => {
            expect(add(1, 3, 5)).toBe(9);
            expect(add(1, 2, 3, 5)).toBe(11);
        });

        test('that it returns 0 with no arguments', () => {
            expect(add()).toBe(0);
        });

        test('that it returns the argument if there is only one', () => {
            expect(add(1)).toBe(1);
        });

    })
})

