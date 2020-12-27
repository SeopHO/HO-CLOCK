const slide_toggle = document.querySelector(".slide-toggle");

let slideOnOf=false;

let current_bg_status;

let BG_STATUS = "background status";

function test()
{
    console.log(slideOnOf);    
}

slide_toggle.addEventListener("click",function(){
    if(slideOnOf===false)
        slideOnOf=true;
    else if(slideOnOf===true)
        slideOnOf=false;

    init();

    save_slide_toggle(slideOnOf);
});

function load_slide_toggle()
{
    localStorage.setItem(BG_STATUS,slideOnOf);
}

function save_slide_toggle()
{

}

function LoadToggle()
{
    load_slide_toggle();
}

LoadToggle();