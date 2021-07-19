// https://urclass.codestates.com/codeproblem/a642de1d-c2b0-4ea7-b205-58a8224c0a74

const spiralTraversal = function (matrix) {
    let result = '';
    const check = new Array(matrix.length).fill(0).map((el) => el = new Array(matrix[0].length).fill(0));
  
    let i = 0;
    let j = matrix[0].length-1;
    let h = matrix.length-1;
    let k = 0;
    while(i<matrix[0].length && j>=0 && h>=0 && k<matrix.length) {
      repeatFirstRow(i);
      i++;
      repeatLastCor(j);
      j--;
      repeatLastRow(h);
      h--;
      repeatFirstCor(k);
      k++;
    }
    
    return result;
  
    function repeatFirstRow(num) {
      for(let i=0; i<matrix[num].length; i++) {
        if(check[num][i] === 0) {
          result = result + matrix[num][i];
          check[num][i] = 1;
        }
      }
    }
  
    function repeatLastCor(num) {
      for(let j=0; j<matrix.length; j++) {
        if(check[j][num] === 0) {
          result = result + matrix[j][num];
          check[j][num] = 1;
        }
      }
    }
  
    function repeatLastRow(num) {
      for(let h=matrix[0].length-1; h>=0; h--) {
        if(check[num][h] === 0) {
          result = result + matrix[num][h];
          check[num][h] = 1;
        }
      }
    }
  
    function repeatFirstCor(num) {
      for(let k=matrix.length-1; k>=0; k--) {
        if(check[k][num] === 0) {
          result = result + matrix[k][num];
          check[k][num] = 1;
        }
      }
    }
  };
  