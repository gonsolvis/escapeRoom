const chest = document.getElementById("lockMarker")
const lockImg = document.getElementById("imgLock")
const inputs = document.getElementById("numInputs")
const closingTag = document.getElementById("closingTag")
const clue1 = document.getElementById("clue1Marker")
const clue1Img = document.getElementById("clue1")
console.log(clue1)
chest.addEventListener("click", ()=>{
    lockImg.style.display="block"
    inputs.style.display="flex"
})
        
closingTag.addEventListener("click",()=>{
    inputs.style.display="none"
    lockImg.style.display="none"
})



