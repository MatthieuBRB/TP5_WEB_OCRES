var express = require('express');
var router = express.Router();

//GET localhost:3000/movies -- Affiche tout les films
router.get('', function(req, res) {
  res.status(200).json({ movies });
});

//GET localhost:3000/movies/:id -- Affiche un film via son id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const movie = _.find(movies, ["id", id]);

    res.status(200).json({
        message: 'Movie found',
        movie
    });
});

//PUT localhost:3000/movies/ -- Ajoute un film via son nom
router.put('/', (req, res) => {
    const { movie } = req.body;
    const id = _.uniqueId("movie_");

    movies.push({ movie, id });
    res.json({
        message: `${id} added successfuly`,
        movie: { movie, id }
    });
});

//POST localhost:3000/movies/:id -- Update un film via son id
router.post('/:id', (req, res) => {
    const { id } = req.params;
    const { movie } = req.body;
    const movieToUpdate = _.find(movies, ["id", id]);
    movieToUpdate.movie = movie;

    res.json({
        message: `${id} updated with ${movie}`
    });
});

//DELETE localhost:3000/movies/:id -- Efface un film via son id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.remove(movies, ["id", id]);

    res.json({
        message: `${id} deleted`
    });
});

module.exports = router;