const user = localStorage.getItem("user")
const submit = document.querySelector("#submitButton")
const textArea = document.querySelector("#letter")
if (!user) {
    window.location.replace("/login.html")
}

submit.addEventListener("click", async ($event)=>{
    $event.preventDefault()
    const letter = {
        from: user,
        text: textArea.value
    }
    const req = {
        method: "POST",
            body: JSON.stringify(letter),
            headers:{"Content-Type": "application/json"}
        }
        const res = await fetch("http://localhost:3000/letter", req)
        const data = await res.json()
        window.location.replace("/showLetter.html?id="+data.id)
        
})