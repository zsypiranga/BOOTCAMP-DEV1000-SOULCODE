interface Pokemon {

    name: string;

    sprites: {
        front_default: string;
    }

    types: Array<{
        type: {
            name: string;
        };
    }>;
}

const inputElement = document.getElementById('pokemonInput') as HTMLInputElement;
const seatchButton = document.getElementById('searchBtn') as HTMLButtonElement;
const cardContainer = document.getElementById('pokemonCard') as HTMLDivElement;


seatchButton.addEventListener('click', async () => {

    const busca = inputElement.value.trim().toLowerCase();

    if (!busca) {
        cardContainer.innerHTML = '<p class="message error">Por favor, digite o nome de um Pokémon</p>';
        return;
    }

    try {
        cardContainer.innerHTML = '<p class="message">Buscando Pokémon...</p>';

        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`);

        if (!resposta.ok) {
            throw new Error("Pokémon não encontrado!");
        }

        const data: Pokemon = await resposta.json();

        const tipos = data.types
            .map(item => `<span class="type ${item.type.name}">${item.type.name}</span>`)
            .join("");

        cardContainer.innerHTML = `
        <div class="pokemon-card">
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="Imagem do ${data.name}"/>
            <div class="types">${tipos}</div>
        </div>`;

    } catch (erro) {
        console.error("Erro na busca", erro);
        const mensagem = erro instanceof Error ? erro.message : "Não encontramos o Pokémon";
        cardContainer.innerHTML = `<p class="message error">${mensagem}</p>`;
    }

});

