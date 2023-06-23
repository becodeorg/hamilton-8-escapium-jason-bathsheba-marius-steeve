


fetch("/rooms.json")
    .then(response => response.json())
    .then(json => {
        generateRooms(json); // appel createRooms une fois les données récupérer
    });

function generateRooms(json) {
    for(const cards of json) {
    //
    const sectionCard = document.querySelector(".cardRoom");
    //const cardElement = document.createElement("article");
    //
    const cardElement = document.createElement("div");
    cardElement.style.backgroundImage ='linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)),url("' + cards["photos"][0] +'")';
    cardElement.style.backgroundPosition = '50%';
    cardElement.style.backgroundRepeat = 'no-repeat';
    cardElement.style.backgroundSize = 'cover';
    cardElement.className = "card" + " all "; 

    switch (cards['difficulty']){
        case 1:
            cardElement.className += 'easy';
            break;
        case 2:
            cardElement.className += 'easy';
            break;
        case 3:
            cardElement.className += 'normal';
            break;
        case 4:
            cardElement.className += 'hard';
            break;
        case 5:
            cardElement.className += 'hard';
            break;

    }


    //
    const levels = document.createElement("div");
    levels.className = "card__levels";
    while (levels.children.length < 5) {
        let lock = document.createElement('i');
        lock.className = "fa-solid fa-lock";
        if (levels.children.length < cards['difficulty']){
            lock.style.color = '#F60B0E';
        }
        levels.appendChild(lock);
    }
    //
    const nomElement = document.createElement("p");
    nomElement.innerText = cards['name'];
    nomElement.className = "card__name";
    //
    const description = document.createElement("div");
    description.className ="card__description";

    const user = document.createElement("div");
    const userIcon = document.createElement("i");
    userIcon.className = "fa-solid fa-user-group";
    const userText = document.createElement("p");
    userText.innerText = cards['players'][0] + "-" + cards['players'][1];
    //
    user.appendChild(userIcon, userText);
    //
    const time = document.createElement('div');
    const timeIcon = document.createElement('i');
    timeIcon.className = "fa-regular fa-clock";
    const timeText = document.createElement('p');
    timeText.innerText = cards['minutes'];
    //
    time.appendChild(timeIcon, timeText);
    //
    const location = document.createElement('div');
    const locationIcon = document.createElement('i');
    locationIcon.className = "fa-solid fa-location-dot";
    const locationText = document.createElement('p');
    locationText.innerText = cards['location'];
    //
    location.appendChild(locationIcon, locationText);
    //
    //
    description.appendChild(user, time, location);
    //
    cardElement.appendChild(levels);
    cardElement.appendChild(nomElement);
    cardElement.appendChild(description);
    //
    sectionCard.appendChild(cardElement);    
    }
}

//generateRooms(json);

const buttonAll = document.querySelector(".btnAll");
 
 buttonAll.addEventListener("click", function () {
     const allRoom = json.filter(function (json) {
         return json.difficulty == 5;
     });
     document.querySelector(".fiches").innerHTML = "";
     generateRooms(allRoom);
 });

 const buttonEasy = document.querySelector(".btnEasy");
 
 buttonEasy.addEventListener("click", function () {
     const easyRoom = json.filter(function (json) {
         return json.difficulty == 2;
     });
     document.querySelector(".fiches").innerHTML = "";
     generateRooms(easyRoom);
 });