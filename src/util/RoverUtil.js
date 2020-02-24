const roverTurn = (compass, position, direction) => {

    const currentIndex = compass.indexOf(position.direction);

    if (direction === 'L')
        position.direction = compass[(currentIndex || compass.length) - 1];
    else 
        position.direction = compass[(currentIndex + 1) % compass.length];

}
  
const roverMove = (position, maxX, maxY) => {

    switch (position.direction) {
      case 'W':
        position.coordinateX = Math.max(position.coordinateX - 1, 0)
        break
      case 'N':
        position.coordinateY = Math.min(position.coordinateY + 1, maxY)
        break
      case 'E':
        position.coordinateX = Math.min(position.coordinateX + 1, maxX)
        break;
      case 'S':
        position.coordinateY = Math.max(position.coordinateY - 1, 0)
        break;
      default:
          break;  
    }

}

export {roverTurn, roverMove};