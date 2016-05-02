export default class PieceBlock {

  constructor(cubePositions, pieceID) {
    this.cubePositions = cubePositions; // -------------- Positions of Each Cube
    this.numCubes = cubePositions.length; // ------- Number of Cubes Composed of
    this.pieceID = pieceID;
    this.axesLength = Array(3).fill(0); // --------- How many cubes per axis (x , y , z)

    // Index 0 ~ X , Index 1 ~ Y , Index 2 ~ Z
    for (let i = 0; i < cubePositions.length; i++) {
      if (cubePositions[i][0]) {
        this.axesLength[0]++;
      }
      if (cubePositions[i][1]) {
        this.axesLength[1]++;
      }
      if (cubePositions[i][2]) {
        this.axesLength[2]++;
      }
    }
  }

  getUniqueIsometries() {
    let possibleIsos = [];

    if (this.numCubes == 1) {
      return this.cubePositions;
    }

    if (this.axesLength[0]) {
      if (this.axesLength[1]) {
        if (this.axesLength[2]) { // ----------------------------- [ x , y , z ]

        } else { // ---------------------------------------------- [ x , y , 0 ]

        }
      } else {
        if (this.axesLength[2]) { // ----------------------------- [ x , 0 , z ]

        } else { // ---------------------------------------------- [ x , 0 , 0 ]

        }
      }
    } else {
      if (this.axesLength[1]) {
        if (this.axesLength[2]) { // ----------------------------- [ 0 , y , z ]

        } else { // ---------------------------------------------- [ 0 , y , 0 ]

        }
      } else {
        if (this.axesLength[2]) { // ----------------------------- [ 0 , 0 , z ]

        }
      }
    }

  }

  getIsometry(isoCase) {

    let newPos = deepCopy(this.cubePositions);


    if (isoCase == 1) { // --------------------------------------- [ x , y , z ]
      return newPos;

    } else if (isoCase == 2) { // -------------------------------- [ y , x , z ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][1]] = [newPos[i][1], newPos[i][0]];
      }

    } else if (isoCase == 3) { // -------------------------------- [ z , x , y ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][1], newPos[i][2]] = [newPos[i][2], newPos[i][0], newPos[i][1]];
      }

    } else if (isoCase == 4) { // ------------------------------- [ -y , x , z ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][1]] = [-newPos[i][1], newPos[i][0]];
      }




    } else if (isoCase == 5) { // ------------------------------- [ -z , y , x ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][2]] = [-newPos[i][2], newPos[i][0]];
      }

    } else if (isoCase == 6) { // ------------------------------- [ -x , z , y ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][1], newPos[i][2]] = [-newPos[i][0], newPos[i][2], newPos[i][1]];
      }

    } else if (isoCase == 7) { // ------------------------------ [ -x , -y , z ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][1]] = [-newPos[i][0], -newPos[i][1]];
      }

    } else if (isoCase == 8) { // ------------------------------ [ -y , -z , x ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][1], newPos[i][2]] = [-newPos[i][1], -newPos[i][2], newPos[i][0]];
      }




    } else if (isoCase == 9) { // ------------------------------ [ -z , -x , y ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][1], newPos[i][2]] = [-newPos[i][2], -newPos[i][0], newPos[i][1]];
      }

    } else if (isoCase == 10) { // ------------------------------ [ y , -x , z ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][1]] = [newPos[i][1], -newPos[i][0]];
      }

    } else if (isoCase == 11) { // ------------------------------ [ z , -y , x ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][1], newPos[i][2]] = [newPos[i][2], -newPos[i][1], newPos[i][0]];
      }

    } else if (isoCase == 12) { // ----------------------------- [ x , -z , y ]
      for (let i in newPos) {
        [newPos[i][1], newPos[i][2]] = [-newPos[i][2], newPos[i][1]];
      }




    } else if (isoCase == 13) { // ------------------------------ [ x , z , -y ]
      for (let i in newPos) {
        [newPos[i][1], newPos[i][2]] = [newPos[i][2], -newPos[i][1]];
      }

    } else if (isoCase == 14) { // ------------------------------ [ y , x , -z ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][1], newPos[i][2]] = [newPos[i][1], newPos[i][0], -newPos[i][2]];
      }

    } else if (isoCase == 15) { // ------------------------------ [ z , y , -x ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][1], newPos[i][2]] = [newPos[i][2], -newPos[i][1], -newPos[i][0]];
      }

    } else if (isoCase == 16) { // ----------------------------- [ -z , x , -y ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][1], newPos[i][2]] = [-newPos[i][2], newPos[i][0], -newPos[i][1]];
      }




    } else if (isoCase == 17) { // ----------------------------- [ -x , y , -z ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][2]] = [-newPos[i][0], -newPos[i][2]];
      }

    } else if (isoCase == 18) { // ----------------------------- [ -y , z , -x ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][1], newPos[i][2]] = [-newPos[i][1], newPos[i][2], -newPos[i][0]];
      }

    } else if (isoCase == 19) { // ---------------------------- [ -x , -z , -y ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][1], newPos[i][2]] = [-newPos[i][0], -newPos[i][2], -newPos[i][1]];
      }

    } else if (isoCase == 20) { // --------------------------- [ -z , -x , -y  ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][1], newPos[i][2]] = [-newPos[i][2], -newPos[i][0], -newPos[i][1]];
      }




    } else if (isoCase == 21) { // ---------------------------- [ -y , -x , -z ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][1], newPos[i][2]] = [-newPos[i][1], -newPos[i][0], -newPos[i][2]];
      }

    } else if (isoCase == 22) { // ----------------------------- [ z , -x , -y ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][1], newPos[i][2]] = [newPos[i][2], -newPos[i][0], -newPos[i][1]];
      }

    } else if (isoCase == 23) { // ----------------------------- [ y , -z , -x ]
      for (let i in newPos) {
        [newPos[i][0], newPos[i][1], newPos[i][2]] = [newPos[i][1], -newPos[i][2], -newPos[i][0]];
      }

    } else if (isoCase == 24) { // ----------------------------- [ x , -y , -z ]
      for (let i in newPos) {
        [newPos[i][1], newPos[i][2]] = [-newPos[i][1], -newPos[i][2]];
      }

    } else {
      throw new Error('Not a valid Isometry choice value.');
    }
    return newPos; // add isonumber if needed
  }
}

let deepCopy = function(arr) {
  return JSON.parse(JSON.stringify(arr));
};
