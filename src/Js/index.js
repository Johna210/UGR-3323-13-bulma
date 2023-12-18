// mobile menu
console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");

const burger = document.querySelector("#burger");
const Menu = document.querySelector("#nav-links");

burger.addEventListener("click", () => {
  Menu.classList.toggle("is-active");
  Menu.classList.toggle("has-text-centered");
});
