import { Mars } from './Mars';

test('renders learn react link', () => {

  const initialCommands = [
    '5 5',
    '1 2 N',
    'LMLMLMLMM',
    '3 3 E',
    'MMRMMRMRRM'
  ];

  const rovers = Mars(initialCommands);
  
  // rover 1 
  expect(rovers[0].position.coordinateX).toBe(1);
  expect(rovers[0].position.coordinateY).toBe(3);
  expect(rovers[0].position.direction).toBe('N');

  // rover 2
  expect(rovers[1].position.coordinateX).toBe(5);
  expect(rovers[1].position.coordinateY).toBe(1);
  expect(rovers[1].position.direction).toBe('E');

});
