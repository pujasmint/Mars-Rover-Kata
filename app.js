// Rover Object Goes Here
var firstRover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
  }
  
  var secondRover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
  }
  // ======================
  
  // ======================
  
  const grid = [ 
  [ , , , , , null, , , , ],
  [ , , , , , , , , , ],
  [ , , , , , , , , null, ],
  [ ,null , , , , null, , , , ],
  [ , , , null , , , , , , ],
  [ , , , , , , , , , ],
  [null , , , , , , , , , ],
  [ , , , , , null, , , , ],
  [ , , , , , , , , , null ],
  [ , , , , null, , , , , ],
  ];
  
  function turnLeft(rov){
      switch(rov.direction) {
      case "N":
        rov.direction = "W";
        break;
      case "W":
        rov.direction = "S";
        break;
      case "S":
        rov.direction = "E";
        break;
      case "E":
        rov.direction = "N";
        break;
        }
  }
  
  function turnRight(rov){
     switch(rov.direction) {
      case "N":
        rov.direction = "E";
        break;
      case "W":
        rov.direction = "N";
        break;
      case "S":
        rov.direction = "W";
        break;
      case "E":
        rov.direction = "S";
        break;
        }
  }
  
  function moveForward(rov){
    let newYpos;
    let newXpos;
    switch(rov.direction) {
      case "N":
        newYpos = rov.y - 1;
        if (newYpos >= 0){
          if(grid[rov.x][newYpos] !== null) {
              rov.y = newYpos;
          } else {
              console.log('Obstacle found');
          }
        } else {
            console.log('Cannot move out of grid');
        }
        break;
      case "W":
        newXpos = rov.x - 1;
        if (newXpos >= 0){
          if(grid[newXpos][rov.y] !== null) {
            rov.x = newXpos;
          } else {
             console.log('Obstacle found');
          }
        } else  {
          console.log('Cannot move out of grid');
        }
        break;
      case "S":
        newYpos = rov.y + 1;
        if (newYpos < 10){
          if(grid[rov.x][newYpos] !== null) {
            rov.y = newYpos;
          } else {
              console.log('Obstacle found');} 
          } else {
          console.log('Cannot move out of grid');
        }
        break;
      case "E":
        newXpos = rov.x + 1;
        if (newXpos < 10){
          if(grid[newXpos][rov.y] !== null){
            rov.x = newXpos;
          } else {
            console.log('Obstacle found');}
          } else {
          console.log('Cannot move out of grid');
        }
        break;
    }
    rov.travelLog.push(`(${rov.x},${rov.y})`);
  }
  
  function backForward(rov){
    let newYpos;
    let newXpos;
    switch(rov.direction) {
      case "N":
        newYpos = rov.y + 1;
        if (newYpos < 10){
          if(grid[rov.x][newYpos] !== null) {
          rov.y = newYpos;
          } else {
            console.log('Obstacle found');
          }
        } else {
          console.log('Cannot move out of grid');
        }
        break;
      case "W":
        newXpos = rov.x + 1;
        if (newXpos < 10){
          if(grid[newXpos][rov.y] !== null) {
          rov.x = newXpos;
          } else { console.log('Obstacle found');
          } 
        } else { 
          console.log('Cannot move out of grid');
        }
        break;
      case "S":
        newYpos = rov.y - 1;
        if (newYpos >= 0){
          if(grid[rov.x][newYpos] !== null){
          rov.y = newYpos;
          } else { console.log('Obstacle found');
          }
        } else {
          console.log('Cannot move out of grid');
        }
        break;
      case "E":
        newXpos = rov.x - 1;
        if (newXpos >= 0){
          if(grid[newXpos][rov.y] !== null)
          rov.x = newXpos;
          else {
          console.log('Obstacle found');
        }
        } else {
          console.log('Cannot move out of grid');
        }
        break;
    }
    rov.travelLog.push(`(${rov.x},${rov.y})`);
  }
  
  function executeCommand(commands, rov){
    for (let i = 0 ; i < commands.split('').length; i++ ){
      switch(commands[i]) {
        case "f":
          moveForward(rov);
        break;
        case "r":
          turnRight(rov);
        break;
        case "l":
          turnLeft(rov);
        break;
        case "b":
         backForward(rov);
        break;
        default :
        console.log('Invalid Input', commands[i])
      }
    }
  }
  
  
  executeCommand("bbrffflfbbrff", firstRover);
  console.log(firstRover.travelLog);  