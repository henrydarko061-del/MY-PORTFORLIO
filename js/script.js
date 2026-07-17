/* ==========================
   Henry Darko Portfolio JS
========================== */



// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});





// Typing Animation

const typingText = document.querySelector(".typing");


const words = [

"IT Graduate",

"Graphic Designer",

"Web Developer",

"ICT Educator"

];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;



function typeEffect(){


let currentWord = words[wordIndex];


if(!deleting){

    typingText.textContent =
    currentWord.substring(0,charIndex++);


    if(charIndex > currentWord.length){

        deleting = true;

        setTimeout(typeEffect,1000);

        return;

    }


}

else{


    typingText.textContent =
    currentWord.substring(0,charIndex--);


    if(charIndex === 0){

        deleting = false;

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex = 0;

        }

    }


}


setTimeout(typeEffect,100);



}


typeEffect();








// Close mobile menu when link clicked


document.querySelectorAll(".nav-links a")
.forEach(link=>{


link.addEventListener("click",()=>{

navLinks.classList.remove("active");


});


});








// Back To Top Button


const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


if(window.scrollY > 400){

    topBtn.style.display="block";

}

else{

    topBtn.style.display="none";

}


});



topBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});








// Scroll Reveal Animation


const revealElements = document.querySelectorAll(
".section, .skill-card, .project-card, .certificate-card"
);



function reveal(){


revealElements.forEach(element=>{


let position = element.getBoundingClientRect().top;


let screenHeight = window.innerHeight;



if(position < screenHeight - 100){


element.style.opacity="1";

element.style.transform="translateY(0)";


}


});


}



window.addEventListener("scroll", reveal);






// Initial Animation Style


revealElements.forEach(element=>{


element.style.opacity="0";

element.style.transform="translateY(40px)";

element.style.transition="0.8s ease";


});


reveal();
