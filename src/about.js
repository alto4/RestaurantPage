const showAbout = () => {
  const mainContainer = document.querySelector(".main-container");

  mainContainer.innerHTML += "<h1>About</h1>";
};

module.exports = { showAbout };
