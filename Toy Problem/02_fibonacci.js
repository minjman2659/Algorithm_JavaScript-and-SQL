// https://urclass.codestates.com/codeproblem/089a3ba2-c65e-44a8-b832-03335c21fef9

function fibonacci(n) {

    // if(n < 2) {
    //   return n;
    // }
  
    // return fibonacci(n-2) + fibonacci(n-1);
  
    let memo = [0, 1];
  
    const memoization = (num) => {
      if(memo[num] !== undefined) {
        return memo[num];
      } else {
        memo[num] = memoization(num-2) + memoization(num-1);
        return memo[num];
      }
    }
  
    return memoization(n);
  }
  