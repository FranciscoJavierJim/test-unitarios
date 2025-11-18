const sum = require('../utils/suma');

test("sumar 1 mas 2", () => {

        expect(sum(1,2)).toBe(3);

}) 

test("sumar -1 mas -2", () => {

    expect(sum(-1,-2)).toBe(-3);

})

test("sumar 2 mas -2", () => {

    expect(sum(2,-2)).toBe(0);

})

test("sumar -2 mas 5", () => {

    expect(sum(-2,5)).toBe(3);

})