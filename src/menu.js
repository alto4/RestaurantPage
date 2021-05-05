const menuItems = [
  {
    title: "Fish and Chips",
    imageURL: "../images/fishandchips.jpeg",
    description:
      "Crispy, lightly-battered cod and chips made with Bath brewery stout. Served with homemade tartar sauce, crunchy brocolli slaw, and a customary slice of lemon.",
    price: "$9.99",
  },
  {
    title: "Cheeseburger",
    imageURL: "../images/burger.jpeg",
    description:
      "A fresh, homemade 10oz patty nestled between a soft, chewy egg bun. Served with arugula, tomato, red onion, and garlic-dill pickles, and the condiments of your choosing.",
    price: "$8.99",
  },
  {
    title: "Chicken Tenders and Fries",
    imageURL: "../images/chicken.jpg",
    description:
      "Homemade chicken tenders breaded with Panko and served alongside our tasty chips, and your choice of honey mustard sauce, plum sauce, or spicy barbeque sauce.",
    price: "$11.99",
  },
  {
    title: "Poutine",
    imageURL: "../images/poutine.jpg",
    description:
      "Top-quality Kennebec potatoes, sliced into medium thickness and served with Quebecois cheese curds and homemade beef gravy.",
    price: "$6.99 | $8.99",
  },
  {
    title: "Chicken Tenders and Fries",
    imageURL: "../images/chicken.jpg",
    description:
      "Homemade chicken tenders breaded with Panko and served alongside our tasty chips, and your choice of honey mustard sauce, plum sauce, or spicy barbeque sauce.",
    price: "$11.99",
  },
  {
    title: "Poutine",
    imageURL: "../images/poutine.jpg",
    description:
      "Top-quality Kennebec potatoes, sliced into medium thickness and served with Quebecois cheese curds and homemade beef gravy.",
    price: "$6.99 | $8.99",
  },
];

const showMenu = () => {
  const mainContainer = document.querySelector(".main-container");
  let pageHeading = document.createElement("h1");
  pageHeading.innerText = "Menu";

  mainContainer.appendChild(pageHeading);

  let menuContainer = document.createElement("div");
  menuContainer.classList += "menu-container";

  menuItems.forEach((item) => {
    // Create menu item cards
    let menuItemCard = document.createElement("div");
    menuItemCard.classList += "menu-item";
    // Item title
    let menuItemTitle = document.createElement("h2");
    menuItemTitle.innerText = item.title;
    // Item image
    let menuItemImage = document.createElement("img");
    menuItemImage.classList += "menu-item-image";
    menuItemImage.src = item.imageURL;
    // Item description
    let menuItemDescription = document.createElement("p");
    menuItemDescription.classList += "menu-item-description";
    menuItemDescription.innerText = item.description;
    // Item price
    let menuItemPrice = document.createElement("span");
    menuItemPrice.classList += "menu-item-price";
    menuItemPrice.innerText = item.price;

    // Add elements to card
    menuItemCard.appendChild(menuItemTitle);
    menuItemCard.appendChild(menuItemImage);
    menuItemCard.appendChild(menuItemDescription);
    menuItemCard.appendChild(menuItemPrice);

    // Add card to menu items container
    menuContainer.appendChild(menuItemCard);
  });

  mainContainer.appendChild(menuContainer);
};

module.exports = { showMenu };
