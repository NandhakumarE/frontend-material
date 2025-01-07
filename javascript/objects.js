const person = {
  name: "nandha",
  college: "sri eshwar",
  rollno: "15tuix068",
};

console.log(person);

person.department = "IT"; // add key-value from object

console.log(person);

delete person.rollno; // remove key-value from object

//## task

// {user name: 10}
// person["user name"] = "gfxhghj";
// console.log(person);

// looping objects
const arr = [];
for (let key in person) {
  arr.push(key);
}

console.log(arr);

console.log("keys fn", Object.keys(person));
console.log("values fn", Object.values(person));

// freeze object
Object.freeze(person);
person.xyz = "somre";
console.log(person);

// {
//     "name": "nandha",
//     "college": "sri eshwar",
//     "department": "IT"
// }

// output - [[name, nandha],[college, sri eshwar],[department, IT]]
const entries = Object.entries(person);
console.log(entries);

const fromEntry = Object.fromEntries(entries);
console.log(fromEntry);

//##task

// primitive data type
let x = 10;
let y = x;
y = 20;

// non-primitive
const obj1 = {
  name: "nandha",
  age: 1,
};

const obj2 = { ...obj1 };
obj2.age = 20;

console.log(obj1, obj2);

const nestedobj1 = {
  name: "nandha",
  age: 1,
  address: {
    city: "coimbatore",
    state: "tamilnadu",
  },
};

// deep copy

const convertObjectToString = JSON.stringify(person);
const convertStringifiedStringToObj = JSON.parse(convertObjectToString);
console.log(convertStringifiedStringToObj);
