SELECT first_name, last_name, email FROM customer WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy') ORDER BY first_Name, last_name;
SELECT email FROM customer WHERE address_id IN (172, 173, 174, 175, 176) ORDER BY email;
SELECT COUNT(*) AS quantidade FROM payment WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';
SELECT title, release_year, length, rental_duration FROM film WHERE rental_duration BETWEEN 3 AND 6 ORDER BY rental_duration DESC, title;
SELECT title, rating FROM film WHERE rating IN ('G', 'PG', 'PG-13') ORDER BY title LIMIT 500;