# Trilha Start — Dev1000 SoulCode

Repositório de estudo para exercícios de JavaScript, orientação a objetos e TypeScript. Os arquivos de exercícios foram mantidos; a mudança principal é a organização das pastas.

## Estrutura

- `aulas/`: exercícios organizados por número da aula.
- `exercicios/estudos-de-caso/`: estudos de caso gerais e de lógica de programação.
- `exercicios/pet-shop/`: exercícios do projeto Pet Shop.
- `exercicios/objetos/`: exemplos de objetos e métodos.
- `exercicios/classes/`: exercícios sobre classes e carrinho.
- `typescript/`: exercícios de encapsulamento e tipos.
- `materiais/pdf/`: PDFs fornecidos para as atividades.
- `docs/`: notas de uso do Git.
- `rascunhos/temp-code-runner/`: cópias dos arquivos temporários do Code Runner retirados das pastas principais; foram preservadas para consulta.

## Executar um exercício

Instale uma versão LTS do Node.js. Na raiz do projeto, execute um arquivo específico com `node`, por exemplo:

```bash
node aulas/aula-08/imc.mjs
```

O exemplo acima depende da entrada informada no terminal. Para outros exercícios, substitua o caminho pelo arquivo que deseja executar. Os arquivos `.mjs` usam módulos ES; a pasta `aulas/aula-02` conserva seu `package.json` próprio.

Para executar um exercício TypeScript com a dependência `tsx` instalada, use, por exemplo, `npx tsx typescript/exercicios/porta.ts`.

## Dependências

`node_modules/` não é versionado. Para reinstalar as dependências listadas, execute `npm install` na raiz.

## Observações

- Não existe uma aplicação única de entrada na raiz; cada exercício deve ser executado individualmente.
- O script de testes foi removido porque o repositório ainda não tem testes automatizados configurados.
- Arquivos `tempCodeRunnerFile.*` novos são ignorados pelo Git. As cópias existentes no repositório foram movidas para `rascunhos/temp-code-runner/`, com nomes descritivos, sem alterar o conteúdo delas.
