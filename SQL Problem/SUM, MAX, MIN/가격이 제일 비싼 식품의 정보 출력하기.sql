-- https://school.programmers.co.kr/learn/courses/30/lessons/131115

SELECT *
FROM FOOD_PRODUCT
WHERE PRICE = (
    SELECT MAX(PRICE)
    FROM FOOD_PRODUCT
)