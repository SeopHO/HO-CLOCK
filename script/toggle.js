const slide_toggle = document.querySelector(".slide-toggle");
const arrowPre = document.getElementById("arrow-left");
const arrowNext = document.getElementById("arrow-right");

let slideOnOf=false;

let current_bg_status;

let BG_STATUS = "background status";


function ArrowOn()
{   
    // arrowNext.style.opacity=0.4;
    // arrowPre.style.opacity=0.4;

    let Interval = setInterval(function()
    {
        opc=0;
        if(opc<4)
        {
            opc++;
            console.log(opc);
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
    console.log('opc 0');
    
    arrowNext.style.opacity=0;
    arrowPre.style.opacity=0;
}

slide_toggle.addEventListener("click",function(){
    if(slideOnOf===false)
    {
        slideOnOf=true;
        if(slideOnOf===true)
        {
            ArrowOn();
            startSlide();
        }
    }
    else if(slideOnOf===true)
    {
        slideOnOf=false;
        if(slideOnOf===false)
        {
            ArrowOff();
            resetImage();
        }

    }

    BGinit();

});

function load_slide_toggle()
{
    localStorage.setItem(BG_STATUS,slideOnOf);
}

function LoadToggle()
{
    load_slide_toggle();
}

LoadToggle();