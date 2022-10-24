JavaScript долгое время не поддерживал приватных свойств и методов. Для них появилось соглашение об именовании с нижнего подчёркивания _, чтобы предотвратить доступ ко внутренностям объекта в обход интерфейса. Но сама возможность прямого доступа остаётся. Нам предстоит разработать обёртку над объектом, защищающую его приватные свойства от прямого доступа. 

# protect.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает объект и позволяет обращаться только к "публичным" свойствам и методам. При попытке прочитать или перезаписать приватное или несуществующее свойство должно выбрасываться исключение.

```js
import protect from '../protect.js';

class Course {
    constructor(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }
}

const course = new Course('Object-oriented design');
const protectedCourse = protect(course);

course.getName(); // "Object-oriented design"
protectedCourse.getName(); // "Object-oriented design"
course._name; // "Object-oriented design"
course._nonExists; // undefined

protectedCourse._name; // Error
protectedCourse._name = 'OOD'; // Error
protectedCourse._nonExist; //Error
```
В реализации используйте Proxy.

## Подсказки
* Чтобы избежать потери контекста для методов, используйте [связывание через bind](https://ru.hexlet.io/courses/js-introduction-to-oop/lessons/bind/theory_unit).
* Определить, что по ключу возвращается метод можно через оператор `typeof`.
* [Документация обработчика set](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set)