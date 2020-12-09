const clock = document.querySelector('.viewClock');

function getTime()
{
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    clock.innerText = `${detail(hour)}:${detail(min)}:${detail(sec)}`;
}
function detail(value)
{
    let ret;
    if(sec<10)
        ret = '0'+value;
    else
        ret = value;

    return ret;
}

function init()
{
    setInterval(getTime,1000);
}

init();