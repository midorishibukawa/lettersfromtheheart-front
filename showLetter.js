const res = await fetch("http://localhost:3000/letter"+ location.search)
const data = await res.json()

const authorElement = document.querySelector("#author")
const textElement = document.querySelector("#text")
const dateElement = document.querySelector("#date")

const creationDate = new Date(data[0].creation_date);

const readableDate = `${creationDate.toLocaleDateString()} ${creationDate.toLocaleTimeString()}`;

authorElement.innerText = data[0].from_user
textElement.innerText = data[0].text
dateElement.innerText = readableDate

console.log(data)