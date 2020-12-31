const imageSlider = document.querySelectorAll(".slide");
const arrowPre = document.getElementById("arrow-left");
const arrowNext = document.getElementById("arrow-right");

const slide_toggle = document.querySelector(".slide-toggle");

let bgValue=null;
const CURRENT_BG_VALUE_LS = "Current-Background-Value";

let bgVisible=false; 
const BG_VISIBLE_LS = "Background-Visible";

let visitCnt=null;
let firstVIsit=null;
const VISIT_LS = "Visit-Count";

let opc;

function savelocal(bgValue,bgVisible,visitCnt)
{
    localStorage.setItem(CURRENT_BG_VALUE_LS,bgValue);
    localStorage.setItem(BG_VISIBLE_LS,bgVisible);
    localStorage.setItem(VISIT_LS,visitCnt);
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
     savelocal(bgValue,bgVisible,visitCnt);
}

function startImage()
{
    resetImage();
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
        judge(true);
    }
    else if(bgVisible===true)
    {
        bgVisible = false;
        judge(false);

    }
});

function BGinit()
{
    if(visitCnt === 0)
    {
        
    }
    else
    {

    }
}

BGinit();
