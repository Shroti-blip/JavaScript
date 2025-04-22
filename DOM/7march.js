// document.querySelector(), document.getElementById()   - innerText, innerHTML, textContent   - 
// Adding and removing elements (appendChild(), remove()) 

const element = document.querySelector('.my-class'); // Selects the first element with class 'my-class'
// Sets or gets the visible text of an element.
element.innerText = 'Hello, World!';


// Sets or gets the HTML content of an element.
element.innerHTML = '<span style="color: red;">Hello, World!</span>';


// Sets or gets the text content of an element, including hidden elements.
element.textContent = '<b>Hello, World!</b>'; // Displays as plain text

