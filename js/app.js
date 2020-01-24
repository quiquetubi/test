
var app = new Vue({
    el: '#app',
    data: {
        numberPokemons: 0,
        pokemons: []
    },
    methods: {
        getPokemon: function () {
            axios
                .post("http://riboanalytics.sytes.net:7900/Pokimon", {
                    size: parseInt(this.numberPokemons)
                })
                .then( response => {
                    //console.log(response.data.Result);
                    this.pokemons = response.data.Result;
                    console.log(this.pokemons);
                })
                .catch( error => {
                    console.log(error);
                });
        }

    }
});
