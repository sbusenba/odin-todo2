
const toDoList = () => {
    const list = new Array(0);
    const hit = (xPos, yPos) => {
      let gotHit = false;
      parts.forEach((part) => {
        if ((part.x === xPos) && (part.y === yPos)) {
          part.hit = true;
          gotHit = true;
        }
      });
      return gotHit;
    };
  
    return {
      x, y, facing, length, parts, hit, isSunk,
    };
  };
  
  module.exports = toDoList;