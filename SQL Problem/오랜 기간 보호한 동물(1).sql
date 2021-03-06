-- https://programmers.co.kr/learn/courses/30/lessons/59044

SELECT ANIMAL_INS.NAME, ANIMAL_INS.DATETIME
FROM ANIMAL_INS
LEFT JOIN ANIMAL_OUTS
ON ANIMAL_INS.ANIMAL_ID = ANIMAL_OUTS.ANIMAL_ID
WHERE ANIMAL_OUTS.NAME IS NULL AND ANIMAL_INS.NAME IS NOT NULL
ORDER BY ANIMAL_INS.DATETIME LIMIT 3