document.addEventListener("DOMContentLoaded", function (event) {
    loadMore();

    document.getElementById("load-more").addEventListener("click", function () {
        loadMore().catch(console.error);
    });

    fetchEvolutionChain(6).then(links => console.log(links));
});

async function fetchEvolutionChain(evolutionLineId) {
    var evolutionChain = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${evolutionLineId}`).then(response => response.json());

    var chain = evolutionChain.chain;
    var pokemonLinks = [chain.species.url];

    while (chain.evolves_to.length > 0) {
        chain = chain.evolves_to[0];
        pokemonLinks.push(chain.species.url);
    }

    return pokemonLinks;
}

async function resolvePokemon(speciesUrl) {
    var species = await fetch(speciesUrl).then(response => response.json());
    var pokemonUrl = species.varieties[0].pokemon.url;

    var pokemon = await fetch(pokemonUrl).then(response => response.json());

    return {
        type: pokemon.types.map(t => t.type.name),
        name: pokemon.name,
        sprite: pokemon.sprites.front_default,
    };
}

function getPokemon({name, type, sprite}) {
    return  `<div class="pokemon">
                    <div class="pokemon-sprite"><img class="fit-picture"
                            src="${sprite}">
                    </div>
                    <div>
                        <div class="pokemon-name">
                            <h2><b>${name}</b></h2>
                        </div>
                        <ul class="pokemon-types">
                            ${type.map(t => `<li>${t}</li>`).join("")}
                        </ul>
                    </div>
                </div>`;
}

var evolutionLineIndex = 1;
async function loadMore() {
    const container = document.getElementById("pokemons");
    for (let i = 0; i < 4; i++) {
        var evolutionLine = await fetchEvolutionChain(evolutionLineIndex++);
        
        var pokemonHtml = "";
        for (let j = 0; j < evolutionLine.length; j++) {
            var pokemon = await resolvePokemon(evolutionLine[j]);
            pokemonHtml += getPokemon(pokemon);
        }


        var nextEvolutionLine = `
           <div class="evolution-line">
            ${pokemonHtml}
            </div>
            `;
        container.innerHTML += nextEvolutionLine;
    }
}