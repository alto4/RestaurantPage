import { showNavbar } from "./navbar";
import { showHomepage } from "./home";
import { showMenu } from "./menu";
import { showAbout } from "./about";
import { showContact } from "./contact";
import { showFooter } from "./footer";

let activeLink = "";

showNavbar();
const homeLink = document.querySelector('[data-link="home"]');
const menuLink = document.querySelector('[data-link="menu"]');
const aboutLink = document.querySelector('[data-link="about"]');
const contactLink = document.querySelector('[data-link="contact"]');
const mainContainer = document.querySelector(".main-container");

let links = [homeLink, menuLink, aboutLink, contactLink];
let hasLoaded = false;

function route() {
  mainContainer.innerHTML = "";
  switch (activeLink) {
    case "home":
    case "":
      showHomepage();
      break;
    case "menu":
      showMenu();
      break;
    case "about":
      showAbout();
      break;
    case "contact":
      showContact();
      break;
  }
}

route();
showFooter();
addLinkEvents();
function addLinkEvents() {
  if (hasLoaded === true) {
    document.body.removeEventListener("keypress", changePage);
  }
  document.body.addEventListener("keypress", changePage);
  // Add click events to change active links
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      links.forEach((link) => {
        link.style.backgroundColor = "#fff";
      });
      activeLink = e.target.getAttribute("data-link");
      document.querySelector(
        `[data-link="${e.target.getAttribute("data-link")}"]`
      ).style.backgroundColor = "#ccc";
      route();
      addLinkEvents();
    });
  });

  if (activeLink === "home" || activeLink === "") {
    const menuButton = document.querySelector(".btn");
    menuButton.addEventListener("click", function () {
      activeLink = "menu";
      route();
    });
  }
}

function changePage() {
  alert("KEYPRESS DETECTED");
  hasLoaded = true;
  mainContainer.innerHTML = "";
  showMenu();
}
