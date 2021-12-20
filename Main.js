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


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


