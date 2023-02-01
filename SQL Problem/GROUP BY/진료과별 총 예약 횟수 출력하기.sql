-- https://school.programmers.co.kr/learn/courses/30/lessons/132202#qna

SELECT MCDP_CD AS 진료과코드, COUNT(MCDP_CD) AS 5월예약건수
FROM APPOINTMENT
WHERE YEAR(APNT_YMD) = 2022 AND MONTH(APNT_YMD) = 5
GROUP BY MCDP_CD
ORDER BY 5월예약건수 ASC, 진료과코드 ASC