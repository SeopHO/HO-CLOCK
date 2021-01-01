const imageSlider = document.querySelectorAll(".slide");
const arrowPre = document.getElementById("arrow-left");
const arrowNext = document.getElementById("arrow-right");

const slide_toggle = document.querySelector(".slide-toggle");

let bgValue=null;
const CURRENT_BG_VALUE_LS = "Current-Background-Value";

let bgVisible=false; 
const BG_VISIBLE_LS = "Background-Visible";

let visited = false;
const VISITED_LS = "Visited";


let opc;

function savelocal()
{
    localStorage.setItem(CURRENT_BG_VALUE_LS,bgValue);
    localStorage.setItem(BG_VISIBLE_LS,bgVisible);
    localStorage.setItem(VISITED_LS,visited);
}

function resetImage()
{
    for(let i=0;i<imageSlider.length;i++)
    {
        imageSlider[i].style.display = "none";
    }
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

function fadeIn(value) 
{
    switch (value) 
    {
        case 'Arrow':
            arrowNext.style.display="block";
            arrowNext.style.display="block";
            opc = 0;
            let Interval = setInterval(function (){
                if (opc < 4) 
                {
                    opc++;
                    console.log(opc);

                    arrowNext.style.opacity = `0.` + opc;
                    arrowPre.style.opacity = `0.` + opc;
                }
                else 
                {
                    console.log('clear');
                    clearInterval(Interval);

                }
            }, 50);

    }

}

function fadeOut(value) 
{
    switch (value) 
    {
        case 'Arrow':
            opc = 4;
            let Interval = setInterval(function () {
                if (opc > 0) {
                    opc--;
                    console.log(opc);

                    arrowNext.style.opacity = `0.` + opc;
                    arrowPre.style.opacity = `0.` + opc;
                }
                else {
                    console.log('clear');
                    clearInterval(Interval);
                    arrowNext.style.display="none";
                    arrowNext.style.display="none";

                }
            }, 50);

    }

}

function judge(bool)
{
    if(bool === true)
    {
        console.log(1);
        startImage();
        fadeIn('Arrow');
    }
    else if(bool === false)
    {
        console.log(0);
        resetImage();
        fadeOut('Arrow');
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

    if(visited === false)
    {
        bgValue=0;
        visited=true;
        savelocal();
    }

    if(bgVisible === false)
    {
        judge(false);
    }
    else
    {
        judge(true);
    }
});
