let toggler =  document.querySelector(".toggler")
let nav = document.querySelector(".drop-nav")
let nav_con = document.querySelector(".navbar1") 
let one = document.querySelector(".first")
let two = document.querySelector(".second")
let three = document.querySelector(".third")
let card = document.querySelectorAll(".food")
let button = document.createElement("button")
button.className = "addMenu"
button.textContent = "Add to Menu"

function displayCard(b){
    card[b].appendChild(button)
}

function toggleAction(){
    nav.classList.toggle("dropped-nav");
    nav_con.classList.toggle("navbar2");
    one.classList.toggle('first2');
    two.classList.toggle("second2");
    three.classList.toggle("third2");
}

for (let i = 0; i < card.length; ++i){
    let b = i
    card[i].addEventListener('mouseover', function(){displayCard(b)})
}

toggler.addEventListener('click', toggleAction)
