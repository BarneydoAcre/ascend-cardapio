var shoppButton = document.querySelector('.shopp');
var areaShopp = document.querySelector('.area-shopp');
var closeShopp = document.querySelector('.close-shopp');
var behind = document.querySelector('.behind');
var shoppIcon = document.querySelector('.shopp-icon');


shoppButton.addEventListener('click', ()=>{
    areaShopp.classList.add('active');
    behind.classList.add('active-behind');

});

shoppIcon.addEventListener('click', ()=>{
    areaShopp.classList.add('active');
    behind.classList.add('active-behind');

});

closeShopp.addEventListener('click', ()=>{
    areaShopp.classList.remove('active');
    behind.classList.remove('active-behind');
});

behind.addEventListener('click', ()=>{
    areaShopp.classList.remove('active');
    behind.classList.remove('active-behind');
});


// animações

document.onload = ()=>{
    alert("onijdv")
}