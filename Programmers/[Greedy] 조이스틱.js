// https://programmers.co.kr/learn/courses/30/lessons/42860

function solution(name) {
    // 커서 따로 알파벳 따로 카운트를 구해서 둘이 합친다.
    
    // 알파벳: parseInt(digit.length/2) 다음 인덱스 알파벳은 처음 A에서 아래쪽으로 움직여 바꾸는 것이 더 효율적
    let digit = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';   // 26개 -> 짝수니까 절반으로 나누면 13
    digit = digit.split('');
    
    // 알파벳 카운트
    let alphaCount = 0;
    for(let i=0; i<name.length; i++) {
        if(digit.indexOf(name[i]) > 13) {
            let tmp = digit.slice(14).reverse();
            alphaCount = alphaCount + (tmp.indexOf(name[i]) + 1);
        } else {
            alphaCount = alphaCount + digit.indexOf(name[i]);
        }
    }
    
    // 커서 카운트
    // 커서 카운트의 최솟값을 결정하는 엣지 케이스는 A가 중간에서 연속되는 경우 뿐.
    // 1) 만약 중간에서 A가 연속될 경우(처음과 끝 제외), 현재 위치(A를 만나기 전)에서 왼쪽으로 돌아가,
       // 연속 A가 끝나는 인덱스까지 돌았을 때의 이동거리와 기존 커서 카운트 중 최솟값이 커서 카운트가 된다.
       // ex) name = 'BBAAAAB'일 경우
    // 2) 만약 A가 중간에서 시작해 끝까지 연속될 경우, 처음 A를 만나는 시점까지만 카운트를 구하면 된다.
       // ex) name = 'BBAAAA'일 경우
    // (그 외에는 어차피 전부 돌아야 하기 때문에 그냥 name.length-1을 더하면 된다)
    let cursorCount = name.length-1;
    let edge = 100;  // 2)에 해당되는 케이스를 구하기 위한 변수로, 넉넉하게 큰 값을 부여한다.
    for(let j=0; j<name.length; j++) {
        if(name[j+1] === 'A') {
            let continuity = j+1;
            while(name[continuity+1] === 'A') {
                continuity++;
            }
            if(continuity === name.length-1) {
                edge = name.slice(0, j+1).length-1;
            }
            cursorCount = Math.min(cursorCount, j+j+name.length-1-continuity, edge);
        }
    }
    
    return alphaCount + cursorCount;
}