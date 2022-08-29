let hash33 = document.querySelectorAll('a[href="#hash3"]');
console.log(hash33);

console.log(hash33[0].closest("li"));
console.log(hash33[0].closest('ul'));
console.log(hash33[0].closest('body'));

console.log(hash33[0].closest('.class')); //Null