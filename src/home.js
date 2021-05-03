const showHomepage = () => {
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

  // Generate hero section
  let heroContainer = document.createElement("div");
  heroContainer.classList.add("hero");
  let heroImage = document.createElement("img");
  heroImage.src = "../images/fryway-33.jpg";
  let leadParagraph = document.createElement("p");
  leadParagraph.innerText =
    "More than your average chip truck, we serve authentic Quebec-style poutine, and a ton of other classic comfort foods.";
  let descriptionParagraph = document.createElement("p");
  descriptionParagraph.innerText =
    "For the last 7 years, Scott and his team have been cooking up a storm in the small city of Bath, Ontario. Tired of the limited options between Toronto and Ottawa, FryWay33 offers premium quality-comfort food. Gradually becoming a classic family stop, we are serving up the best fish and chips, burgers, and poutine to be found east of Toronto.";
  heroContainer.appendChild(heroImage);
  heroContainer.appendChild(leadParagraph);
  heroContainer.appendChild(descriptionParagraph);
  contentContainer.appendChild(heroContainer);
};

module.exports = { showHomepage };
