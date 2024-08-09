const button = document.getElementById("button");
const div = document.getElementById("containerId");
button.addEventListener("click", () => {
  div.appendChild(newButton);
});

const newButton = document.createElement('button');
newButton.textContent = "Clicked";