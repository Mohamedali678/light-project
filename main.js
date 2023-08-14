const box = document.querySelector(".box");

const onBtn = document.querySelector("#onBtn");

const offBtn = document.querySelector("#offBtn");

//event
onBtn.addEventListener("click", function () {
  box.style.backgroundColor = "yellow";
});

offBtn.addEventListener("click", function () {
  box.style.backgroundColor = "transparent";
});
