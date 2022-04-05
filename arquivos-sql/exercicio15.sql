SELECT COUNT(*) DATE FROM payment WHERE payment_date LIKE '2005-07-31%';
SELECT COUNT(*) DATE FROM payment WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';
SELECT rental_date FROM rental WHERE rental_id = 10330;
SELECT * FROM payment WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;