const body = document.querySelector('body');

let bgcnt=1;

function bgset()
{
    let urlString = 'url(images/bg' + bgcnt + '.png)';
    body.style.backgroundImage = urlString;
    body.style.backgroundSize = '100% 100%';
    console.log(false);
    
}

function bgLoad()
{
    console.log(true);
    
    body.addEventListener('onload',bgset);
}

function init()
{
    bgLoad();
}

init();
