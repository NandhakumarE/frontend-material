const todoList = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
];

// print all the titles as array
// []

// base version
const titles = [];
for (let i = 0; i < todoList.length; i++) {
  titles.push(todoList[i].title);
}
console.log(titles);

// better version
const titles_ = todoList.map((eachTodo) => eachTodo.title);
// []: strings

const arrm = todoList.map((eachTodo) => {
  return {
    userId: eachTodo.userId,
    titles: eachTodo.title,
  };
});
console.log(arrm);

// [{userId: 1, title:"hgvjh"},...,10]

const getCompletedTodo = (arr = []) => {
  const filterData = arr.filter((eachTodo) => eachTodo.completed);
  return filterData;
};

const getTodoById = (id) => {
  const entry = arr.find((eachTodo) => eachTodo.id === id);
  return entry;
};

const getTodoIndexById = (id) => {
  const index = arr.findIndex((eachTodo) => eachTodo.id === id);
  return index;
};

arr.forEach((eachTodo) => {
  console.log(eachTodo);
});

// ##task

//##array - hetero
// const arr = [
//   1,
//   "hello",
//   true,
//   null,
//   undefined,
//   () => {
//     console.log("gfxhcgjhvkjbk");
//   },
// ];
// arr[5]();

// two ways of creating array.
const arr = ["apple", "orange"];
const arr1 = new Array(["apple", "orange"]);

//##task
// in = [1,2,3,4,5], out = [5, 10, 15, 20, 25];

// const fn = (item) => item * 5;
// const multiplier = (arr, fn) => {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = fn(arr[i]); //callbackFn(arr[i], i);
//   }
//   return arr;
// };

// const loop = (arr = [], callbackFn) => {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = callbackFn(arr[i], i);
//   }
//   return arr;
// };
// const arr11 = [1, 2, 3];
// console.log(loop(arr11, (eachItem) => eachItem * 15));
// console.log(loop(arr11, (eachItem) => !!eachItem));

const array = [];

array.push(10);
array.push(20);
array.push(30);
array.push(40);
array.push(50);

console.log(array.pop()); // 50
console.log(array.pop()); // 40

array.unshift(1);
array.unshift(2);
array.unshift(3);

array.shift();

console.log(array);

// ##task
// arr = [1,2,3,4,5]

// 1. reverse
console.log(array.reverse());
// 2. 1-2-3-4-5
console.log(array.join("$"));
// 3. contains
console.log(array.includes(1));

const array1 = ["apple", "banana", "orange"];

// index = 2, value = "mango"
// output = ['apple', "banana", "mango", "orange"];

// insert at specific index
array1.splice(2, 0, "mango");

// remove from specific index
// array.splice(1, 1);

// input ['apple', "banana", "mango", "orange"];
// out ['apple', "grapes", "carrot", "mango", "orange"];
array1.splice(1, 1, "grapes", "carrot");
console.log(array);
