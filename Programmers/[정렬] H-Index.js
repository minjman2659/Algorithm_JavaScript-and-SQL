// https://programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
    // h지수가 무엇인지에 대한 설명 : https://www.ibric.org/myboard/read.php?Board=news&id=270333
    // "피인용수가 자신이 저널에 등재한 전체 논문 중 많이 인용된 순으로 정렬한 후,
    // 피인용수가 논문수와 같아지거나 피인용수가 논문수보다 작아지기 시작하는 숫자(논문 수)가 바로 나의 h가 됩니다."
    
    let clone = citations.slice();
    clone.sort((a,b) => b - a);
    
    let count = 0;
    while(count < clone[count]) {
        count++;
    }
    
    return count;
}