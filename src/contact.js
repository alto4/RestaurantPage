const showContact = () => {
  const contentContainer = document.querySelector("#content");

  contentContainer.innerHTML += "<h1>Contact</h1>";
};

module.exports = { showContact };
