const reponse = await fetch("/rooms.json");
const slides = await reponse.json();


/******************************** Generate Header ********************************/

function generateHeader(slides){
    const roomSlides = slides[0];

const headerSlider = document.querySelector(".headerSlider");

const slideElement = document.createElement("article");
slideElement.className = "slide";
slideElement.style.backgroundImage ='linear-gradient(180deg,rgba(0,0,0,0.5)0%, rgba(0,0,0,0.8)60%,rgba(27, 27, 27, 1) 100%),url("' + roomSlides["photos"][0] +'")';
slideElement.style.backgroundPosition = '50%';
slideElement.style.backgroundRepeat = 'no-repeat';
slideElement.style.backgroundSize = 'cover';

const backgroundMist = document.createElement("div");
backgroundMist.className = "slide__mist";



const nomElement = document.createElement("h1");
nomElement.innerText = roomSlides['name'];
nomElement.className = "slide__title";


backgroundMist.appendChild(nomElement);
slideElement.append(backgroundMist);
headerSlider.append(slideElement);
    }

generateHeader(slides);

/******************************** Generate Info Room ********************************/

function generateInfo(slides){

    const roomText = slides[0];

const sectionData = document.querySelector(".data");

const description = document.createElement("article");
description.className ="data__description";

        const levels = document.createElement("div");
        levels.className = "data__levels";
        while (levels.children.length < 5) {
            let lock = document.createElement('i');
            lock.className = "fa-solid fa-lock";
            if (levels.children.length < roomText['difficulty']){
                lock.style.color = '#F60B0E';
            }
            levels.append(lock);
        }

        const user = document.createElement("div");
        user.className = "data__user";
        const userIcon = document.createElement("i");
        userIcon.className = "fa-solid fa-user-group";
        const userText = document.createElement("p");
        userText.innerText = roomText['players'][0] + "-" + roomText['players'][1];
        const userSubtile = document.createElement("span");
        userSubtile.textContent = 'PLAYERS';

        //
        user.append(userIcon,userText, userSubtile);
        //
        const time = document.createElement('div');
        time.className = "data__time";
        const timeIcon = document.createElement('i');
        timeIcon.className = "fa-regular fa-clock";
        const timeText = document.createElement('p');
        timeText.innerText = roomText['minutes'];
        const timeSubtile = document.createElement("span");
        timeSubtile.textContent = 'MINUTES';
        //
        time.append(timeIcon, timeText, timeSubtile);
        //


description.append(levels, user, time);

sectionData.append(description);

}

generateInfo(slides);

/******************************** Carousel Header Random ********************************/

function rand10(max){
        return Math.floor(Math.random()*(max + 1))
    }

const btnSliderOne = document.querySelector(".slideOne");
    btnSliderOne.addEventListener("click", function(){
        const sliderPhotos = slides.filter(function(slide){
            return slide.difficulty <= rand10(5);
        });
        document.querySelector(".headerSlider").innerHTML = "";
        generateHeader(sliderPhotos);
    })
const btnSliderTwo = document.querySelector(".slideTwo");
    btnSliderTwo.addEventListener("click", function(){
        const sliderPhotos = slides.filter(function(slide){
            return slide.difficulty <= rand10(5);
        });
        document.querySelector(".headerSlider").innerHTML = "";
        generateHeader(sliderPhotos);
    })
    const btnSliderThree = document.querySelector(".slideThree");
    btnSliderThree.addEventListener("click", function(){
        const sliderPhotos = slides.filter(function(slide){
            return slide.difficulty <= rand10(5);
        });
        document.querySelector(".headerSlider").innerHTML = "";
        generateHeader(sliderPhotos);
    })
    const btnSliderFour = document.querySelector(".slideFour");
    btnSliderFour.addEventListener("click", function(){
        const sliderPhotos = slides.filter(function(slide){
            return slide.difficulty <= rand10(5);
        });
        document.querySelector(".headerSlider").innerHTML = "";
        generateHeader(sliderPhotos);
    })

/********************************  Carousel Others Rooms ********************************/



    
   