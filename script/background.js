const imageSlider = document.querySelectorAll(".slide");

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

function BGinit()
{
    loadImage();
    // if(slideOnOf===true)
    // {
    //     ArrowOn();
    //     startSlide();
    // }
    // else if(slideOnOf===false)
    // {
    //     ArrowOff();
    //     resetImage();
    // }
}
BGinit();