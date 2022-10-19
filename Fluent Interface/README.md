Эту задачу можно решить огромным числом способов. Почти наверняка ваш способ будет не такой, как решение учителя.

Мы не даём никаких подсказок насчёт того, какие функции нужно использовать. Как минимум вы знаете главную тройку `map`, `filter` и `reduce`.

# solution.js
Реализуйте и экспортируйте по умолчанию функцию `normalize()` которая принимает на вход список городов и стран, нормализует их имена, сортирует города и группирует их по стране.

```js
import normalize from './solution.js';

const countries = [
    { name: 'Miami', country: 'usa' },
    { name: 'samarA', country: ' ruSsiA' },
    { name: 'Moscow', country: ' Russia' },
];

normalize(countries);
// {
//   russia: [
//     'moscow',
//     'samara',
//   ],
//   usa: [
//     'miami',
//   ],
// }
```