const imageSlider = document.querySelectorAll(".slide");
const arrowPre = document.getElementById("arrow-left");
const arrowNext = document.getElementById("arrow-right");

let currentValue=1; //Slider value
let CURRENT_SLIDER = "currentValue";
// let currentValue = localStorage.getItem(CURRENT_SLIDER);
//-------------------------Slider-------------------------
function saveImage(value=currentValue)
{
    localStorage.setItem(CURRENT_SLIDER,value);
}


function resetImage()
{
    for(let i=0;i<imageSlider.length;i++)
    {
        imageSlider[i].style.display = "none";
    }
}

function startSlide()
{
    resetImage();
    imageSlider[localStorage.getItem(CURRENT_SLIDER)].style.display="block";
}

function preSlide()
{
    resetImage();
    imageSlider[currentValue-1].style.display="block";
    currentValue--;
    saveImage(currentValue);
}

function nextSlide()
{
    resetImage();
    imageSlider[currentValue+1].style.display="block";
    currentValue++;
    saveImage(currentValue);

}

arrowPre.addEventListener("click",function()
{
    if(currentValue===0)
    {
        currentValue = imageSlider.length;
    }
    preSlide();
});

arrowNext.addEventListener("click",function()
{
    if(currentValue===imageSlider.length-1)
    {
        currentValue = -1;
    }
    nextSlide();
});

function init()
{
    saveImage();
    startSlide();
}

init();