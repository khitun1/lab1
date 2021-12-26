document.body.onload = function() 
{
    setTimeout(function()
    {
        let preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done'))
            preloader.classList.add('done');
    }, 500);
}


function Price12(){
    document.getElementById("Price12").style.display = "block";
}

function PriceMini(){
    document.getElementById("PriceMini").style.display = "block";
}

function PriceXr(){
    document.getElementById("PriceXr").style.display = "block";
}

function CloseP12(){
    document.getElementById("Price12").style.display = "none";
}

function ClosePMini(){
    document.getElementById("PriceMini").style.display = "none";
}

function ClosePXr(){
    document.getElementById("PriceXr").style.display = "none";
}
