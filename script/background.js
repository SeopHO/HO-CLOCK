const imageSlider = document.querySelectorAll(".slide");
const arrowPre = document.getElementById("arrow-left");
const arrowNext = document.getElementById("arrow-right");

let CURRENT_SLIDER = "current_Slide_Value";
let PAST_SLIDER = "Past_Slide_Value";

let Past_Slide_Value;
let current_Slide_Value;

// let current_Slide_Value = localStorage.getItem(CURRENT_SLIDER);
//-------------------------Slider-------------------------
function saveImage(value=current_Slide_Value,Past_Slide_Value)
{
    localStorage.setItem(CURRENT_SLIDER,value);
    localStorage.setItem(PAST_SLIDER,Past_Slide_Value);
}

function resetImage()
{
    for(let i=0;i<imageSlider.length;i++)
    {
        imageSlider[i].style.display = "none";
    }
}
function loadImage()
{
    // console.log('지남');
    current_Slide_Value=localStorage.getItem(CURRENT_SLIDER);
    saveImage(current_Slide_Value);
    if(Past_Slide_Value===null)
    {
        Past_Slide_Value =0;
    }

    if(slideOnOf===true)
    {
        ArrowOn();
        startSlide();
    }
    else if(slideOnOf===false)
    {
        ArrowOff();
        resetImage();
    }
    // if(current_Slide_Value===undefined || current_Slide_Value===0)
    // {
    //     current_Slide_Value=0;
    //     saveImage(current_Slide_Value);
    // }
    // else
    //     return;
}
function startSlide()
{
    resetImage();
    imageSlider[localStorage.getItem(CURRENT_SLIDER)].style.display="block";
}

function ArrowOn()
{   
    arrowNext.style.display="block";
    arrowPre.style.display="block";
}

function ArrowOff()
{
    arrowNext.style.display="none";
    arrowPre.style.display="none";
}

function preSlide()
{
    resetImage();
    imageSlider[current_Slide_Value-1].style.display="block";
    current_Slide_Value--;
    Past_Slide_Value--;
    saveImage(current_Slide_Value,Past_Slide_Value);
}

function nextSlide()
{
    resetImage();
    imageSlider[current_Slide_Value+1].style.display="block";
    current_Slide_Value++;
    Past_Slide_Value++;
    saveImage(current_Slide_Value,Past_Slide_Value);
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
    loadImage();
}

init();