(()=>{var e={637:e=>{e.exports={showContact:()=>{const e=document.querySelector(".main-container");e.innerHTML+="<h1>Contact</h1>";let t=document.createElement("div");t.classList.add("contact-container");let n=document.createElement("div");n.classList.add("contact-details");let a=document.createElement("p");a.innerText="Address: 133 Brock Street, Whitby, ON";let i=document.createElement("p");i.innerText="Phone Number: 905-443-3243";let d=document.createElement("p");d.innerText="Email Address: fryway@gmail.com",n.appendChild(a),n.appendChild(i),n.appendChild(d),t.appendChild(n);let o=document.createElement("iframe");o.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5751.763691819738!2d-78.9488308644266!3d43.87899957829261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51e125f8e01e9%3A0xf9c95233a08419a!2s139%20Brock%20St%20S%2C%20Whitby%2C%20ON%20L1N%204J9!5e0!3m2!1sen!2sca!4v1620238290589!5m2!1sen!2sca"),o.setAttribute("width","600"),o.setAttribute("height","300"),o.setAttribute("style","border:0"),o.setAttribute("loading","lazy"),t.appendChild(o);let c=document.createElement("form");c.classList.add("contact-form");let r=document.createElement("h3");r.innerText="Send Us a Message";let l=document.createElement("p");l.innerText="We will get back to you ASAP. If you need to get in touch urgently, please give us a call.",c.appendChild(r),c.appendChild(l);let s=document.createElement("div");s.classList.add("form-field");let m=document.createElement("label");m.innerText="Name:",m.setAttribute("for","name");let u=document.createElement("input");u.setAttribute("name","name"),s.appendChild(m),s.appendChild(u),c.appendChild(s);let p=document.createElement("div");p.classList.add("form-field");let h=document.createElement("label");h.innerText="Phone Number:",h.setAttribute("for","phone");let b=document.createElement("input");b.setAttribute("name","phone"),p.appendChild(h),p.appendChild(b),c.appendChild(p);let f=document.createElement("div");f.classList.add("form-field");let y=document.createElement("label");y.innerText="Email Address:",y.setAttribute("for","email");let g=document.createElement("input");g.setAttribute("name","email"),f.appendChild(y),f.appendChild(g),c.appendChild(f);let C=document.createElement("div");C.classList.add("form-field");let E=document.createElement("label");E.innerText="Message:",E.setAttribute("for","message");let v=document.createElement("textarea");v.setAttribute("name","message"),C.appendChild(E),C.appendChild(v),c.appendChild(C);let w=document.createElement("button");w.classList.add("btn-send"),w.innerText="Send",c.appendChild(w),t.appendChild(c),e.appendChild(t)}}},994:e=>{e.exports={showFooter:()=>{const e=document.querySelector("#content");let t=document.createElement("footer"),n=document.createElement("i");n.classList+="fab fa-facebook fa-2x";let a=document.createElement("i");a.classList+="fab fa-instagram fa-2x";let i=document.createElement("i");i.classList+="fab fa-twitter fa-2x",t.appendChild(n),t.appendChild(a),t.appendChild(i),e.appendChild(t)}}},666:(e,t,n)=>{const{showMenu:a}=n(83),{route:i}=n(138);e.exports={showHomepage:()=>{const e=document.querySelector(".main-container");let t=document.createElement("div");t.classList.add("hero");let n=document.createElement("p");n.classList.add("lead"),n.innerText="More than your average chip truck, we serve authentic Quebec-style poutine, and a ton of other classic comfort foods.";let a=document.createElement("button");a.classList.add("btn"),a.innerText="View Menu",document.createElement("p").innerText="For the last 7 years, Scott and his team have been cooking up a storm in the small city of Bath, Ontario. Tired of the limited options between Toronto and Ottawa, FryWay33 offers premium quality-comfort food. Gradually becoming a classic family stop, we are serving up the best fish and chips, burgers, and poutine to be found east of Toronto.",t.appendChild(n),t.appendChild(a),e.appendChild(t)}}},138:(e,t,n)=>{"use strict";n.r(t);var a=n(930),i=n(666),d=n(83),o=n(637),c=n(994);let r="home";(0,a.showNavbar)();const l=document.querySelector('[data-link="home"]'),s=document.querySelector('[data-link="menu"]'),m=document.querySelector('[data-link="contact"]'),u=document.querySelector(".main-container");let p=[l,s,m],h=!1;function b(){switch(u.innerHTML="",r){case"home":case"":(0,i.showHomepage)();break;case"menu":(0,d.showMenu)();break;case"contact":(0,o.showContact)()}}function f(){!0===h&&document.body.removeEventListener("keypress",y),document.body.addEventListener("keypress",y),p.forEach((e=>{e.addEventListener("click",(e=>{r=e.target.getAttribute("data-link"),g()}))})),("home"===r||""===r)&&document.querySelector(".btn").addEventListener("click",(function(){r="menu",b(),g()}))}function y(){h=!0,u.innerHTML="",r="menu",b(),g()}function g(){p.forEach((e=>{e.style.backgroundColor="#fff"})),document.querySelector(`[data-link="${r}"]`).style.backgroundColor="#ccc",b(),f()}b(),g(),(0,c.showFooter)(),f()},83:e=>{const t=[{title:"Fish and Chips",imageURL:"../images/fishandchips.jpeg",description:"Crispy, lightly-battered cod and chips made with Bath brewery stout. Served with homemade tartar sauce, crunchy brocolli slaw, and a customary slice of lemon.",price:"$9.99"},{title:"Cheeseburger",imageURL:"../images/burger.jpeg",description:"A fresh, homemade 10oz patty nestled between a soft, chewy egg bun. Served with arugula, tomato, red onion, and garlic-dill pickles, and the condiments of your choosing.",price:"$8.99"},{title:"Chicken Tenders and Fries",imageURL:"../images/chicken.jpg",description:"Homemade chicken tenders breaded with Panko and served alongside our tasty chips, and your choice of honey mustard sauce, plum sauce, or spicy barbeque sauce.",price:"$11.99"},{title:"Poutine",imageURL:"../images/poutine.jpg",description:"Top-quality Kennebec potatoes, sliced into medium thickness and served with Quebecois cheese curds and homemade beef gravy.",price:"$6.99 | $8.99"},{title:"Chicken Tenders and Fries",imageURL:"../images/chicken.jpg",description:"Homemade chicken tenders breaded with Panko and served alongside our tasty chips, and your choice of honey mustard sauce, plum sauce, or spicy barbeque sauce.",price:"$11.99"},{title:"Poutine",imageURL:"../images/poutine.jpg",description:"Top-quality Kennebec potatoes, sliced into medium thickness and served with Quebecois cheese curds and homemade beef gravy.",price:"$6.99 | $8.99"}];e.exports={showMenu:()=>{const e=document.querySelector(".main-container");let n=document.createElement("h1");n.innerText="Menu",e.appendChild(n);let a=document.createElement("div");a.classList+="menu-container",t.forEach((e=>{let t=document.createElement("div");t.classList+="menu-item";let n=document.createElement("h2");n.innerText=e.title;let i=document.createElement("img");i.classList+="menu-item-image",i.src=e.imageURL;let d=document.createElement("p");d.classList+="menu-item-description",d.innerText=e.description;let o=document.createElement("span");o.classList+="menu-item-price",o.innerText=e.price,t.appendChild(n),t.appendChild(i),t.appendChild(d),t.appendChild(o),a.appendChild(t)})),e.appendChild(a)}}},930:e=>{e.exports={showNavbar:()=>{const e=document.querySelector("#content");let t=document.createElement("nav"),n=document.createElement("div");n.innerHTML="<h2>Fryway 33</h2>";let a=document.createElement("ul");a.classList.add("nav-links");let i=document.createElement("li");i.innerText="Home",i.setAttribute("data-link","home");let d=document.createElement("li");d.innerText="Menu",d.setAttribute("data-link","menu");let o=document.createElement("li");o.innerText="Contact",o.setAttribute("data-link","contact"),a.appendChild(i),a.appendChild(d),a.appendChild(o),t.appendChild(n),t.appendChild(a),e.appendChild(t);let c=document.createElement("div");c.classList+="main-container",e.appendChild(c)}}}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var d=t[a]={exports:{}};return e[a](d,d.exports,n),d.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(138)})();