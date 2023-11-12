 

 const grades = [];
const ul = document.createElement("ul");
 for (let i = 0; i < 12; i++) {
     grades.push(Math.floor(Math.random() * 100) + 1);
 }
 //Рассчитайте и выведите средний балл студентов, используя методы массивов.
  const sum = grades.reduce((num,item) => num + item , 0);
  const average = sum / grades.length;
  console.log(`Средний балл среди студентов: ${average}`);
 const maxGrade= Math.max(...grades);
 console.log(`Максимальный балл среди студентов: ${maxGrade}`);
 const minGrade = Math.min(...grades);
 console.log(`Минимальный балл среди студентов: ${minGrade}`);
 // Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат
 [100]
 const remain = grades.filter(function(item){ return item > 60});
 const result = grades.length - remain.length;
 console.log(result)

 // Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
 const negative = grades.filter(function(item){ return item < 60;});
 const negativeRes = grades.length - negative.length;
 console.log(negativeRes);
 // 7. Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
 //     - Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
 //     - Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
 //     - Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
 //     - Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
 //     - Если оценка ниже 20, преобразуйте её в "E"
 //grades.forEach(function(item) {
for ( let i = 0; i < grades.length; i++){

    const item = grades[i];

    const li = document.createElement('li');

 

    if( item >= 80){
        li.textContent = "A"
    } else if (item >= 60 && item <= 79) {
        li.textContent ="B"
    } else if (item >= 40 && item <= 59) {
        li.textContent ="C"
    } else if (item >= 20 && item <= 39) {
        li.textContent ="D"
    } else if (item <= 20){
        li.textContent ="E"
    }

    ul.appendChild(li);
}
    
   
document.body.appendChild(ul);

    
    
    
    
    
    
    
    // let ul = document.createElement("ul");
    // ul.className = "ul";
    // ul.innerHTML = grades;
    // document.body.append(ul);

//     let li = document.createElement("li");
//     ul.className = "li1";
//   document.body.append(li);


   
    //  function getListContent() {
    //      let fragment = new DocumentFragment();
    
    //      for(let i=1; i<=3; i++) {
    //        let li = document.createElement('li');
    //        li.append(i);
    //        fragment.append(li);
    //      }
    
    //      return fragment;
    //    }
    
    //    ul.append(getListContent()); 
      
// //     document.body.insertAdjacentHTML("afterbegin", `<li class="li">
// //     <strong>Всем привет!</strong> Вы прочитали важное сообщение.
// //   </div>`);


























//Найти сумму элементов массива:

//const numbers = [1, 2, 3, 4, 5];
// const summ = numbers.reduce(function(item, num){return item + num});
// console.log(summ)

// const sum = 0;
// for( let i = 0; i < numbers.length; i++) {sum =  num + num};
// console.log(numbers)


// let number = [2,3,4,5,6,7,8,9,10,];
// let i ;
// let a  ;


// for (i = 2 ; i < number.length; i++) 
// { if ( number[i] % 2 === 1) {console.log(i)}
// else  {true}};


// let number = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < number.length; i++) {
// let isPrime = true;
// for (let j = 2; j < number[i]; j++) {
// if (number[i] % j === 0) {
// isPrime = false;
// break;
// }
// }
// if (isPrime) {
// console.log(number[i]);
// }
// }

// let number = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < number.length; i++) {
// let isPrime = true;

// for (let j = 2; j < number[i]; j++) {
// if (number[i] % j === 0) {
// isPrime = false;
// break;
// }
// }

// if (isPrime) {
// console.log(number[i]);
// }
// }
// Внутренний цикл `for` используется для проверки простоты текущего числа `number[i]` в массиве `number`. Использование значения 2 в качестве начального значения `j` является стандартным подходом для поиска простых чисел.

// Мы начинаем с 2, так как любое число делится на 1 без остатка, и мы хотим проверить деление на остальные числа. Затем мы проходим через цикл с `number[i] - 1` в качестве верхней границы, потому что любое число делится без остатка только на себя и 1.

// Мы проверяем деление числа `number[i]` на каждое значение `j` внутри цикла с помощью оператора `%`. Если находим значение `j`, на которое `number[i]` делится без остатка (`number[i] % j === 0`), значит число не является простым.

// Например, для числа 7, внутренний цикл будет выполняться с `j = 2` до `j = 6`, и мы проверим деление 7 на 2, 3, 4, 5 и 6. Если остаток от деления равен 0, то число не является простым. Если ни один из этих делителей не равен 0, то число 7 является простым.

// В общем случае, мы проверяем деление числа `number[i]` на каждое значение `j` от 2 до `number[i] - 1` включительно, чтобы определить, является ли число простым.

//  2. Подсчет суммы чисел введенных пользователем:

// ```javascript
// let sum = 0;
// let num;

// do {
// num = parseInt(prompt("Введите число (0 для выхода):"));
// if (!isNaN(num)) {
// sum += num;
// }
// } while (num !== 0);

// console.log("Сумма: ", sum);
// ```
