const modal = document.querySelector(".modal");
const button = document.querySelector("button");
const close = document.querySelector(".close");
const bgModal = document.querySelector(".modal-bg")
const sizeRange = document.querySelector(".size");
const borderRange = document.querySelector(".border");
const borderRadiusRange = document.querySelector(".borderRadious");
const blurRange = document.querySelector(".blur");
let sliceXRange = document.querySelector("#slice-x");
let sliceYRange = document.querySelector("#slice-y");
let blurRadius = document.querySelector("#blur-radius");
let spreadRadius = document.querySelector("#spread-radius");
let colorBoxShadow = document.querySelector(".colorBoxShadow");
const colorBorder = document.querySelector(".color-border");
const display = document.querySelector(".display");

button.addEventListener("click", () =>{
    modal.style.display = "flex";
    bgModal.style.display="block";
})

close.addEventListener("click", ()=>{
    modal.style.display = "none";
    bgModal.style.display = "none";
})

sizeRange.addEventListener("input", (event) =>{
    const value = event.target.value;
    display.style.width = `${value}px`
    display.style.height = `${value}px`
    display.parentElement.parentElement.nextElementSibling.children[1].children[0].innerHTML =`width: ${value}px; <br> height: ${value}px;
    `;
});

borderRange.addEventListener("input", (event) =>{
    const value = event.target.value;
    display.style.border = `${value}px solid ${colorBorder.value}`
    display.parentElement.parentElement.nextElementSibling.children[1].children[1].innerHTML =`border: ${value}px solid ${colorBorder.value};`;
});

borderRadiusRange.addEventListener("input", (event) =>{
    const value = event.target.value;
    display.style.borderRadius = `${value}px`
    display.parentElement.parentElement.nextElementSibling.children[1].children[2].innerHTML =`border-radius: ${value}px;`;
})

blurRange.addEventListener("input", (event) =>{
    const value = `blur(${event.target.value}px)`
    display.style.backdropFilter = value;
    display.parentElement.parentElement.nextElementSibling.children[1].children[3].innerHTML =`backdrop-filter: ${value};`;
})

const slices = document.querySelectorAll(".slices");
slices.forEach((slice) =>{
    //recorrer todo el slices que contiene varios elementos del tag input que pertenece al boxShadow//
    slice.addEventListener("input", resultInput);
});


function resultInput() {
    //Se consiguen los valores de los inputs de box-shadows
    const valuesSliceX = sliceXRange.value;
    const valuesSliceY = sliceYRange.value;
    const valuesBlurRadius = blurRadius.value;
    const valuesSpreadRadius = spreadRadius.value;
    display.style.boxShadow = `${valuesSliceX}px ${valuesSliceY}px ${valuesBlurRadius}px ${valuesSpreadRadius}px ${colorBoxShadow.value}`;
    display.parentElement.parentElement.nextElementSibling.children[1].children[4].textContent = `box-shadow: ${valuesSliceX}px ${valuesSliceY}px ${valuesBlurRadius}px ${valuesSpreadRadius}px ${colorBoxShadow.value};`;
}