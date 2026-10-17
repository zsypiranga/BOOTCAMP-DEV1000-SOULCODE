
**CASO 1**

Controle de vendas de uma loja

Uma loja de informática registra as vendas do dia. O gerente soma os valores manualmente e calcula o
valor médio das vendas. Ele solicitou um programa que receba esses valores e apresente os resultados.

Sua tarefa
1. Pergunte quantas vendas foram realizadas no dia.
2. Utilize um while para receber o valor de cada venda.
3. Armazene os valores em um array.
4. Calcule o faturamento total e o valor médio das vendas.
5. Apresente os dois resultados com duas casas decimais.


calculosVendas.mjs Exportar calcularTotal(vendas) e calcularMedia(vendas).
vendas.mjs Receber os dados, importar as funções e exibir os resultados.


Regras de validação

■ A quantidade de vendas deve ser um número inteiro maior que zero.
■ Cada venda deve ter um valor numérico maior que zero.
■ Recuse respostas vazias ou contendo somente espaços.
■ Solicite novamente entradas inválidas, sem avançar o contador.


**CASO 2**

Uma empresa de entregas precisa estimar o consumo de combustível e o custo de uma viagem antes de
autorizar o deslocamento de um veículo. O responsável informa a distância total, o consumo médio do
veículo e o preço do combustível.

Sua tarefa
1. Receba a distância total da viagem, em quilômetros.
2. Receba o consumo médio do veículo, em quilômetros por litro.
3. Receba o preço do combustível, em reais por litro.
4. Calcule a quantidade estimada de litros necessários.
5. Calcule o custo estimado da viagem.
6. Exiba os dois resultados com duas casas decimais.

Fórmulas de cálculo
Litros necessários = distância ÷ consumo médio
Custo da viagem = litros necessários × preço por litro

calculosViagem.mjs Exportar calcularLitros(distancia, consumo) e calcularCusto(litros, preco).

viagem.mjs Receber os dados, importar as funções e exibir os resultados.


Regras de validação
■ Todos os valores devem ser numéricos e maiores que zero.
■ Recuse respostas vazias ou contendo somente espaços.
■ Use while para solicitar novamente qualquer dado inválido.
■ Permita decimais com ponto ou vírgula.