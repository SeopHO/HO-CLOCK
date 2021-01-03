// https://spicyyoghurt.com/tutorials/html5-javascript-game-development/images-and-sprite-animations

let WIDTH = 30;
let HEIGHT = 30;

let SPRITE_HEIGHT = 30;
let SPRITE_WIDTH = 30;

const img = new Image();

window.onload = () => 
{
    img.src = './images/Evee_Movement.png';
}

img.onload=()=>
{
    const world = document.getElementById('pet');
    world.style.width = `${WIDTH}px`;
    world.style.height = `${HEIGHT}px`;   
    world.style.background = '#eee';

    const sprite = document.createElement('div');
    sprite.style.height = `${SPRITE_HEIGHT}px`;
    sprite.style.width = `${SPRITE_WIDTH}px`;

    sprite.style.backgroundImage = `url(${img.src})`;
    world.appendChild(sprite);

    sprite.style.backgroundPosition = '50px 0px';
}






