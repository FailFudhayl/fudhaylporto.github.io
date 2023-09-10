const txtElement = ['Mahasiswa', 'Programmer', 'Web Developer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 500);

})(); 

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;


function myFunction() {
if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
} else {
    navbar.classList.remove("sticky");
}
}