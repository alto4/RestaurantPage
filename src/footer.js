const showFooter = () => {
  const contentContainer = document.querySelector("#content");

  let footer = document.createElement("footer");

  // Generate social media icons from Font Awesome
  let facebookLink = document.createElement("a");
  facebookLink.href = "https://www.facebook.com/";
  facebookLink.setAttribute("target", "_blank");
  facebookLink.setAttribute("tabindex", "-1");
  let facebookIcon = document.createElement("i");
  facebookIcon.classList += "fab fa-facebook fa-2x";

  let instagramLink = document.createElement("a");
  instagramLink.href = "https://www.instagram.com/";
  instagramLink.setAttribute("target", "_blank");
  instagramLink.setAttribute("tabindex", "-1");
  let instagramIcon = document.createElement("i");
  instagramIcon.classList += "fab fa-instagram fa-2x";

  let twitterLink = document.createElement("a");
  twitterLink.href = "https://twitter.com/home?lang=en";
  twitterLink.setAttribute("target", "_blank");
  twitterLink.setAttribute("tabindex", "-1");
  let twitterIcon = document.createElement("i");
  twitterIcon.classList += "fab fa-twitter fa-2x";

  facebookLink.appendChild(facebookIcon);
  instagramLink.appendChild(instagramIcon);
  twitterLink.appendChild(twitterIcon);

  footer.appendChild(facebookLink);
  footer.appendChild(instagramLink);
  footer.appendChild(twitterLink);
  contentContainer.appendChild(footer);
};

module.exports = {
  showFooter,
};
