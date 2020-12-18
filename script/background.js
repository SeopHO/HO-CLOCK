const imageSlier = document.querySelectorAll(".slide");

const arrowPre = document.getElementById("arrow_left");
const arrowNext = document.getElementById("arrow_right");

let currentValue;


function manage()
{
    for(let i=0;i<imageSlier.length;i++)
    {
        imageSlier[i].style.display = "none";
        if(i === currentValue)
        {
            imageSlier[currentValue].style.display="block";
            continue;
        }
    }
}

function viewimage(currentValue)
{
}

function init()
{

}

init();