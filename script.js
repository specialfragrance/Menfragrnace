```javascript id="n6y4bt"
// SCROLL REVEAL ANIMATION

const reveals = document.querySelectorAll(".reveal");


function revealOnScroll(){

    reveals.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const visiblePoint = 120;


        if(elementTop < windowHeight - visiblePoint){

            element.classList.add("active");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();




// COUNTDOWN TIMER

let totalSeconds = 24 * 60 * 60;


const timer = document.getElementById("timer");


function updateTimer(){

    let hours = Math.floor(totalSeconds / 3600);

    let minutes = Math.floor((totalSeconds % 3600) / 60);

    let seconds = totalSeconds % 60;


    hours = hours < 10 ? "0" + hours : hours;

    minutes = minutes < 10 ? "0" + minutes : minutes;

    seconds = seconds < 10 ? "0" + seconds : seconds;


    if(timer){

        timer.innerHTML = 
        hours + ":" + minutes + ":" + seconds;

    }


    if(totalSeconds > 0){

        totalSeconds--;

    }

}


setInterval(updateTimer,1000);

updateTimer();





// MOBILE MENU


const menuButton = document.querySelector(".menu");

const navigation = document.querySelector("nav ul");


if(menuButton){

menuButton.addEventListener("click",()=>{


    if(navigation.style.display==="flex"){

        navigation.style.display="none";

    }

    else{

        navigation.style.display="flex";

        navigation.style.flexDirection="column";

        navigation.style.position="absolute";

        navigation.style.top="80px";

        navigation.style.right="30px";

        navigation.style.background="#111";

        navigation.style.padding="30px";

    }


});

}





// CLOSE MENU AFTER CLICK


document.querySelectorAll("nav a").forEach(link=>{


link.addEventListener("click",()=>{

if(window.innerWidth < 900){

navigation.style.display="none";

}

});


});





// BUTTON EFFECT


document.querySelectorAll(".gold-btn").forEach(button=>{


button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});


button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});


});
```
