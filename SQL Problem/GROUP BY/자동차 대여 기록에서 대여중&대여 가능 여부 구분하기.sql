-- https://school.programmers.co.kr/learn/courses/30/lessons/157340#qna

SELECT CAR_ID,
       IF(SUM(IF(START_DATE <= '2022-10-16' AND END_DATE >= '2022-10-16', 1, 0)) > 0, '대여중', '대여 가능')
       AVAILABILITY
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY CAR_ID
ORDER BY CAR_ID DESC