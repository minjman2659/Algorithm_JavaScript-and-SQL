// https://programmers.co.kr/learn/courses/30/lessons/59046

SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE FROM ANIMAL_INS
WHERE ANIMAL_INS.NAME IN ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty')
ORDER BY ANIMAL_INS.ANIMAL_ID