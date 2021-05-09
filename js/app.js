/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
/**
 
 * Define Global Variables
 * 
*/ 
const Fragm = document.createDocumentFragment();
const Secs = document.querySelectorAll('section');
const Ul = document.querySelector('#navbarlist');
/**
 * End Global Variables*/


//top button
 var abutton = document.getElementById("myBtn");

 // When scrolling down 20px from the top of the page, show the button
 window.onscroll = function() {whenscroll()};
 
 function whenscroll() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	 abutton.style.display = "block";
     } else {
	 abutton.style.display = "none";
     }
 }
 
 // When clicking on the button, it will scroll to the top of the page.
 function TopTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


// build the nav

// Scroll to anchor ID using scrollIntoView event
//Scroll to section on link click

Secs.forEach( function (element){
	const SdataNav = element.getAttribute('data-nav');
	const newLi = document.createElement('li');
	const NewLink = document.createElement('a');
	const  txtnode = document.createTextNode(SdataNav);
	 
	 NewLink.setAttribute('class','menu__link');
	 NewLink.setAttribute("href", `#${SdataNav}`);
	 NewLink.addEventListener('click', function (e){
		e.preventDefault();
		 element.scrollIntoView({behavior: "smooth"});
	 })

	 NewLink.appendChild(txtnode);
	 newLi.appendChild(NewLink);
	 Fragm.appendChild(newLi);
	 
  });
  Ul.appendChild(Fragm);
  
  
 

// Add class 'active' to section when near top of viewport
function Activesec (element){
  const position = element.getBoundingClientRect();
  const barlinks = document.querySelectorAll('a');
  
  
    if (position.top > 100 && position.top < 300){
		if (!element.classList.contains('your-active-class')){
			Secs.forEach(function (element){

				element.classList.remove('your-active-class');
				
			})
		     element.classList.add('your-active-class');
			 barlinks.forEach(function(NewLink){
				if ( element.getAttribute('data-nav') == NewLink.textContent){
				  NewLink.style.background = "#001632";
					 }else {NewLink.style.background="transparent"}
				   })
		
			}        
	
		} 
}
 
	 

/**
 * End Main Functions
 * 
 * 
 * Begin Events
 * 
*/

// Set sections as active

 window.addEventListener('scroll', function() {
	 Secs.forEach(function (element){
	 Activesec(element);
	 })
		 
  });

  /*
 the End 
  */ 
 


  		