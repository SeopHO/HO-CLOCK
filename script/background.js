const imageSlider = document.querySelectorAll(".slide");
const arrowPre = document.getElementById("arrow-left");
const arrowNext = document.getElementById("arrow-right");

let currentValue=0;

//clear all images
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
    imageSlider[0].style.display="block";
}

function preSlide()
{
    resetImage();
    imageSlider[currentValue-1].style.display="block";
    currentValue--;
}

function nextSlide()
{
    resetImage();
    imageSlider[currentValue+1].style.display="block";
    currentValue++;
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
    startSlide();
}

init();