document.querySelector("#submit").addEventListener("click", login);

async function login(event){
    event.preventDefault()
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const user = { email, password };
    const req = {
        method: "POST",
         body: JSON.stringify(user),
          headers:{"Content-Type": "application/json"}
        }
    const res = await fetch("http://localhost:3000/sign-in", req)
    const data = await res.json()
    alert(data.msg)
  }