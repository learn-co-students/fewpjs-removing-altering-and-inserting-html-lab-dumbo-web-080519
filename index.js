// Write your code here!
document.querySelector("main#main").remove();

let newHeader = document.createElement("h1");
newHeader.id = 'victory';
newHeader.innerHTML = 'Kimberly is the champion';
newHeader.className = 'victory';
document.body.appendChild(newHeader)

// const newHeader = document.createElement("h1");
// newHeader.id = "victory"
// newHeader.innerText = "Steven is the champion!";
// newHeader.className = "victory";
