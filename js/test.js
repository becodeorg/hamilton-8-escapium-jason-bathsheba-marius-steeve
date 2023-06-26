const reponse = await fetch("/rooms.json");
const cards = await reponse.json();

function generateRoom(cards){
    for (let i = 0; i < cards.length; i++) {
    const roomLevels = cards[i];
    const sectionCard = document.querySelector(".otherRoom");
    const cardElement = document.createElement("article");
        cardElement.className = "card";
        cardElement.style.backgroundImage ='linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)),url("' + roomLevels["photos"][0] +'")';
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

    


    let previous = document.getElementById('other_previous');
    let next = document.getElementById('other_next');
    
    previous.addEventListener('click', ()=>{
    
        if(window.innerWidth <= 650){
                if(posInitCarrousel > 0) {
                    posInitCarrousel -= 1;
                    generateRoom(posInitCarrousel, 1);
                }
    
            }else {
                if(posInitCarrousel > 0) {
                    posInitCarrousel -= 1;
                    generateRoom(posInitCarrousel, 3);
                }
            }
    
    });

    next.addEventListener('click', ()=>{

        if(window.innerWidth <= 650){
            if(posInitCarrousel < jsonSize-1) {
                posInitCarrousel += 1;
                generateRoom(posInitCarrousel, 1);
            }
        }else {
            if(posInitCarrousel < jsonSize -3) {
                posInitCarrousel += 1;
                generateRoom(posInitCarrousel, 3);
            }
        }

});
    

