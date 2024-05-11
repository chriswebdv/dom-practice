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

const newDiv = document.createElement("div");
newDiv.classList.add("div");
newDiv.style.backgroundColor = "pink";
newDiv.style.border = "3px solid black";

const h1Element = document.createElement("h1");
h1Element.classList.add("h1Element");
h1Element.textContent = "I'm in a div";
newDiv.appendChild(h1Element);

const para2 = document.createElement("p");
para2.classList.add("para2");
para2.textContent = "ME TOO!";
newDiv.appendChild(para2);

container.appendChild(newDiv);
