
// document.body.addEventListener("click", function (){
//     const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = randomColor;
// })


const btn = document.createElement("button");
btn.textContent = "Click To Change Color";
btn.style.backgroundColor = "orange";
btn.style.border = "3px";
btn.style.borderColor = "black";
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = color;
});
