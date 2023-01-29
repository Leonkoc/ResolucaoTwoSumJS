# TwoSum Javascript
## O problema TwoSum é um desafio clássico de lógica de programação, onde o objetivo é encontrar dois números em um array que, quando somados, resultem no alvo especificado. Resolvi o problema do TwoSum de maneira interativa, pedindo ao usuário para escolher o alvo e os números, usando o método split para transformar a string digitada em um array. No entanto, enfrentei um problema com a conversão de strings para números, mas consegui resolvê-lo usando o map e o parseInt. Ainda assim, esse método pode ser problemático em termos de tempo de processamento, caso o usuário use um array maior.<br><br> Gostaria de saber, como você resolveria esse problema?🤔<br><br>


# Como eu resolvi ⬇️
`````
let nums = [];
let target = Number(prompt("Informe o alvo"));
let numsString = prompt("Informe os números separados por vírgula");
let numsArray = numsString.split(",");
nums = numsArray.map(n => parseInt(n));
console.log(twoSum(nums, target));
`````

Nesse caso estou usando dois fors aninhados, um itera um número e o outro compara o proximo número. Essa forma 
não é otimizada mas resolve, dado que um array maior, pode gerar lentidão por causa de um bagulho chamado O(n^2)

O(n^2): Notação usada para descrever complexidade computacional de um array, ele indica o crescimento do
tamanho do tempo de execução de um algoritmo em relação a entrada.
Indica que o tempo de execução é proporcional ao quadrado do tamanho da entrada, onde a entrada é n.