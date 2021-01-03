const clock = document.querySelector('.viewClock');
const analog_clock = document.querySelector('.analog-container');

const analog_toggle = document.querySelector(".analog-toggle");

let analogVisible=false; 
const ANAL_VISIBLE_LS = "Analog-Visible"; 

function clockJudge()
{
    if(analogVisible === false)
    {
        analog_clock.style.display = "none";
        clock.style.display="block";
        digitClock();
    }
    else if(analogVisible === true)
    {
        analog_clock.style.display = "flex";
        clock.style.display="none";
        analogClock();
    }
}

function digitClock()
{
    setInterval(digitGetTime,1000);
}

function analogClock()
{
    setInterval(analogGetTime,1000);
}

function analogGetTime()
{
    let day = new Date();

    const deg = 6;
    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#mn");
    const sc = document.querySelector("#sc");
    
    let hh = day.getHours() *30;
    let mm = day.getMinutes() *deg;
    let ss = day.getSeconds() *deg;



    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    
}

function digitGetTime()
{
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    clock.innerText = `${digitDetail(hour)}:${digitDetail(min)}:${digitDetail(sec)}`;
}
function digitDetail(value)
{
    let ret;
    if(value<10)
        ret = '0'+value;
    else
        ret = value;

    return ret;
}

analog_toggle.addEventListener("click",function()
{
    if(analogVisible === false)
    {
        analogVisible = true;
        console.log(true);
        clockJudge();
    }
    else if(analogVisible === true)
    {
        analogVisible = false;
        console.log(false);
        clockJudge();
    }
});

function init()
{
    clockJudge();
}


init();