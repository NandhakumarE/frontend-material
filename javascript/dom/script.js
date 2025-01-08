console.log(document.body.childNodes);
document.body.style.background = "steelblue";

setTimeout(() => {
  document.body.style.background = "white";
}, 2000);

const colors = [
  "green",
  "yellow",
  "pink",
  "orange",
  "blue",
  "steelblue",
  "teal",
];

const getRandomInt = () => {
  return Math.floor(Math.random() * 7);
};
// setInterval(() => {
//   document.body.style.background = colors[getRandomInt()];
//   console.log("setInterval", getRandomInt());
// }, 1000);

// selectors.

// ID
const header = document.getElementById("heading");

setInterval(() => {
  header.style.background = colors[getRandomInt()];
}, 1000);

// Class

const classes = document.getElementsByClassName("item");

for (let i = 0; i < classes.length; i++) {
  if (i % 2 === 0) {
    classes[i].style.background = "steelblue";
  }
}

console.log("classes", classes);

// Tag name
const tagBased = document.getElementsByTagName("li");
console.log("tagBased", tagBased);

// QuerySelector

const rahul = document.querySelectorAll(".item");
console.log("querySelector", rahul);

const valueElement = document.getElementById("value");
// set
valueElement.innerHTML = "<strong>laptop Inner HTML</strong>";
valueElement.innerText = "laptop Inner Text";

// get
console.log(valueElement.textContent);

// input x = 10 + "10";
// op = 20;

x = 10 + Number("10");
x = 10 + +"10";

// arr = [1,2,3,4,5];
// array destructuring
const [a, b, c, d, e] = [1, 2, 3, 4, 5];

const person = {
  name: "rahul",
  age: 19,
  college: "shri eswar",
};

const { name, age } = person;


const orderList = document.getElementById("list");

const li = document.createElement("li");
li.classList.add("new-item");
li.innerText = "new item";

// orderList.before(li);
// orderList.prepend(li);
// orderList.append(li);
// orderList.after(li);

orderList.remove();

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
async function getTodoList() {
  try {
    const untrustedData = await fetch(
      "https://jsonplaceholder.typicode.com/todo"
    );
    const data = await untrustedData.json();
    console.log(data);
  } catch (error) {}
}

getTodoList();

const formElement = document.getElementById("login-page");
const userNameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = userNameElement.value;
  const password = passwordElement.value;
  console.log({ username, password });
});
