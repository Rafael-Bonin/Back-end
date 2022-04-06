SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'ja assisti', 'nao conheco') AS 'ja assisti?' FROM film;
SELECT title, rating, 
	CASE 
		WHEN rating = 'G' THEN 'Livre para todos'
		WHEN rating = 'PG' THEN 'Nao recomendado para menores de 10 anos'
		WHEN rating = 'PG-13' THEN 'Nao recomendado para menores de 13 anos'
		WHEN rating = 'R' THEN 'Nao recomendado para menores de 17 anos'
		ELSE 'proibido para menores'
    END AS 'publico-alvo'
FROM film;