const slide_toggle = document.querySelector(".slide-toggle");

let slideOnOf=false;

function test()
{
    console.log(slideOnOf);    
}

slide_toggle.addEventListener("click",function(){
    if(slideOnOf===false)
        slideOnOf=true;
    else if(slideOnOf===true)
        slideOnOf=false;

    test();
});