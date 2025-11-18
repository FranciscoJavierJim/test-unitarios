const isUpperCase = require('../utils/esmayuscula');

describe('isUpperCase', () => {
    test.each`
      sentence                                 | expectedResult    
      ${"ROMA"}                                | ${true}
      ${"Roma"}                                | ${false}
      ${"roma"}                                | ${false}
      ${"rOMA"}                                | ${false}
      ${"LA PROXIMA SEMANA VIAJO A ROMA"}      | ${true}        
      ${"La Proxima Semana Viajo A Roma"}      | ${false}      
      ${"la proxima semana viajo a roma"}      | ${false}      
      ${" lA PROXIMA SEMANA VIAJO A ROMA"}     | ${false}      
    `('$sentence should return $expectedResult', ({sentence, expectedResult}) => {
      expect(isUpperCase(sentence)).toBe(expectedResult);
    });
  });