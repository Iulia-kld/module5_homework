
/*Задание 2
Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».
Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».
Примечание: в этом задании использовать promt не нужно.*/

let x ;
if (typeof x === 'number') {
    console.log("х - число");
} else if (typeof x === 'boolean') {
    console.log("х - логический тип");
} else if (typeof x === 'string') {
    console.log("х - строка");
} else {
    console.log("Тип х не определён")
}
