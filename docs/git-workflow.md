# Fluxo básico do Git


No começo de cada dia, para sincronizar com o GitHub, execute:
````git pull origin main````








Depois de reorganizar ou alterar os arquivos:

```bash
git status
git add .
git status
git commit -m "Organiza estrutura do projeto"
git push
```

Confira o segundo `git status` antes do commit para garantir que apenas as alterações pretendidas estão preparadas.



# Fluxo Diário

1. Começar a aula
git pull origin main
Sincroniza o projeto com o GitHub.




2. Fazer os exercícios
Criar e salvar os arquivos na pasta adequada.




3. Registrar as alterações
git add . e git commit -m "mensagem"




4. Atualizar o GitHub
git push origin main