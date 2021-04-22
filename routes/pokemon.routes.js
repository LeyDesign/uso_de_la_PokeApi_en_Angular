var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();


module.exports = function(app) {

    app.get("/pokemon_name/:pokemon", (req, res) => {

        var poke_name = req.params["pokemon"];


        P.getPokemonByName(poke_name) // with Promise
            .then(function(response) {

                res.status(200).json(response)
            })
            .catch(function(error) {
                console.log('There was an ERROR: ', error);

                res.status(404).json(error)
            });
    })

    app.get("/pokemonList/:filterName", (req, res) => {
        filter = req.params['filterName']
        var pokemonList = [];
        var interval = {
            // limit: 10,
            //  offset: 34
        }
        P.getPokemonsList(interval)
            .then(function(response) {
                response.results.forEach(element => {
                    if (element.name.includes(filter)) {
                        pokemonList.push(element)
                    }

                });
                if (pokemonList.length < 1) {
                    return res.json(null)
                }
                res.json(pokemonList);

            })
    })
}