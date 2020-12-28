const slide_toggle = document.querySelector(".slide-toggle");
const arrow = document.querySelector(".arrow");
let slideOnOf=false;

let current_bg_status;

let BG_STATUS = "background status";

let Interval=0;
let opc;

function fadeIn()
{
    Interval = setInterval(showIn,10);
}

function showIn()
{
    opc=0;
    if(opc<7)
    {
        opc++;
        arrow.style.opacity="0."+opc;
    }
    else
    {
        clearInterval(Interval);
    }

}


slide_toggle.addEventListener("click",function(){
    if(slideOnOf===false)
    {
        fadeIn();
        slideOnOf=true;

    }
    else if(slideOnOf===true)
    {
        slideOnOf=false;

    }

    init();

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