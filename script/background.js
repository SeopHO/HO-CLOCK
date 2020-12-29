const imageSlider = document.querySelectorAll(".slide");
const arrowPre = document.getElementById("arrow-left");
const arrowNext = document.getElementById("arrow-right");
const arrow = document.querySelector(".arrow");


let CURRENT_SLIDER = "current_Slide_Value";

let opc;

// https://stackoverflow.com/questions/5104053/fade-effect-using-javascript-no-jquery


let current_Slide_Value=null;

// let current_Slide_Value = localStorage.getItem(CURRENT_SLIDER);
//-------------------------Slider-------------------------
function saveImage(value=current_Slide_Value)
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
function loadImage()
{
    if(current_Slide_Value===null)
    {
        current_Slide_Value = 0;
        saveImage(current_Slide_Value);
    }
}
function startSlide()
{
    resetImage();
    imageSlider[localStorage.getItem(CURRENT_SLIDER)].style.display="block";
}

function ArrowOn()
{   
    // arrowNext.style.opacity=1;
    // arrowPre.style.opacity=1;

    let Interval = setInterval(function()
    {
        opc=0;
        if(opc<5)
        {
            opc++;
            arrowNext.style.opacity=`0.`+opc;
            arrowPre.style.opacity=`0.`+opc;
        }
        else
        {
            clearInterval(Interval);
        }
    },1000);
}

function ArrowOff()
{
    arrowNext.style.opacity=0;
    arrowPre.style.opacity=0;

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
    loadImage();
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
}
init();