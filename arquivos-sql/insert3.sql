INSERT INTO actor (first_name, last_name) SELECT first_name, last_name FROM customer WHERE customer_id < 6;
SELECT * from actor;