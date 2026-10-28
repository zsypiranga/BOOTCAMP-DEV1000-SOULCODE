// Importa o framework Express para dentro do nosso projeto (permite criar o servidor e rotas)
const express = require('express');

// Cria uma instância do Express. É a nossa aplicação/servidor principal, que vamos chamar de 'app'
const app = express();

// Configura um "middleware": ensina o servidor a traduzir os dados que chegam no formato JSON (corpo da requisição)
app.use(express.json());

