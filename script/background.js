const imageSlider = document.querySelectorAll(".slide");
const arrowPre = document.getElementById("arrow-left");
const arrowNext = document.getElementById("arrow-right");

const slide_toggle = document.querySelector(".slide-toggle");

let bgValue=0;
const CURRENT_BG_VALUE_LS = "Current-Background-Value";

let bgVisible=false; 
const BG_VISIBLE_LS = "Background-Visible";


function savelocal()
{
    localStorage.setItem(CURRENT_BG_VALUE_LS,bgValue);
    localStorage.setItem(BG_VISIBLE_LS,bgVisible);

}

function saveImage(value=current_Slide_Value)
{

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
     saveImage(current_Slide_Value);
}

function startImage()
{
    resetImage();
    imageSlider[localStorage.getItem(CURRENT_SLIDER)].style.display="block";
}

function preImage()
{
    resetImage();
    imageSlider[current_Slide_Value-1].style.display="block";
    current_Slide_Value--;
    saveImage(current_Slide_Value);
}

function nextImage()
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
    preImage();
});

arrowNext.addEventListener("click",function()
{
    if(current_Slide_Value===imageSlider.length-1)
    {
        current_Slide_Value = -1;
    }
    nextImage();
});

slide_toggle.addEventListener("click",function()
{
    if(slideOnOf===false)
    {
        slideOnOf = true;
        judge(true);
    }
    else if(slideOnOf===true)
    {
        slideOnOf = false;
        judge(false);

    }
});

function ArrowOn()
{   
    let Interval = setInterval(function()
    {
        if(opc<4)
        {
            opc++;
            arrowNext.style.opacity=`0.`+opc;
            arrowPre.style.opacity=`0.`+opc;
        }
        else
        {
            console.log('clear');
            clearInterval(Interval);
        }
    },1000);
}

function ArrowOff()
{    
    let Interval = setInterval(function()
    {
        if(opc>0)
        {
            opc--;
            arrowNext.style.opacity=`0.`+opc;
            arrowPre.style.opacity=`0.`+opc;
        }
        else
        {
            console.log('clear');
            clearInterval(Interval);
        }
    },1000);
}

function judge(bool)
{
    if(bool === true)
    {
        console.log(1);
        ArrowOn();
    }
    else if(bool === false)
    {
        console.log(0);
        ArrowOff();
    }
}

