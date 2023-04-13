const LOCALSTORAGEKEY = "Key";

const submit = document.querySelector("#submit");

const usersLocalStorage = JSON.parse(
  window.localStorage.getItem(LOCALSTORAGEKEY)
);
let users = usersLocalStorage ?? [];

submit.addEventListener("click", register);

function checkIfExists(users, newUser) {
  return users.some(
    (user) => user.username === newUser.username || user.email === newUser.email
  );
}

function register(event) {
  console.log(users);
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const newUser = { username, email, password };
  if (checkIfExists(users, newUser)) {
    alert("User already exists");
  } else {
    users.push(newUser);
    window.localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(users));
  }
}
