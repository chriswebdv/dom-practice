const container = document.querySelector("#container");

const para = document.createElement("p");
para.classList.add("para");
para.textContent = "Hey I'm red!";
para.style.cssText = "color: red";

container.appendChild(para);

const h3Element = document.createElement("h3");
h3Element.classList.add("h3Element");
h3Element.textContent = "I'm a blue h3";
h3Element.style.cssText = "color: blue";

container.appendChild(h3Element);
