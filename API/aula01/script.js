"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const inputElement = document.getElementById('pokemonInput');
const seatchButton = document.getElementById('searchBtn');
const cardContainer = document.getElementById('pokemonCard');
seatchButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const busca = inputElement.value.trim().toLowerCase();
    if (!busca) {
        cardContainer.innerHTML = '<p class="message error">Por favor, digite o nome de um Pokémon</p>';
        return;
    }
    try {
        cardContainer.innerHTML = '<p class="message">Buscando Pokémon...</p>';
        const resposta = yield fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`);
        if (!resposta.ok) {
            throw new Error("Pokémon não encontrado!");
        }
        const data = yield resposta.json();
        const tipos = data.types
            .map(item => `<span class="type ${item.type.name}">${item.type.name}</span>`)
            .join("");
        cardContainer.innerHTML = `
        <div class="pokemon-card">
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="Imagem do ${data.name}"/>
            <div class="types">${tipos}</div>
        </div>`;
    }
    catch (erro) {
        console.error("Erro na busca", erro);
        const mensagem = erro instanceof Error ? erro.message : "Não encontramos o Pokémon";
        cardContainer.innerHTML = `<p class="message error">${mensagem}</p>`;
    }
}));
