const slide_toggle = document.querySelector(".slide-toggle");
let slideOnOf=false;

let current_bg_status;

let BG_STATUS = "background status";



slide_toggle.addEventListener("click",function(){
    if(slideOnOf===false)
    {

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