// Напишіть функцію makeCounter, яка повертає іншу функцію,
//     яка рахує та виводить у консоль кількість своїх викликів


function makeCounter (count) {
  return () => console.log(count += 5 );
}
const item = makeCounter(10);

item();
item();
item();
item();