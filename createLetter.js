
onload = () =>{
    const submit = document.querySelector("#submitButton")
    const textArea = document.querySelector("#letter")
    submit.addEventListener("click", async ()=>{
        const user = localStorage.getItem("user")
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
            window.location.replace("/lettersfromtheheart-front/showLetter.html?id="+data.id)
    })
}