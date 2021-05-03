const showFooter = () => {
  const contentContainer = document.querySelector("#content");

  let footer = document.createElement("footer");

  // Generate social media icons from Font Awesome
  let facebookIcon = document.createElement("i");
  facebookIcon.classList += "fab fa-facebook fa-2x";
  let instagramIcon = document.createElement("i");
  instagramIcon.classList += "fab fa-instagram fa-2x";
  let twitterIcon = document.createElement("i");
  twitterIcon.classList += "fab fa-twitter fa-2x";

  footer.appendChild(facebookIcon);
  footer.appendChild(instagramIcon);
  footer.appendChild(twitterIcon);
  contentContainer.appendChild(footer);
};

module.exports = {
  showFooter,
};
