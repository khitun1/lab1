
const likes = document.querySelectorAll("#like div");

let btn_prev = document.querySelector('#Carousel12 .buttons .prev');
let btn_next = document.querySelector('#Carousel12 .buttons .next');
let images = document.querySelectorAll('#Carousel12 .Photos img');

let btn_prev1 = document.querySelector('#CarouselMini .buttons .prev');
let btn_next1 = document.querySelector('#CarouselMini .buttons .next');
let images1 = document.querySelectorAll('#CarouselMini .Photos img');

let btn_prev2 = document.querySelector('#CarouselXr .buttons .prev');
let btn_next2 = document.querySelector('#CarouselXr .buttons .next');
let images2 = document.querySelectorAll('#CarouselXr .Photos img');

let i = 0, s = 0, t = 0;

for (let img of images)
{
    img.ondragstart = drag;
}

for (let img of images1)
{
    img.ondragstart = drag;
}

for (let img of images2)
{
    img.ondragstart = drag;
}



function drag(event)
{
    event.dataTransfer.setData('id', event.target.id);
}

for(let like of likes)
{
    like.ondragover = allowDrop;
    like.ondrop = drop;

}


function allowDrop(event)
{
    event.preventDefault();
}

function drop(event)
{
    
    let itemId = event.dataTransfer.getData('id');
    let Copy = document.getElementById(itemId).cloneNode(true);
    event.target.append(Copy);
}



btn_next.onclick = function(){
    images[i].style.display = 'none';
    i++;
    if(i >= images.length){
        i = 0; 
    }
    images[i].style.display = 'block';
}

btn_prev.onclick = function(){
    images[i].style.display = 'none';
    i--;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}

btn_next1.onclick = function(){
    images1[s].style.display = 'none';
    s++;
    if(s >= images1.length){
        s = 0; 
    }
    images1[s].style.display = 'block';
}

btn_prev1.onclick = function(){
    images1[s].style.display = 'none';
    s--;
    if(s < 0){
        s = images1.length - 1;
    }
    images1[s].style.display = 'block';
}

btn_next2.onclick = function(){
    images2[t].style.display = 'none';
    t++;
    if(t >= images2.length){
        t = 0; 
    }
    images2[t].style.display = 'block';
}

btn_prev2.onclick = function(){
    images2[t].style.display = 'none';
    t--;
    if(t < 0){
        t = images2.length - 1;
    }
    images2[t].style.display = 'block';
}

function Open12(){
    document.getElementById("Carousel12").style.display = "block";
}

function OpenMini(){
    document.getElementById("CarouselMini").style.display = "block";
}

function OpenXr(){
    document.getElementById("CarouselXr").style.display = "block";
}

function Close12(){
    document.getElementById("Carousel12").style.display = "none";
}

function CloseMini(){
    document.getElementById("CarouselMini").style.display = "none";
}

function CloseXr(){
    document.getElementById("CarouselXr").style.display = "none";
}


