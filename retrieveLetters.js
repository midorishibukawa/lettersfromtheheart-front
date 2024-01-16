const getAllLetters = async () => {
  try {
    const res = await fetch("http://localhost:3000/allLetters");
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const allLetters = await getAllLetters();

const div = document.querySelector(".letter__wrapper");

const render = (allLetters) => {
  if (allLetters.length > 0) {
    allLetters.map((letter) => {
      const text__wrapper = document.createElement("div");
      const text = document.createElement("p");

      text__wrapper.classList.add("text__wrapper");

      text.innerText = letter.text;

      text__wrapper.appendChild(text);
      div.appendChild(text__wrapper);
    });
  }
};

const writeAnOpenLetter = () => {
  const button = document.querySelector("#writeAnOpenLetter");
  button.addEventListener("click", () => {
    window.location.replace("createLetter.html");
  });
};

render(allLetters);
writeAnOpenLetter();
