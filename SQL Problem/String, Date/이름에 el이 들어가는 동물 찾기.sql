-- https://programmers.co.kr/learn/courses/30/lessons/59047#qna

SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE ANIMAL_TYPE = 'Dog'
AND UPPER(NAME) LIKE UPPER('%el%')
ORDER BY NAME