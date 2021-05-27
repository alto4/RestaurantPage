const showNavbar = () => {
  const contentContainer = document.querySelector("#content");

  let navbar = document.createElement("nav");
  let logo = document.createElement("div");
  logo.innerHTML = "<h2>Fryway 33</h2>";
  let navItems = document.createElement("ul");
  navItems.classList.add("nav-links");
  let homeLink = document.createElement("li");
  homeLink.innerText = "Home";
  homeLink.setAttribute("data-link", "home");
  let menuLink = document.createElement("li");
  menuLink.innerText = "Menu";
  menuLink.setAttribute("data-link", "menu");
  let contactLink = document.createElement("li");
  contactLink.innerText = "Contact";
  contactLink.setAttribute("data-link", "contact");

  navItems.appendChild(homeLink);
  navItems.appendChild(menuLink);
  navItems.appendChild(contactLink);

  navbar.appendChild(logo);
  navbar.appendChild(navItems);

  contentContainer.appendChild(navbar);

  // Create main content container
  let mainContainer = document.createElement("div");
  mainContainer.classList += "main-container";
  contentContainer.appendChild(mainContainer);
};

module.exports = { showNavbar };
