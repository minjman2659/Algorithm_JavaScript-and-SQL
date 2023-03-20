-- https://programmers.co.kr/learn/courses/30/lessons/59408#qna

SELECT COUNT(DISTINCT NAME) AS 'count'
FROM ANIMAL_INS
WHERE NAME IS NOT NULL