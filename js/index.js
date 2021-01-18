//Event 1 : Click
//Clicking the h1 will add a skew with random values
document.querySelector("h1").addEventListener('click', (event) => {
	const x = Math.floor(Math.random() * Math.floor(25));
	const y = Math.floor(Math.random() * Math.floor(25));
    event.target.style.transform = `skew(${x}deg, ${y}deg)`;
});

//Event 2: Mouseover
//When the mouse moves over the Home link it will be set it to a random color (thanks to https://css-tricks.com/snippets/javascript/random-hex-color/)
document.querySelector('a:first-of-type').addEventListener('mousemove', (event) => {	//RESEARCH: can this be done with a target of a:hover??
    randColor= Math.floor(Math.random()*16777215).toString(16);
	event.target.style.backgroundColor = `#${randColor}`;
});

//Event 3 : Mouseenter
//When the top img has a mouse enter it the page gets sad and fades away!
document.querySelector('img').addEventListener('mouseenter', (event) => {
	document.body.style.opacity = '20%';
});

//Event 4 :  Mouseleave
//When the top img has a mouse leave it page stops being sad and comes back to its full power!
document.querySelector('img').addEventListener('mouseleave', (event) => {
	document.body.style.opacity = '100%';
});

//Event 5: Drag
//Clicking and dragging  "Welcome To Fun Bus!" will change its color to red.
document.querySelector('h2').addEventListener('drag', (event) => {
	event.target.style.color = 'red';
});

//Event 6: Dragenter
//When the text "Welcome To Fun Bus!" is dragged to the footer the footer changes background color to green
document.addEventListener('dragenter', (event) => {
	if (event.target.className == "drophere"){
		event.preventDefault();
		event.target.style.backgroundColor = 'green';
	}
});
//Event  7:  Keypress
//Pressing w sends a message
document.addEventListener('keypress', (event) => {
	// making the keys readable so we can do things with only some keys
	const key = event.key;
		if (key == "w"){
		alert("DUDE! You found the W key. thats neat!");
	}   
});

//Event  8: auxclick
//Clicking on "Fun In The Sun" with a auc click makes it grow
document.querySelector('h4').addEventListener('auxclick', (event) => {
	// event.preventDefault();
	event.target.style.transform = 'scale(3)';
});

// Event  9:  load
// Page just keeps on loading... if you uncomment the reload 
window.addEventListener('load', (event) => {
	//location.reload();
   });

//Event  10: mousedown
//The first p element rotated when the mouse is "down" on it
document.querySelector('p').addEventListener('mousedown', (event) => {
	event.target.style.transform = `rotate(154deg)`;
   });


   //propagation
   document.querySelector(".destination").addEventListener("click", (event) => {
	event.target.style.backgroundColor = "purple";
 })
 document.querySelector(".destination .btn").addEventListener("click", (event) => {
	event.stopPropagation(); 
	//uncomment to allow red background.
	event.target.style.backgroundColor = "orangered";
 });

//stop default
document.querySelectorAll('.nav-link').forEach(element =>{
	element.addEventListener('click', (event) => {
		event.preventDefault();
	})});