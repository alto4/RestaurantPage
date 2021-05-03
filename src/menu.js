const showMenu = () => {
  const contentContainer = document.querySelector("#content");

  contentContainer.innerHTML += "<h1>Menu</h1>";
};

module.exports = { showMenu };
