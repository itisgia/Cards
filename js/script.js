
	(function() {

		//global var
	  var store = []
		var makeCard = document.getElementById('subbmit');
		var images = document.getElementById('image');
		var background = document.getElementById('background');
		var font = document.getElementById('font');
		var border = document.getElementById('border');
    var cardImage = document.getElementById('cardImage');
		var message = document.getElementById('message');
		//making new style sheet to change ::After element in js
		var styleElem = document.head.appendChild(document.createElement("style"));
		var styleEle = document.head.appendChild(document.createElement("style"));
		var styleEl = document.head.appendChild(document.createElement("style"));


	//TEST
	//when the button is clicked this fuction happens
	$('#subbmit').click(function(){
		 pictureChange();
	}); // submit functuon ENDS


	// change images of card with if / else statement
	// if image's value is this, change the attribute
 function pictureChange(){

	 if (images.value == 'christmas'){
		 cardImage.src = 'assets/christmas.jpg';
	 } else if(images.value == 'birthday') {
		 cardImage.src = 'assets/birthday.jpg';
	 } else{
		 cardImage.src = 'assets/valentines.jpg';
	 }
	 backgroundColor();
	 fontChnage();
	 borderChange();
 }

 //background color Chage functuon

 function backgroundColor(){


	 var back = document.getElementsByClassName('celadonBackground');
	 if (background.value == 'celadon') {
			styleElem.innerHTML = ".celadonBackground>div, .celadonBackground:after  {background: #9dcc78}"
	 } else if(background.value == 'graphite') {
		 styleElem.innerHTML = ".celadonBackground>div, .celadonBackground:after  {background: #aaa}"
	 } else {
		 styleElem.innerHTML = ".celadonBackground>div, .celadonBackground:after  {background: #F7C3EA}"

	 }

 }

 //font chane function

 function fontChnage() {
	 var h1 = document.getElementsByClassName('sketch');
	 if (font.value == 'handwriting') {
		 	h1["0"].innerHTML = message.value
			h1["0"].style.fontFamily = 'Pacifico'
	 } else if (font.value == 'sketch') {
		 h1["0"].innerHTML = message.value
		 h1["0"].style.fontFamily = 'Fredericka the Great'

	 }else{
		 h1["0"].innerHTML = message.value
		 h1["0"].style.fontFamily = 'Sigmar One'

	 }

 }

 function borderChange (){

	 if (border.value == 'thin') {
     styleEle.innerHTML = ".card>div, .card:after {border: 1em solid transparent;-webkit-border-image: url(assets/border.png) 33.3333333333333% round }"

	 }else if (border.value == 'thick') {
	 	styleEle.innerHTML = ".card>div, .card:after {border: 2em solid transparent;-webkit-border-image: url(assets/border.png) 33.3333333333333% round } "
	} else {
		styleEle.innerHTML = ".card>div, .card:after {border: 1em solid transparent;-webkit-border-image: url(assets/border.png) 25% round }"
	}
	}

		}()); //iife ENDS
