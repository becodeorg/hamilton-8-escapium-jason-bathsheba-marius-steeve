



fetch("/rooms.json")
    .then(response => response.json())
    .then(cards => {
        generateRooms(cards); 
    });

function generateRooms(json) {
    for(let cards of json) {
    //
    const sectionCard = document.querySelector(".cardRoom");

    //
    const cardElement = document.createElement("article");
    cardElement.style.backgroundImage ='linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)),url("' + cards["photos"][0] +'")';
    cardElement.style.backgroundPosition = '50%';
    cardElement.style.backgroundRepeat = 'no-repeat';
    cardElement.style.backgroundSize = 'cover';
    cardElement.className = "card" + " all "; 

    /*switch (cards['difficulty']){
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

    }*/


    //
    const levels = document.createElement("div");
    levels.className = "card__levels";
    while (levels.children.length < 5) {
        let lock = document.createElement('i');
        lock.className = "fa-solid fa-lock";
        if (levels.children.length < cards['difficulty']){
            lock.style.color = '#F60B0E';
        }
        levels.append(lock);
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
    user.append(userIcon);
    user.append(userText);
    //
    const time = document.createElement('div');
    const timeIcon = document.createElement('i');
    timeIcon.className = "fa-regular fa-clock";
    const timeText = document.createElement('p');
    timeText.innerText = cards['minutes'];
    //
    time.append(timeIcon);
    time.append(timeText);
    //
    const location = document.createElement('div');
    const locationIcon = document.createElement('i');
    locationIcon.className = "fa-solid fa-location-dot";
    const locationText = document.createElement('p');
    locationText.innerText = cards['location'];
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
    //
     
    }
}

generateRooms(json);

/*const filter = document.getElementsByTagName("input");

for(let input of filter){
    input.addEventListener('change', e=>{
        for(let checkbox of input){
            if(checkbox.checked){
                checkbox.checked = false;
            }
        }
        input.checked = true;
    });
}*/

// Ajout du listener pour filtrer les pièces non abordables
/*const btnEasy = document.querySelector(".easy");
btnEasy.addEventListener("click", function () {
   const easyFilter = pieces.filter(function (card) {
       return card.difficulty == 2;
   });
   // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
  document.querySelector(".cardRoom").innerHTML = "";
  generateRooms(easyFilter);
});*/

const btnEasy = document.querySelector(".easy");
 
 btnEasy.addEventListener("click", function () {
     const cardEasyRoom = cards.filter(function (card) {
         return card.difficulty == 2;
     });
     document.querySelector(".cardRoom").innerHTML = "";
     generateRooms(cardEasyRoom);
 });