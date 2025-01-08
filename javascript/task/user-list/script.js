const formElement = document.getElementById("add-new-user-form");
const nameElement = document.getElementById("username");
const emailElement = document.getElementById("email");

const listElement = document.getElementById("user-list");

const getItemFromData = (name, email) => {
  const li = document.createElement("li");

  // name
  const nameDiv = document.createElement("div");
  nameDiv.classList.add("username");
  nameDiv.innerText = name;

  // email
  const emailDiv = document.createElement("div");
  emailDiv.classList.add("email");
  emailDiv.innerText = email;

  li.append(nameDiv);
  li.append(emailDiv);
  return li;
};

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameElement.value;
  const email = emailElement.value;

  const li = getItemFromData(name, email);
  listElement.append(li);

  nameElement.value = "";
  emailElement.value = "";
});
