const express = require('express');
const app = express();
app.use(express.json());

let produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 80 },
  { id: 3, nome: "Teclado", preco: 150 }
];

app.get('/api/produtos', (req, res) => {
  res.json(produtos);
});

app.post('/api/produtos', (req, res) => {
  const novoProduto = {
    id: produtos.length + 1,
    nome: req.body.nome,
    preco: req.body.preco
  };
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

app.delete('/api/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  produtos = produtos.filter(produto => produto.id !== id);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});