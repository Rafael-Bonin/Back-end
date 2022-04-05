SELECT * FROM film;
SELECT title AS Nome, release_year AS Lancamento, rating AS classificacao FROM film;
SELECT COUNT(*) FROM film;

SELECT DISTINCT last_name FROM actor;
SELECT COUNT(DISTINCT last_name) FROM actor;
SELECT first_name, last_name FROM actor ORDER BY last_name ASC, first_name DESC;

SELECT * FROM language LIMIT 5 OFFSET 1;

SELECT * FROM film;
SELECT
title AS Titulo, release_year AS Lancamento, length AS Duracao, rating AS Classificacao, replacement_cost AS 'Custo de substituicao'
FROM film
ORDER BY length ASC, replacement_cost DESC
LIMIT 20;