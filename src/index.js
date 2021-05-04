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

let links = [homeLink, menuLink, aboutLink, contactLink];

function route() {
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
  // Add click events to change active links
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      links.forEach((link) => {
        link.style.backgroundColor = "#fff";
      });
      alert("clicked" + e.target.getAttribute("data-link"));
      activeLink = e.target.getAttribute("data-link");
      alert("ActiveLink set to " + activeLink);
      document.querySelector(
        `[data-link="${e.target.getAttribute("data-link")}"]`
      ).style.backgroundColor = "red";
    });

    route();
  });
}
