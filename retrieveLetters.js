console.log("funciona1");

async function getAllLetters() {
  try {
    const res = await fetch("http://localhost:3000/allLetters");
    console.log("funciona3");
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getAllLetters();

console.log("funciona2");
