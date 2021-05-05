const showContact = () => {
  const mainContainer = document.querySelector(".main-container");

  mainContainer.innerHTML += "<h1>Contact</h1>";

  let contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  let contactDetailsContainer = document.createElement("div");
  contactDetailsContainer.classList.add("contact-details");

  let addressInfo = document.createElement("p");
  addressInfo.innerText = "Address: 133 Brock Street, Whitby, ON";
  let phoneInfo = document.createElement("p");
  phoneInfo.innerText = "Phone Number: 905-443-3243";
  let emailInfo = document.createElement("p");
  emailInfo.innerText = "Email Address: fryway@gmail.com";

  contactDetailsContainer.appendChild(addressInfo);
  contactDetailsContainer.appendChild(phoneInfo);
  contactDetailsContainer.appendChild(emailInfo);

  contactContainer.appendChild(contactDetailsContainer);
  // Map
  let locationMap = document.createElement("iframe");
  locationMap.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5751.763691819738!2d-78.9488308644266!3d43.87899957829261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51e125f8e01e9%3A0xf9c95233a08419a!2s139%20Brock%20St%20S%2C%20Whitby%2C%20ON%20L1N%204J9!5e0!3m2!1sen!2sca!4v1620238290589!5m2!1sen!2sca"
  );
  locationMap.setAttribute("width", "600");
  locationMap.setAttribute("height", "300");
  locationMap.setAttribute("style", "border:0");
  locationMap.setAttribute("loading", "lazy");

  contactContainer.appendChild(locationMap);
  // Contact form
  let contactForm = document.createElement("form");
  contactForm.classList.add("contact-form");

  // Name input
  let nameInputContainer = document.createElement("div");
  nameInputContainer.classList.add("form-field");

  let nameLabel = document.createElement("label");
  nameLabel.innerText = "Name:";
  nameLabel.setAttribute("for", "name");
  let nameInput = document.createElement("input");
  nameInput.setAttribute("name", "name");

  nameInputContainer.appendChild(nameLabel);
  nameInputContainer.appendChild(nameInput);
  contactForm.appendChild(nameInputContainer);

  // Phone input
  let phoneInputContainer = document.createElement("div");
  phoneInputContainer.classList.add("form-field");

  let phoneLabel = document.createElement("label");
  phoneLabel.innerText = "Phone Number:";
  phoneLabel.setAttribute("for", "phone");
  let phoneInput = document.createElement("input");
  phoneInput.setAttribute("name", "phone");

  phoneInputContainer.appendChild(phoneLabel);
  phoneInputContainer.appendChild(phoneInput);
  contactForm.appendChild(phoneInputContainer);

  // Email input
  let emailInputContainer = document.createElement("div");
  emailInputContainer.classList.add("form-field");

  let emailLabel = document.createElement("label");
  emailLabel.innerText = "Email Address:";
  emailLabel.setAttribute("for", "email");
  let emailInput = document.createElement("input");
  emailInput.setAttribute("name", "email");

  emailInputContainer.appendChild(emailLabel);
  emailInputContainer.appendChild(emailInput);
  contactForm.appendChild(emailInputContainer);

  // Message input
  let messageInputContainer = document.createElement("div");
  messageInputContainer.classList.add("form-field");

  let messageLabel = document.createElement("label");
  messageLabel.innerText = "Message:";
  messageLabel.setAttribute("for", "message");
  let messageInput = document.createElement("textarea");
  messageInput.setAttribute("name", "message");

  messageInputContainer.appendChild(messageLabel);
  messageInputContainer.appendChild(messageInput);
  contactForm.appendChild(messageInputContainer);

  contactContainer.appendChild(contactForm);

  mainContainer.appendChild(contactContainer);
};

module.exports = { showContact };
