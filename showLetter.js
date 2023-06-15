const space = document.querySelector(".space")

const res = await fetch("http://localhost:3000/letter"+ location.search)
const data = await res.json()

const from = document.createElement("p")
from.innerText = data.from

const text = document.createElement("p")
text.innerText = data.text

space.append(from, text)
