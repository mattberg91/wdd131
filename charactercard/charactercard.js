
const characterCard = {
    name: 'character-card',
    image: 'snortleblat.png',
    
    
    
    
    
    
    stats: [
        { statName: 'Level', statValue: 5 },
        { statName: 'Health', statValue: 100 },
    ],



};


console.log(characterCard.name);
console.log(characterCard.image);






document.querySelector('img').setAttribute('src', characterCard.image);
document.querySelector('img').setAttribute('alt', characterCard.name);































