const showAbout = () => {
  const contentContainer = document.querySelector("#content");

  contentContainer.innerHTML += "<h1>About</h1>";
};

module.exports = { showAbout };
