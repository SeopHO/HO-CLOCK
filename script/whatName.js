const form = document.querySelector(".whatName");
const input = document.querySelector("input");

const viewName = document.getElementById("viewName");

const USER = "currentUser";

function askName()
{   
    form.addEventListener('submit',handleSubmit);
}

function saveName(text)
{
    localStorage.setItem(USER,text);
    // showName(currentUser);
}

function showName(name)
{
    form.style.display = 'none';
    viewName.innerText = `Hello! ${name}`;
}

function handleSubmit(event)
{
    event.preventDefault();
    const UserValue = input.value;
   
    saveName(UserValue);
    showName(UserValue);
}

function loadName()
{
    const currentUser = localStorage.getItem(USER);

    if(currentUser === null)
    {
        askName();
    }
    else
    {
        showName(currentUser);
    }
}

function init()
{
    loadName();
}

init();