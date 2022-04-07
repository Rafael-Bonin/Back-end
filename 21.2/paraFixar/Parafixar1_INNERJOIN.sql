SELECT fa.actor_id,  a.first_name, fa.film_id FROM actor a INNER JOIN film_actor fa ON a.actor_id = fa.actor_id;
SELECT s.first_name, s.last_name, a.address FROM staff s INNER JOIN address a ON a.address_id = s.address_id;
SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address FROM customer c INNER JOIN address a ON c.address_id = a.address_id LIMIT 100;
SELECT c.first_name, c.email, c.address_id, a.address, a.district FROM customer c INNER JOIN address a ON c.address_id = a.address_id WHERE a.district = 'California' AND c.first_name LIKE '%rene%';
SELECT c.first_name, COUNT(a.address) AS 'quantidade de enderecos' FROM customer c INNER JOIN address a ON c.address_id = a.address_id WHERE c.active = 1 GROUP BY c.customer_id ORDER BY c.first_name DESC, c.last_name DESC;
SELECT s.first_name, s.last_name, AVG(p.amount) FROM staff s INNER JOIN payment p ON s.staff_id = p.staff_id GROUP BY s.staff_id;
SELECT a.actor_id, a.first_name, a.last_name, f.film_id, f.title FROM actor a INNER JOIN film_actor fa ON fa.actor_id = a.actor_id INNER JOIN film f ON f.film_id = fa.film_id;