const showHomepage = () => {
  const contentContainer = document.querySelector("#content");

  // Generate hero section
  let heroContainer = document.createElement("div");
  heroContainer.classList.add("hero");
  let leadParagraph = document.createElement("p");
  leadParagraph.classList.add("lead");
  leadParagraph.innerText =
    "More than your average chip truck, we serve authentic Quebec-style poutine, and a ton of other classic comfort foods.";
  let menuButton = document.createElement("button");
  menuButton.classList.add("btn");
  menuButton.innerText = "View Menu";

  let descriptionParagraph = document.createElement("p");
  descriptionParagraph.innerText =
    "For the last 7 years, Scott and his team have been cooking up a storm in the small city of Bath, Ontario. Tired of the limited options between Toronto and Ottawa, FryWay33 offers premium quality-comfort food. Gradually becoming a classic family stop, we are serving up the best fish and chips, burgers, and poutine to be found east of Toronto.";

  heroContainer.appendChild(leadParagraph);
  heroContainer.appendChild(menuButton);
  contentContainer.appendChild(heroContainer);
};

module.exports = { showHomepage };
