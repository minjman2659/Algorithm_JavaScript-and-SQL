// https://urclass.codestates.com/codeproblem/54c08b2e-4c47-47fb-a76a-c3138bde00b1

const rotateMatrix = function (matrix, k = 1) {
    // ----------------------------------------------------------- Bare Minimum
    // const result = new Array(matrix.length).fill(0).map((el) => el = new Array(matrix.length).fill(0));
  
    // for(let i=0; i<matrix.length; i++) {
    //   for(let j=0; j<matrix.length; j++) {
    //     result[i][j] = matrix[matrix.length-j-1][i];
    //   }
    // }
  
    // return result;
  
  
    // ------------------------------------------------------------ Advanced
    let num = k % 4;
    let result = [];
  
    if(matrix.length === 0) {
      return result;
    }
    
    if(num === 0) {
      result = matrix;
    }
  
    else if(num === 1) {
      result = new Array(matrix[0].length).fill(0).map((el) => el = new Array(matrix.length).fill(0));
      for(let i=0; i<matrix[0].length; i++) {
        for(let j=0; j<matrix.length; j++) {
          result[i][j] = matrix[matrix.length-j-1][i];
        }
      }
    } 
    
    else if(num === 2) {
      result = new Array(matrix.length).fill(0).map((el) => el = new Array(matrix[0].length).fill(0));
      for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[0].length; j++) {
          result[i][j] = matrix[matrix.length-i-1][matrix[0].length-j-1];
        }
      }
    }
  
    else if(num === 3) {
      result = new Array(matrix[0].length).fill(0).map((el) => el = new Array(matrix.length).fill(0));
      for(let i=0; i<matrix[0].length; i++) {
        for(let j=0; j<matrix.length; j++) {
          result[i][j] = matrix[j][matrix[0].length-i-1];
        }
      }
    }
  
    return result;
  };
  