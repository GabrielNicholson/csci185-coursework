const makeBigger = () => {
   // style.fontSize="40pt"
   document.querySelector("h1").style.fontSize="40pt";
   document.querySelector("p").style.fontSize="40pt";
   // alert('make bigger!');
};

const makeSmaller = () => {
   document.querySelector("h1").style.fontSize="20pt";
   document.querySelector("p").style.fontSize="20pt";
   // style.fontSize="15pt"
   // alert('make smaller!');
};

/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/
