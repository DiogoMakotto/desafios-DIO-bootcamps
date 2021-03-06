/*
Estrutura de Dados - Básico

Desafio
Crie um programa onde você receberá valores inteiros não negativos como entrada.

Ordene estes valores de acordo com o seguinte critério:

Primeiro os Pares
Depois os Ímpares
Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.

Entrada
A primeira linha de entrada contém um único inteiro positivo N (1 < N < 10000) Este é o número de linhas de entrada que vem logo a seguir. As próximas N linhas terão, cada uma delas, um valor inteiro não negativo.

Saída
Exiba todos os valores lidos na entrada segundo a ordem apresentada acima. Cada número deve ser impresso em uma linha, conforme exemplo de saída abaixo.
*/

let totalItems = gets();
let items = [];

for (let i = 0; i < totalItems; i++) {
  items.push(parseInt(gets()));
}

let pares = items.filter(valor => ~valor & 1).sort((a, b) => a - b);
let impares = items.filter(valor => valor & 1).sort((a, b) => b - a);

pares.map(valor => console.log(valor));
impares.map(valor => console.log(valor));