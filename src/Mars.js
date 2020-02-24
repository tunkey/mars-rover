import {roverTurn, roverMove} from './util/RoverUtil';
import Position from './model/Position';

const Mars = (commands) => {
    const [maxX, maxY] = commands[0].split(' ');
    const rest = commands.slice(1);
    
    const rovers = [];
    const compass = ['W', 'N', 'E', 'S'];
  
    for (let i = 0; i < rest.length; i += 2) {
  
      const [coordinateX, coordinateY, direction] = rest[i].split(' ');
      const instructions = rest[i + 1] || '';
  
      rovers.push({
        position: new Position(coordinateX, coordinateY, direction),
        instructions: instructions
      })
       
    }

    for (const { position, instructions } of rovers) {
      for (const instruction of instructions) {
        if (instruction === 'M') 
          roverMove(position, maxX, maxY)
        else 
          roverTurn(compass, position, instruction)
      }
    }
  
    return rovers;

}

const outputRovers = (rovers) => {
    return rovers.map(r => `${r.position.coordinateX} ${r.position.coordinateY} ${r.position.direction}`);
}

export { Mars, outputRovers}