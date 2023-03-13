-- https://school.programmers.co.kr/learn/courses/30/lessons/151141#qna

# 트럭 차량의 할인율은 5, 8, 15라는 것을 아래 sql문을 통해 알 수 있다.
# SELECT * FROM CAR_RENTAL_COMPANY_DISCOUNT_PLAN WHERE CAR_TYPE = '트럭'

SELECT h.HISTORY_ID, ROUND((DATEDIFF(h.END_DATE, h.START_DATE) + 1) *
       (
        CASE
            WHEN DATEDIFF(h.END_DATE, h.START_DATE) + 1 < 7 THEN 1
            WHEN DATEDIFF(h.END_DATE, h.START_DATE) + 1 < 30 THEN 0.95
            WHEN DATEDIFF(h.END_DATE, h.START_DATE) + 1 < 90 THEN 0.92
            ELSE 0.85
        END
       ) * c.DAILY_FEE, 0) AS FEE
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY h
JOIN CAR_RENTAL_COMPANY_CAR c
ON c.CAR_ID = h.CAR_ID
WHERE c.CAR_TYPE = '트럭'
ORDER BY FEE DESC, h.HISTORY_ID DESC