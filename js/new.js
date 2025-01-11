// -------------------------------------------------------------------------

// 4. Сортування рядків за довжиною
// Дано той самий масив рядків:

// const words = ["banana", "apple", "grape", "orange", "kiwi"];

// // const result = words.toSorted((a, b) => a.localeCompare(b));

// const result = words.toSorted((a, b) => a.length - b.length);

// console.log(result);

// Завдання: Відсортуйте рядки за їхньою довжиною (від найкоротшого до найдовшого).
// Очікуваний результат:
// ['kiwi', 'apple', 'grape', 'banana', 'orange']

// -------------------------------------------------------------------------

// 5. Сортування об'єктів за числовою властивістю
// Дано масив об'єктів:

// const items = [
//   { name: "apple", price: 50 },
//   { name: "banana", price: 20 },
//   { name: "orange", price: 30 },
// ];

// const result = items.toSorted((a, b) => a.price - b.price);

// console.log(result);

// Завдання: Відсортуйте об'єкти за властивістю price у порядку зростання.
// Очікуваний результат:

// [
//   { name: 'banana', price: 20 },
//   { name: 'orange', price: 30 },
//   { name: 'apple', price: 50 }
// ]

// -------------------------------------------------------------------------

// Дано вкладений масив:

// const nestedArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// const result = nestedArray.reduce((acc, item) => [...acc, ...item], []);
// console.log(result);

// Завдання: За допомогою flatMap отримайте плаский масив.
// Очікуваний результат:
// [1, 2, 3, 4, 5, 6]

// const result = nestedArray.map((x, index, arrey) => console.log(x));
// console.log(result);

// -------------------------------------------------------------------------

// const words = ["hello", "world", "JavaScript", "reduce"];
// // Завдання: Напишіть функцію, яка за допомогою reduce підрахує загальну кількість символів у всіх словах.
// // Очікуваний результат:
// // 26

// const result = words.reduce((acc, word) => {
//   return acc + word.length;
// }, 0);

// console.log(result);

// -------------------------------------------------------------------------

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const result = fruits.reduce((acc, item) => {
//   if (acc[item]) {
//     acc[item] = acc[item] + 1;
//   } else {
//     acc[item] = 1;
//   }
//   return acc;
// }, {});

// console.log(result);

// Завдання: Напишіть функцію, яка за допомогою reduce підрахує, скільки разів кожен фрукт зустрічається в масиві.
// Очікуваний результат:

// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }
