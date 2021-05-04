import { showNavbar } from "./navbar";
import { showHomepage } from "./home";
import { showMenu } from "./menu";
import { showAbout } from "./about";
import { showContact } from "./contact";
import { showFooter } from "./footer";

let page = "home";

showNavbar();
const homeLink = document.querySelector('[data-link="home"]');
const menuLink = document.querySelector('[data-link="menu"]');
const aboutLink = document.querySelector('[data-link="about"]');
const contactLink = document.querySelector('[data-link="contact"]');

switch (page) {
  case "home":
    homeLink.style.backgroundColor = "red";
    showHomepage();
    break;
  case "menu":
    menuLink.style.backgroundColor = "red";
    showMenu();
    break;
  case "about":
    aboutLink.style.backgroundColor = "red";
    showAbout();
    break;
  case "contact":
    contactLink.style.backgroundColor = "red";
    showContact();
    break;
}
showFooter();
