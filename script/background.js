const imageSlider = document.querySelectorAll(".slide");
const arrowPre = document.getElementById("arrow-left");
const arrowNext = document.getElementById("arrow-right");

const slide_toggle = document.querySelector(".slide-toggle");

let bgValue=null;
const CURRENT_BG_VALUE_LS = "Current-Background-Value";

let bgVisible=false; 
const BG_VISIBLE_LS = "Background-Visible";


let opc;

function savelocal()
{
    localStorage.setItem(CURRENT_BG_VALUE_LS,bgValue);
    localStorage.setItem(BG_VISIBLE_LS,bgVisible);
}

function resetImage()
{
    for(let i=0;i<imageSlider.length;i++)
    {
        imageSlider[i].style.display = "none";
    }
}

function load()
{

}

function startImage()
{
    // resetImage();
    imageSlider[localStorage.getItem(CURRENT_BG_VALUE_LS)].style.display="block";
}

function preImage()
{
    resetImage();
    imageSlider[bgValue-1].style.display="block";
    bgValue--;
    savelocal(bgValue);
}

function nextImage()
{
    resetImage();
    imageSlider[bgValue+1].style.display="block";
    bgValue++;
    savelocal(bgValue);
}

arrowPre.addEventListener("click",function()
{
    if(bgValue===0)
    {
        bgValue = imageSlider.length;
    }
    preImage();
});

arrowNext.addEventListener("click",function()
{
    if(bgValue===imageSlider.length-1)
    {
        bgValue = -1;
    }
    nextImage();
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
        if(opc<0)
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
        startImage();
        ArrowOn();
    }
    else if(bool === false)
    {
        console.log(0);
        resetImage();
        ArrowOff();
    }
}

slide_toggle.addEventListener("click",function()
{
    if(bgVisible===false)
    {
        bgVisible = true;
        savelocal();
        judge(true);
    }
    else if(bgVisible===true)
    {
        bgVisible = false;
        savelocal();
        judge(false);

    }
});

window.addEventListener('load', function()
{
    savelocal();
    if(bgVisible === false)
    {
        judge(false);
    }
    else
    {
        judge(true);
    }
});


function BGinit()
{

}

BGinit();
