document.body.onload = function() 
{
    setTimeout(function()
    {
        var preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done'))
        {
            preloader.classList.add('done');
        }
    }, 500);
}

function Price6(){
    document.getElementById("Price6").style.display= "block";
}

function PriceSe(){
    document.getElementById("PriceSe").style.display= "block";
}

function PriceNike(){
    document.getElementById("PriceNike").style.display= "block";
}

function close6(){
    document.getElementById("Price6").style.display= "none";
}

function closeSe(){
    document.getElementById("PriceSe").style.display= "none";
}

function closeNike(){
    document.getElementById("PriceNike").style.display= "none";
}