const body = document.querySelector('body');

let bgcnt=3;

window.onload = function()
{
    let urlString = 'url(images/bg' + bgcnt + '.png)';
    body.style.backgroundImage = urlString;
    body.style.backgroundSize = '100% 100%';
    console.log(false);
}


