let toggler =  document.querySelector(".toggler")
let nav = document.querySelector(".drop-nav")
let nav_con = document.querySelector(".navbar1") 
let one = document.querySelector(".first")
let two = document.querySelector(".second")
let three = document.querySelector(".third")

function toggleAction(){
    nav.classList.toggle("dropped-nav");
    nav_con.classList.toggle("navbar2");
    one.classList.toggle('first2');
    two.classList.toggle("second2");
    three.classList.toggle("third2");
}

toggler.addEventListener('click', toggleAction)

console.log(nav_con)