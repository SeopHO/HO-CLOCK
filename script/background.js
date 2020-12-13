const body = document.querySelector('body');
const nextBtn = document.querySelector('.right-arrow');
const beforeBtn = document.querySelector('.left-arrow');

let bgcnt=0;

window.onload = function()
{
    let urlString = 'url(images/bg' + bgcnt + '.png)';
    body.style.backgroundImage = urlString;
    body.style.backgroundSize = '100% 100%';
    console.log(false);
}

function init()
{   
    
}