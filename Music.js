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

function PriceAir(){
    document.getElementById("Air").style.display= "block";
}

function PricePro(){
    document.getElementById("Pro").style.display= "block";
}

function closeAir(){
    document.getElementById("Air").style.display= "none";
}

function closePro(){
    document.getElementById("Pro").style.display= "none";
}