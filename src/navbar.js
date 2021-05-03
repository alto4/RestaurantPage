const showNavbar = () => {
  const contentContainer = document.querySelector("#content");

  let navbar = document.createElement("nav");
  let logo = document.createElement("div");
  logo.innerHTML = "<h1>Fryway 33</h1>";
  let navItems = document.createElement("ul");
  navItems.classList.add("nav-links");
  let homeLink = document.createElement("li");
  homeLink.innerText = "Home";
  let menuLink = document.createElement("li");
  menuLink.innerText = "Menu";
  let aboutLink = document.createElement("li");
  aboutLink.innerText = "About";
  let contactLink = document.createElement("li");
  contactLink.innerText = "Contact";

  navItems.appendChild(homeLink);
  navItems.appendChild(menuLink);
  navItems.appendChild(aboutLink);
  navItems.appendChild(contactLink);

  navbar.appendChild(logo);
  navbar.appendChild(navItems);

  contentContainer.appendChild(navbar);
};

module.exports = { showNavbar };
