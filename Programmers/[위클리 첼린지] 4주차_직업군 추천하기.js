// https://programmers.co.kr/learn/courses/30/lessons/84325

function solution(table, languages, preference) {
    const langTable = ["SI", "CONTENTS", "HARDWARE", "PORTAL", "GAME"];
    const matrix = new Array(languages.length).fill(0).map((el) => new Array(5).fill(0));
    
    for(let i=0; i<languages.length; i++) {
        for(let j=0; j<table.length; j++) {
            let spl = table[j].split(" ").slice(1).reverse();
            if(spl.includes(languages[i])) {
                spl.unshift('');
                matrix[i][j] = spl.indexOf(languages[i]) * preference[i];
            }
        }
    }
    
    const sum = new Array(5).fill(0);
    for(let i=0; i<matrix[0].length; i++) {
        for(let j=0; j<matrix.length; j++) {
            sum[i] = sum[i] + matrix[j][i];
        }
    }
    
    const most = Math.max(...sum);
    const result = [];
    for(let last = 0; last<sum.length; last++) {
        if(sum[last] === most) result.push(langTable[last]);
    }
    return result.length > 1 ? result.sort()[0] : result[0];
}