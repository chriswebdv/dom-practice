// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.classList.add("para");
para.textContent = "Hey I’m red!";
para.style.color = "red";

container.appendChild(para);

const h3Element = document.createElement("h3");
h3Element.classList.add("h3Element");
h3Element.textContent = "I’m a blue h3!";
h3Element.style.color = "blue";

container.appendChild(h3Element);

