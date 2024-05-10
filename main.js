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

const content2 = document.createElement("div");
content2.classList.add("content2");
content2.style.cssText = "color: blue; backround: white";


container.appendChild(content2);

const h1Element = document.createElement("h1");
h1Element.classList.add("h1Element");
h1Element.textContent = "I’m a div";

content2.appendChild(h1Element);

container.appendChild(h1Element);


// the JavaScript file
const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});


  

