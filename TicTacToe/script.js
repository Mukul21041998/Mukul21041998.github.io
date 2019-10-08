var squares = document.querySelectorAll("td");

var restart = document.querySelector("#button");

restart.addEventListener("click", refresh)

function refresh()
{
    location.href = "index.html";
}


for(var i = 0 ; i < squares.length ; i++)
{
    squares[i].textContent = '';
}

for(var j = 0 ; j < squares.length ; j++)
{
    squares[j].addEventListener("click", changeMe)
}

function changeMe()
{
    if(this.textContent == '')
    {
        this.textContent = 'O';
    }

    else if(this.textContent == "O")
    {
        this.textContent = 'X';
    }

    else
    {
        this.textContent = ''
    }
}










