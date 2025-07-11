const genButtons = document.querySelectorAll('.gen-btn');
const container = document.getElementById('evolution-chains-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let currentGen = 1;
let evoChainId = 1;
const chainsPerLoad = 4;

const genRanges = {
  1: { min: 1, max: 151 },
  2: { min: 152, max: 251 },
  3: { min: 252, max: 386 },
  4: { min: 387, max: 493 },
  5: { min: 494, max: 649 },
  6: { min: 650, max: 721 }
};

genButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    genButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentGen = parseInt(btn.dataset.gen);
    evoChainId = 1;
    container.innerHTML = '';
    loadMoreBtn.style.display = 'block';
    loadMoreBtn.disabled = false;
    loadMoreChains();
  });
});

loadMoreBtn.addEventListener('click', loadMoreChains);

async function fetchEvolutionChain(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
  if (!res.ok) throw new Error('Chain not found');
  return res.json();
}

function getSpeciesUrls(chain) {
  let urls = [chain.species.url];
  if (chain.evolves_to.length > 0) {
    urls = urls.concat(getSpeciesUrls(chain.evolves_to[0]));
  }
  return urls;
}

function getSpeciesId(url) {
  const parts = url.split('/').filter(Boolean);
  return parseInt(parts[parts.length - 1]);
}

async function fetchPokemonData(speciesUrl) {
  const species = await fetch(speciesUrl).then(r => r.json());
  const pokeData = await fetch(species.varieties[0].pokemon.url).then(r => r.json());
  return {
    name: pokeData.name,
    id: pokeData.id,
    sprite: pokeData.sprites.front_default,
    types: pokeData.types.map(t => t.type.name)
  };
}

function createChainBox(pokemonList) {
  const html = pokemonList.map(p => `
    <div class="evo-pokemon" onclick="openProfile(${p.id})">
      <button class="add-to-team" title="Add to team">+</button>
      <img src="${p.sprite}" alt="${p.name}">
      <div class="pokemon-name">${p.name}</div>
      <div class="types-container">
        ${p.types.map(type => `<span class="type-badge">${type}</span>`).join('')}
      </div>
    </div>
  `).join('');
  container.insertAdjacentHTML('beforeend', `<div class="evo-chain-box">${html}</div>`);
}

async function loadMoreChains() {
  loadMoreBtn.disabled = true;
  loadMoreBtn.textContent = 'Loading...';
  const range = genRanges[currentGen];

  let loaded = 0;
  let attempts = 0;
  const maxAttempts = 1000; 

  while (loaded < chainsPerLoad && attempts < maxAttempts) {
    attempts++;
    try {
      const data = await fetchEvolutionChain(evoChainId++);
      const speciesUrls = getSpeciesUrls(data.chain);
      const isValid = speciesUrls.every(url => {
        const id = getSpeciesId(url);
        return id >= range.min && id <= range.max;
      });

      if (!isValid) continue;

      const pokemons = [];
      for (const url of speciesUrls) {
        const p = await fetchPokemonData(url);
        pokemons.push(p);
      }

      createChainBox(pokemons);
      loaded++;
    } catch (e) {
      continue;
    }
  }

  loadMoreBtn.disabled = false;
  loadMoreBtn.textContent = 'Load More Chains';

  if (loaded === 0) {
    loadMoreBtn.style.display = 'none';
  }
}

function openProfile(id) {
  window.open(`profile.html?id=${id}`, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  loadMoreChains();
});
