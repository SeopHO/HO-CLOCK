const imageSlider = document.querySelectorAll(".slide");
const arrowPre = document.getElementById("arrow-left");
const arrowNext = document.getElementById("arrow-right");

const slide_toggle = document.querySelector(".slide-toggle");
const snow_toggle = document.querySelector(".snow-toggle");

// const snow_fall = document.getElementById("snow_fall");
const snow_fall = document.querySelector(".particles-js-canvas-el");

// const snow_fall = document.querySelector(".particles-js-canvas-el");

let bgValue=null;
const CURRENT_BG_VALUE_LS = "Current-Background-Value";

let bgVisible=false; 
const BG_VISIBLE_LS = "Background-Visible"; 

let visited = false;
const VISITED_LS = "Visited";

let snowVisible = false;
const SNOW_VISIBLE_LS = "Snow Visible";

let bgLsValue=localStorage.getItem(CURRENT_BG_VALUE_LS);

let opc;

function savelocal()
{
    localStorage.setItem(CURRENT_BG_VALUE_LS,bgValue);
    localStorage.setItem(BG_VISIBLE_LS,bgVisible);
    localStorage.setItem(VISITED_LS,visited);
    localStorage.setItem(SNOW_VISIBLE_LS,snowVisible);
}

function ImageForSnow(value)
{
    switch(value)
    {
        case 0:
            snow_fall.style.backgroundImage="url('./images/bg0.jpg')";
            break;
        case 1:
            snow_fall.style.backgroundImage="url('./images/bg1.jpg')";
            break;
        case 2:
            snow_fall.style.backgroundImage="url('./images/bg2.jpg')";
            break;
    }
}

function resetImage()
{
    for(let i=0;i<imageSlider.length;i++)
    {
        imageSlider[i].style.display = "none";
        // imageSlider[i].style.opacity = 0;
    }
}

function resetImageForSnow()
{
    snow_fall.style.backgroundImage="";
}

function viewImage()
{
    resetImage();
    
    // imageSlider[bgLsValue].style.display="block";

    if(snowVisible === true && bgVisible === true)
    {
        resetImage();
        ImageForSnow(bgValue);
    }
    else if(bgVisible === true)
    {
        imageSlider[bgValue].style.display="block";
    }
    
    // imageSlider[localStorage.getItem(CURRENT_BG_VALUE_LS)].style.opacity=1;
}

function preImage()
{
    resetImage();
    // imageSlider[bgValue-1].style.display="block";
    bgValue--;
    savelocal(bgValue);
    if(snowVisible === true && bgVisible === true)
    {
        ImageForSnow(bgValue);
    }
    else if(bgVisible === true)
    {
        imageSlider[bgValue].style.display="block";
    }
    // imageSlider[bgValue].style.display="block";

}

function nextImage()
{
    resetImage();

    // imageSlider[bgValue+1].style.display="block";
    bgValue++;
    savelocal(bgValue);
    if(snowVisible === true && bgVisible === true)
    {
        resetImage();
        ImageForSnow(bgValue);
    }
    else if(bgVisible === true)
    {
        imageSlider[bgValue].style.display="block";
    }
    // imageSlider[bgValue].style.display="block";
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
                    // console.log(opc);

                    arrowNext.style.opacity = `0.` + opc;
                    arrowPre.style.opacity = `0.` + opc;
                }
                else 
                {
                    // console.log('clear');
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
                    // console.log(opc);

                    arrowNext.style.opacity = `0.` + opc;
                    arrowPre.style.opacity = `0.` + opc;
                }
                else {
                    // console.log('clear');
                    clearInterval(Interval);
                    arrowNext.style.display="none";
                    arrowNext.style.display="none";

                }
            }, 50);
    }
}


slide_toggle.addEventListener("click",function()
{
    if(bgVisible===false)
    {
        bgVisible = true;
        savelocal();
        judge();
    }
    else if(bgVisible===true)
    {
        bgVisible = false;
        savelocal();
        judge();
    }
});

snow_toggle.addEventListener("click",function()
{
    if(snowVisible===false)
    {
        snowVisible = true;
        savelocal();  
        judge();
    }
    else if(snowVisible===true)
    {
        snowVisible = false;
        savelocal();
        judge();

    }
});


//처음 켰을 때,
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
        judge();
    }
    else if(bgVisible === true)
    {
        judge();
    }

    if(snowVisible===false)
    {
        judge();
    }
    else if(snowVisible === true)
    {
        judge();
    }
});

function judge()
{
    if(bgVisible === true)
    {
        viewImage();
        fadeIn('Arrow');
    }
    else if(bgVisible === false)
    {
        resetImage();
        resetImageForSnow();
        fadeOut('Arrow');
    }

    if(snowVisible === true)
    {
        snow_fall.style.display="block";
    }
    else if(snowVisible === false)
    {
        snow_fall.style.display="none";
    }
}
