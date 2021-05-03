import { showNavbar } from "./navbar";
import { showHomepage } from "./home";
import { showMenu } from "./menu";
import { showAbout } from "./about";
import { showContact } from "./contact";
import { showFooter } from "./footer";

let page = "home";

showNavbar();
switch (page) {
  case "home":
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
showFooter();
