const imageSlider = document.querySelectorAll(".slide");
const arrowPre = document.getElementById("arrow-left");
const arrowNext = document.getElementById("arrow-right");

let current_Slide_Value=1; //Slider value
let CURRENT_SLIDER = "current_Slide_Value";

let SlideOnOf=true;
// let current_Slide_Value = localStorage.getItem(CURRENT_SLIDER);
//-------------------------Slider-------------------------
function saveImage(value)
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
    imageSlider[current_Slide_Value-1].style.display="block";
    current_Slide_Value--;
    saveImage(current_Slide_Value);
}

function nextSlide()
{
    resetImage();
    imageSlider[current_Slide_Value+1].style.display="block";
    current_Slide_Value++;
    saveImage(current_Slide_Value);
}

arrowPre.addEventListener("click",function()
{
    if(current_Slide_Value===0)
    {
        current_Slide_Value = imageSlider.length;
    }
    preSlide();
});

arrowNext.addEventListener("click",function()
{
    if(current_Slide_Value===imageSlider.length-1)
    {
        current_Slide_Value = -1;
    }
    nextSlide();
});

function init()
{
    startSlide();
}

init();