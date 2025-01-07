const getDataById = (id, callback) => {
  setTimeout(() => {
    console.log("data -> ", id);
    callback(id);
  }, 2000);
};

// const onSuccess = (response) => {
//     console.log("call successfully completed", response);
//   }
// getDataById("asd", onSuccess);

// console.log("Triggering call start...");
// getDataById(1, (response) => {
//   console.log("Login Done", response);
//   getDataById(2, (response) => {
//     console.log("Queried cart list", response);
//     getDataById(3, (response) => {
//       console.log("call successfully completed", response);
//       getDataById(4, (response) => {
//         console.log("call successfully completed", response);
//       });
//     });
//   });
// });

// getDataById(3, (response) => {
//   console.log("call successfully completed", response);
// });
// getDataById(4, (response) => {
//   console.log("call successfully completed", response);
// });
// console.log("Triggering call end...");

// let prom = new Promise((resolve, reject) => {
//   console.log("hgchgv");
//   reject("hello");
// });

// console.log(prom);

const getPromise = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        resolve("on success");
      } else {
        reject("error");
      }
    }, 2000);
  });
};

getPromise(1) // calls at 0sec
  .then((response) => {
    // calls at 2sec
    console.log("then 1", response); // then 1
    return getPromise(2); // calls at 2sec
  })
  .then((data) => {
    // calls at 4sec
    console.log("then 2", data); // then 2
    return getPromise(3); // calls at 4sec
  })
  .then((data) => {
    // calls at 6sec
    console.log("then 3", data); // then 3
    return getPromise(4); // calls at 6sec
  })
  .then((data) => {
    // calls at 8sec
    console.log("then 4", data); // then 4
  });

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
