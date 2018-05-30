/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("mainNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


/* Responsive nav with dropdown */

Vue.component('navigation', {
  template: '<nav class="topnav" id="mainNav"><a href="index.html"><img src="images/fesc-logo-130x29.png" alt="florida energy systems consortium" class="logo"></a><div class="dropdown"><button class="dropbtn">Energy systems <i class="fa fa-caret-down"></i></button><div class="dropdown-content"><a href="solar.html">Solar Energy</a><a href="wind.html">Wind Power</a><a href="water.html">Water &amp; Ocean</a><a href="fuel.html">Fuel &amp; Biomass</a><a href="storage.html">Storage &amp; Delivery</a><a href="nuclear.html">Nuclear Energy</a></div></div><a href="about.html">About</a><a href="contact.html">Contact</a><a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fas fa-bars fa-lg"></i></a></nav>'
}),

  
/* Hero section, including Twitter share button */
  
Vue.component('hero', {
  props: ['page', 'headline', 'subhead'],
  template: '<header><div><p><a href="index.html">Home</a> {{ page }} </p><h1> {{ headline }} </h1><p> {{ subhead }} </p><p><a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Wow"> Tweet</a></p></div></header>' 
}),


/* Footer section */

Vue.component('foot', {
  template: '  <footer class="section group"><div class="col span_4_of_12"><h6>Research &amp; education</h6><p><a href="solar.html">Solar Energy</a></p><p><a href="wind.html">Wind Power</a></p><p><a href="water.html">Water &amp; Ocean</a></p><p><a href="fuel.html">Fuel &amp; Biomass</a></p><p><a href="storage.html">Storage &amp; Delivery</a></p><p><a href="nuclear.html">Nuclear Energy</a></p></div><div class="col span_4_of_12"><h6>Connect</h6><p><a href="about.html">About FESC</a></p><p><a href="contact.html">Contact Us</a></p><p><a href="#" aria-label="Event"><span aria-hidden="true"><i class="fab fa-facebook fa-2x"></i></span> <span class="sr-only">facebook icon</span></a><a href="#" aria-label="Event"><span aria-hidden="true"><i class="fab fa-twitter fa-2x"></i></span> <span class="sr-only">twitter icon</span></a><a href="#" aria-label="Event"><span aria-hidden="true"><i class="fab fa-instagram fa-2x"></i></span> <span class="sr-only">instagram icon</span></a><a href="#" aria-label="Event"><span aria-hidden="true"><i class="fab fa-linkedin fa-2x"></i></span> <span class="sr-only">Linkedin icon</span></a></p></div><div class="col span_12_of_12"><p>© 2018 Copyright - <strong>Florida Energy (FESC)</strong></p></div></footer>'
})