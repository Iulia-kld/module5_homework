//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
//Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа,
//но и, например, знаки, null и так далее.
let numbers = [0, 2, 3, 5, 15, 25, 17, 35, 125];
let resultat = numbers.filter(elem => elem%2 == 0);
console.log(resultat);
let result = numbers.filter(elem => elem%2 !== 0);
console.log(result);
let res = numbers.filter(elem => elem == 0);
console.log(res);