// https://urclass.codestates.com/codeproblem/efe1080f-813e-4e80-9376-3909da16d4f8

// 먼저 부분집합 powerSet을 구한 뒤,
// items[0]들의 합이 weight 보다 작거나 같은 부분집합들을 모은 후,
// 해당 부분집합들의 items[1]의 합 중 최댓값을 리턴한다.

const knapsack = function (weight, items) {  
    // 먼저 items의 요소들 중 weight를 벗어나는 요소들은 제외시킨다.
    items = items.filter((el) => el[0] <= weight);
    if(items.length === 0) {
        return 0;
    }

    // 부분집합 모듈
    function powerSet(arr) {
        const result = [];
        const check = new Array(arr.length).fill(false);

        function resultPush(arr) {
            let tmp = [];
            for(let i=0; i<arr.length; i++) {
                if(check[i]) {
                    tmp.push(arr[i]);
                }
            }
            result.push(tmp);
        }

        function checkArr(startNum) {
            for(let i=startNum; i<arr.length; i++) {
                check[i] = true;
                resultPush(arr);
                checkArr(i+1);
                check[i] = false;
            }
        }

        checkArr(0);
        return result;
    }

    const itemValues = [];
    const itemsPowerSet = powerSet(items);
    for(let el of itemsPowerSet) {
        let weightSum = el.reduce((acc, cur) => acc + cur[0], 0);
        if(weightSum <= weight) {
            let valueSum = el.reduce((acc, cur) => acc + cur[1], 0);
            itemValues.push(valueSum);
        }
    }

    return Math.max(...itemValues);
};