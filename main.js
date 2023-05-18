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

// function register(event) {
//   console.log(users);
//   event.preventDefault();
//   if (checkIfExists(users, newUser)) {
//     alert("User already exists");
//   } else {
//     users.push(newUser);
//     window.localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(users));
//   }
// }

async function register(event){
  event.preventDefault()
  const user = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const newUser = { user, email, password };
  const req = {
    method: "POST",
     body: JSON.stringify(newUser),
      headers:{"Content-Type": "application/json"}
    }
  const res = await fetch("http://localhost:3000/sign-up", req)
  const data = await res.json()
  alert(data.msg)
}

function checkUsername() {
  let username = document.getElementById("username").value;
  const validUsername = /^[\w\d]+$/;

  if (!validUsername.test(username)) {
    alert("The username must contain only letters, numbers and _ (underscores).");
    return false;
  }

  return true;
}

function checkPassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (password != confirmPassword) {
    alert("The passwords do not match.");
    return false;
  }

  if (!validPassword.test(password)) {
    alert("The password must be at least 8 characters long, including at least one uppercase letter, one lowercase letter, one number and one special character (@$!%*?&).");
    return false;
  }
  
  return true;
}


function checkForm() {
  if (checkPassword() && checkUsername()) {
    alert("Registration successful!");
    return true;
  } else {
    return false;
  }
}