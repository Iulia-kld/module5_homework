//Задание 1

/*let meaning = prompt("Введите значение");
let meaningNum = +meaning;
if (typeof meaningNum !== 'number' || meaningNum === NaN) {
    alert("Упс, кажется, Вы ошиблись");
} else if (meaningNum%2 == 0) {
    console.log("Это число чётное");
} /*else if (meaningNum === NaN) {
    alert("Упс, кажется, Вы ошиблись");
} else {
    console.log("Это число нечётное")
}
*/
let test = +prompt ("Введите значение");
if (typeof test === "number" && !isNaN(test)) {
    if(test%2 === 0) {
        console.log("Чётное число");
    } else if (test%2 !== 0) {
        console.log("Нечётное число");
    } /*else if (test === NaN) {
        alert("Упс, кажется, Вы ошиблись")
    }*/ else {
        alert("Упс, кажется, Вы ошиблись")
    }
}