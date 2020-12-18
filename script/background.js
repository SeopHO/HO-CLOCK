const imageSlier = document.querySelectorAll(".slide");

const arrowPre = document.getElementById("arrow-left");
const arrowNext = document.getElementById("arrow-right");

let currentValue=null;
let sliderSize = imageSlier.length-1;

function manage(currentValue=0)
{
    if(currentValue > sliderSize)
        currentValue= currentValue-sliderSize
    else if(currentValue < 0)
        currentValue=imageSlier.length-1;

    for(let i=0;i<imageSlier.length;i++)
    {
        imageSlier[i].style.display = "none";
        if(i === currentValue)
        {
            imageSlier[currentValue].style.display="block";
            continue;
        }
    }
}

function pre()
{
    currentValue--;
    console.log(currentValue-1);
    manage(currentValue-1);
    
}

function next()
{
    currentValue++;
    console.log(currentValue-1);
    manage(currentValue-1);
}

function init()
{
    console.log(imageSlier.length);
    
    arrowPre.addEventListener("click",pre);
    arrowNext.addEventListener("click",next);
}



init();