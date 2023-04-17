const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const sidelink = document.querySelectorAll(".sidelink");
const play = document.querySelector("#play");
const description = document.querySelector(".description");

menu.addEventListener("click", () => {
  sidebar.classList.toggle("slide");
  sidelink.forEach((sidelink) => sidelink.classList.toggle("none"));
  play.classList.toggle("resize");
  description.classList.toggle("change");
});
