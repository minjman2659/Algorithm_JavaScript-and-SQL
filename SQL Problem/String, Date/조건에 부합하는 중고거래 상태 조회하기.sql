-- https://school.programmers.co.kr/learn/courses/30/lessons/164672

SELECT BOARD_ID, WRITER_ID, TITLE, PRICE,
       CASE WHEN STATUS = 'SALE' THEN '판매중'
            WHEN STATUS = 'RESERVED' THEN '예약중'
            ELSE '거래완료'
       END AS STATUS
FROM USED_GOODS_BOARD
WHERE DATE(CREATED_DATE) = '2022-10-05'
ORDER BY BOARD_ID DESC