-- https://school.programmers.co.kr/learn/courses/30/lessons/133025

SELECT f.FLAVOR
FROM FIRST_HALF f
INNER JOIN ICECREAM_INFO i
ON f.FLAVOR = i.FLAVOR
WHERE f.TOTAL_ORDER > 3000 AND i.INGREDIENT_TYPE = 'fruit_based'