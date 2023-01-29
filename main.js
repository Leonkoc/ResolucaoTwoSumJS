/*Dado um array de números inteiros, e um valor alvo, encontre dois números que somados resulte no alvo */
nums = [2, 7, 11, 15];
let target = 9;

let twoSum = (nums,target) =>{
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target)
            return [i, j];
        }
    }
}
console.log(twoSum(nums, target));
/*
Nesse caso estou usando dois fors aninhados, um itera um número e o outro compara o proximo número. Essa forma 
não é otimizada mas resolve, dado que um array maior, pode gerar lentidão por causa de um bagulho chamado O(n^2)

O(n^2): Notação usada para descrever complexidade computacional de um array, ele indica o crescimento do
tamanho do tempo de execução de um algoritmo em relação a entrada.
Indica que o tempo de execução é proporcional ao quadrado do tamanho da entrada, onde a entrada é n.
*/


/*
Pensei em formas de resolver isso mais interativa, por exemplo pedir para o usuário, escolher o alvo e os números,
eu poderia pedir para digitar um número por vez, e fazer um while, mas tive a ideia de como o prompt retorna uma
string, pedir ao usuário digitar e usar o método slit para transformar essa string em um array.

let nums = [];
let target = Number(prompt("Informe o alvo"));
let numsString = prompt("Informe os números separados por vírgula");
nums = numsString.split(",");
console.log(twoSum(nums, target));

Teria um problema, que ainda não sei como resolver, preciso transformar as strings em numeros;

let nums = [];
let target = Number(prompt("Informe o alvo"));
let numsString = prompt("Informe os números separados por vírgula");
let numsArray = numsString.split(",");
nums = numsArray.map(n => parseInt(n));
console.log(twoSum(nums, target));

*/