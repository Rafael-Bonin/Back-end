SELECT * FROM film
WHERE rating = 'NC-17'
AND rental_rate < 1
ORDER BY title
LIMIT 50;