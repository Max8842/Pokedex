document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("load-more").addEventListener("click", function() {
        var pokemons = document.getElementById("pokemons")
       const Html = 
        `<div class="evolution-line">
        <div class="pokemon">
                    <div class="pokemon-sprite"><img class="fit-picture"
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
                    </div>
                    <div>
                        <div class="pokemon-name">
                            <h2><b>Bulbasur</b></h2>
                        </div>
                        <ul class="pokemon-types">
                            <li>Grass</li>
                            <li>Poison</li>
                        </ul>
                    </div>
                </div>
                <div class="pokemon">
                    <div>
                        <div class="pokemon-sprite"><img class="fit-picture"
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png">
                        </div>
                    </div>
                    <div>
                        <div class="pokemon-name">
                            <h2>Ivysaur</h2>
                        </div>
                        <ul class="pokemon-types">
                            <li>Grass</li>
                            <li>Poison</li>
                        </ul>
                    </div>
                </div>
                <div class="pokemon">
                    <div>
                        <div class="pokemon-sprite"><img class="fit-picture"
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png">
                        </div>
                    </div>
                    <div>
                        <div class="pokemon-name">
                            <h2>Venusaur</h2>
                        </div>
                        <ul class="pokemon-types">
                            <li>Grass</li>
                            <li>Poison</li>
                        </ul>

                    </div>
                   </div>
                   </div>
 `;  
       pokemons.innerHTML += Html
        
    });
});
