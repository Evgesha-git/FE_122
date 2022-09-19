const div = document.querySelector('.red');
const div2 = document.querySelector('.blue');
const div3 = document.querySelector('.green');


div.addEventListener('click', function(e){
    // e.stopPropagation();
    alert(e.target.innerText);
});

div2.addEventListener('click', function(e){
    // e.stopPropagation();
    alert(e.target.innerText);
});

div3.addEventListener('click', function(e){
    // e.stopPropagation();
    alert(e.target.innerText);
}, true);