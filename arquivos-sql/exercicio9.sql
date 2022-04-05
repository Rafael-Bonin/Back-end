SELECT title AS Titulo, description AS Descricao, release_year AS 'Ano de Lancamento', replacement_cost AS 'Custo de Substituicao' FROM film
WHERE rating = 'G'
OR rating = 'PG'
OR rating = 'PG-13'
AND replacement_cost >= 18
ORDER BY replacement_cost DESC, title
LIMIT 100;