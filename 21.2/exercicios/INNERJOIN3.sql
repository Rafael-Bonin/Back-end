SELECT * FROM Movies;
SELECT m.title, bo.rating FROM BoxOffice bo INNER JOIN Movies m ON bo.movie_id = m.id;