const form = document.querySelector(".whatName");
const input = document.querySelector("input");

const viewName = document.getElementById("viewName");

const USER = "currentUser";

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

function saveName(text)
{
    localStorage.setItem(USER,text);

}

function handleSubmit(event)
{
    event.preventDefault();
    const UserValue = input.value;
    saveName(UserValue);
}

function askName()
{   
    viewName.style.display = 'block';
}

function showName(currentUser)
{
    viewName.style.display = 'none';
    viewName.innerHTML = `Hello! ${currentUser}`;
}

function init()
{
    loadName();
    form.addEventListener('submit',handleSubmit);

}

init();