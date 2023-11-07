const res = await fetch("http://localhost:3000/letter"+ location.search)
const data = await res.json()

const authorElement = document.querySelector("#author")
const textElement = document.querySelector("#text")

authorElement.innerText = data[0].from_user
textElement.innerText = data[0].text

console.log(data)