const toggleBtn = document.querySelector(".toggle");
const navbar_collapse = document.querySelector(".navbar-collapse");

toggleBtn.addEventListener("click", function (e) {
  navbar_collapse.classList.toggle("hide");
  toggleBtn.classList.toggle("change");
});

let widthDiv = document.querySelectorAll(".w-100");

window.addEventListener("load", function (e) {
  console.log(window.innerWidth);
});
