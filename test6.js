//Задача 6
//Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
//Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех.
 //Проверить, все ли элементы в массиве одинаковые.

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
/*console.log(week.length);
console.log(week[0]);
console.log(week[1]);
console.log(week[2]);
console.log(week[3]);
console.log(week[4]);
console.log(week[5]);
console.log(week[6]);*/
x=(typeof(week[0]));
console.log(x);
console.log(week.every(Element=>typeof(Element)==x));