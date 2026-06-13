
const characterCard = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'snortleblat.png',
    
    
    attacked() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            document.querySelector('#message').textContent =
                `${this.name} has died!`;
        }

        updateCard();

    },

    levelUp() {
        this.level++;
        updateCard();
    }


};


function updateCard() {
    document.querySelector('#characterName').textContent = characterCard.name;
    document.querySelector('#characterClass').textContent = characterCard.class;
    document.querySelector('#characterLevel').textContent = characterCard.level;
    document.querySelector('#characterHealth').textContent = characterCard.health;
    document.querySelector('#characterimg').src = characterCard.image;

}


document.querySelector("#attackBtn").addEventListener("click", function () {
    characterCard.attacked();
});


document.querySelector("#levelUpBtn").addEventListener("click", function () {
    characterCard.levelUp();
});

updateCard();





















