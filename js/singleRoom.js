const reponse = await fetch("/rooms.json");
const slides = await reponse.json();


//document.getElementById('tonId').src = "image" + Math.floor(Math.random() * nbImage) + ".png";

function generateheader(slides){
for (let i = 0; i < slides.length; i++){
    const roomSlides = slides[i];

const headerSlider = document.querySelector(".headerSlider");
const slideElement = document.createElement("article");
slideElement.className = "slide";
slideElement.style.backgroundImage ='linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)),url("' + roomSlides["photos"][0] +'")';
slideElement.style.backgroundPosition = '50%';
slideElement.style.backgroundRepeat = 'no-repeat';
slideElement.style.backgroundSize = 'cover';

headerSlider.append(slideElement);

 } 
}


function randBackground(){

}
generateheader(slides);

//console.log(slides);

