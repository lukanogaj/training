// Add the elements will gonna work
// const container = document.getElementsByClassName('container');

// Create the elements with JS (h, ul, li, a, icons)
// const mainDiv = document.createElement('div');
const div = document.createElement('div');
const heading = document.createElement('h1');
const ul = document.createElement('ul');
const li = document.createElement('li');
const link = document.createElement('a');

// Add id and class to the elements
// mainDiv.className = 'container';
div.className = 'hero';
heading.className = 'task-title';
ul.className = 'task-collection';
li.className = 'task-item';
link.className = 'task-link';

// Add icon into Html link element
link.innerHTML = '<i class = "fa fa-remove"></i>';

// Append elements into html container div
document.querySelector('div.container').appendChild(div);

// console.log(mainDiv, div, heading, ul, li, link);
console.log(div);
