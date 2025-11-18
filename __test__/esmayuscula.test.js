const isUpperCase = require('../utils/esmayuscula');

test('devuelve true cuando la cadena está en mayúsculas', () => {
    expect(isUpperCase("HOLA")).toBe(true);
})

test('devuelve false cuando la cadena está en mayúsculas', () => {
    expect(isUpperCase("hola")).toBe(false);
})