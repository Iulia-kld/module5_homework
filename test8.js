//Задача 8
//Создайте произвольный массив Map. 
//Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
//Используйте шаблонные строки.

let languages = new Map([
   ['es', 'Spanish'],
   ['en', 'English'],
   ['fr', 'French'], 
]);
/*console.log(languages);
for (let key of languages.keys()) {
   console.log(key);
};*/
for (let pair of languages) {
console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`);
}