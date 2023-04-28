console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted');
}

function mouseoverImg(e) {
	e.preventDefault()
	alert("Hello gorgeous");
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let image = document.getElementById('cat-image');

image.addEventListener('mouseover', mouseoverImg)



