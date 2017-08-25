document.addEventListener("DOMContentLoaded", () => {
  main();
});

const main = () => {
  const button = document.getElementById("start");
  button.addEventListener("click", () => {
    const num = 1000000;
    let text = "";
    for (let i = 0; i < 1024; i++) {
      text = text + "a";
    }
    for (let i = 0; i < num; i ++) {
      try {
        window.sessionStorage.setItem(i, text);
      } catch (error) {
        changeText("note", filesize(new Blob([text]).size * i) + " text was saved in Session Storage.");
        throw error;
      }
    }
    changeText("note", "Congrats! All " + filesize(new Blob([text]).size * num) + " text was saved in Session Storage.");
  });
};

const changeText = (id, text) => {
  document.getElementById(id).textContent = text;
}
