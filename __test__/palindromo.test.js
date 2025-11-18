const palindromo = require('../utils/palindromo');

test('escribo amor devuelve roma', () => {
    expect(palindromo("amor")).toBe("roma");
})

test('escribo HOLA devuelve ALOH', () => {
    expect(palindromo("HOLA")).toBe("ALOH");
})