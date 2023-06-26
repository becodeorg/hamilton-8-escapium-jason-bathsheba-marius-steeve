
const reponse = await fetch("/rooms.json");
const cards = await reponse.json();



function generateRoom(cards){
for (let i = 0; i < cards.length; i++) {
const roomLevels = cards[i];
const sectionCard = document.querySelector(".cardRoom");
const cardElement = document.createElement("article");
    cardElement.className = "card";
    cardElement.style.backgroundImage ='linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)),url("' + roomLevels["photos"][0] +'")';
    cardElement.href = '../pages_html/single_room.html?name=' + roomLevels['name'];
    cardElement.style.backgroundPosition = '50%';
    cardElement.style.backgroundRepeat = 'no-repeat';
    cardElement.style.backgroundSize = 'cover';
    


        const levels = document.createElement("div");
        levels.className = "card__levels";
        while (levels.children.length < 5) {
            let lock = document.createElement('i');
            lock.className = "fa-solid fa-lock";
            if (levels.children.length < roomLevels['difficulty']){
                lock.style.color = '#F60B0E';
            }
            levels.append(lock);
        }

        const nomElement = document.createElement("p");
        nomElement.innerText = roomLevels['name'];
        nomElement.className = "card__name";
        //
        const description = document.createElement("div");
        description.className ="card__description";

        const user = document.createElement("div");
        const userIcon = document.createElement("i");
        userIcon.className = "fa-solid fa-user-group";
        const userText = document.createElement("p");
        userText.innerText = roomLevels['players'][0] + "-" + roomLevels['players'][1];
        //
        user.append(userIcon);
        user.append(userText);
        //
        const time = document.createElement('div');
        const timeIcon = document.createElement('i');
        timeIcon.className = "fa-regular fa-clock";
        const timeText = document.createElement('p');
        timeText.innerText = roomLevels['minutes'];
        //
        time.append(timeIcon);
        time.append(timeText);
        //
        const location = document.createElement('div');
        const locationIcon = document.createElement('i');
        locationIcon.className = "fa-solid fa-location-dot";
        const locationText = document.createElement('p');
        locationText.innerText = roomLevels['location'];
        //
        location.append(locationIcon);
        location.append(locationText);
        //
        //
        description.append(user);
        description.append(time);
        description.append(location);
        //
        cardElement.append(levels);
        cardElement.append(nomElement);
        cardElement.append(description);
        //
        
        //
        sectionCard.append(cardElement); 

    }
}

generateRoom(cards);
generateRoom(cards);

const btnAll = document.querySelector(".all");
    btnAll.addEventListener("click", function(){
        const cardsAll = cards.filter(function(card) {
            return card.difficulty <= 5;
        });
        document.querySelector(".cardRoom").innerHTML = "";
     generateRoom(cardsAll);
     generateRoom(cardsAll);
    });



    const btnEasy = document.querySelector(".easy");
    btnEasy.addEventListener("click", function(){
        const cardsEasy = cards.filter(function(card) {
            return card.difficulty == 2;
        });
        document.querySelector(".cardRoom").innerHTML = "";
     generateRoom(cardsEasy);
     generateRoom(cardsEasy);
    });

    const btnNormal = document.querySelector(".normal");
    btnNormal.addEventListener("click", function(){
        const cardsNormal = cards.filter(function(card) {
            return card.difficulty == 3;
        });
        document.querySelector(".cardRoom").innerHTML = "";
     generateRoom(cardsNormal);
     generateRoom(cardsNormal);
    });

    const btnHard = document.querySelector(".hard");
    btnHard.addEventListener("click", function(){
        const cardsHard = cards.filter(function(card) {
            return card.difficulty == 4;
        });
        document.querySelector(".cardRoom").innerHTML = "";
     generateRoom(cardsHard);
     generateRoom(cardsHard);
    });

    

    
    