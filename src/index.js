import { showNavbar } from "./navbar";
import { showHomepage } from "./home";
import { showMenu } from "./menu";
import { showContact } from "./contact";
import { showFooter } from "./footer";

let activeLink = "home";

showNavbar();
const homeLink = document.querySelector('[data-link="home"]');
const menuLink = document.querySelector('[data-link="menu"]');
const contactLink = document.querySelector('[data-link="contact"]');
const mainContainer = document.querySelector(".main-container");

let links = [homeLink, menuLink, contactLink];
let pages = ["home", "menu", "contact"];
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
    case "contact":
      showContact();
      break;
  }
}

route();
highlightLinks();
showFooter();
addLinkEvents();
addTabEvents();

function addLinkEvents() {
  // Add click events to change active links
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      activeLink = e.target.getAttribute("data-link");
      highlightLinks();
    });
  });

  if (activeLink === "home" || activeLink === "") {
    const menuButton = document.querySelector(".btn");
    menuButton.addEventListener("click", function () {
      activeLink = "menu";
      route();
      highlightLinks();
    });
  }
}

function changePage() {
  hasLoaded = true;
  mainContainer.innerHTML = "";
  activeLink = "menu";
  route();
  highlightLinks();
}

function highlightLinks() {
  links.forEach((link) => {
    link.style.backgroundColor = "#fff";
  });
  document.querySelector(`[data-link="${activeLink}"]`).style.backgroundColor =
    "#ccc";
  route();
  addLinkEvents();
}

function addTabEvents() {
  if (hasLoaded === true) {
    document.body.removeEventListener("keydown", tabToNextPage);
  }
  document.body.addEventListener("keydown", function tabToNextPage(e) {
    if (e.which === 9) {
      let currentIndex = pages.indexOf(activeLink);

      if (currentIndex + 1 === pages.length) {
        activeLink = pages[0];
      } else {
        activeLink = pages[currentIndex + 1];
      }
      route();
      highlightLinks();
    }
  });
}
