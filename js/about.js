/* Vue app for navigation and hero components */

var aboutApp = new Vue({
  el: '#about-app',
  data: {  }
})

/* Vue app for footer component */

var footerApp = new Vue({
  el: '#footer-app',
  data: {  }
})


/* board member section data */
var boardmembers = [
  {
    position: "Board Chairman",
    fullName: "J.L. Martinez",
    credentials: "President, 27 Consulting",
    website: "",
    headshot: "",
  },
  {
    position: "Board member",
    fullName: "Ben Amaba, PhD",
    credentials: "Worldwide Executive, PE, CPIM®, LEED® AP",
    website: "",
    headshot: "",
  },
  {
    position: "Board member",
    fullName: "Tommy Boroughs",
    credentials: "Partner, Holland & Knight, LLP",
    website: "",
    headshot: "",
  },
  {
    position: "Board member",
    fullName: "Timothy L. Bryant",
    credentials: "PE, Senior Manager External Affairs, NextEra Energy, Inc.",
    website: "",
    headshot: "",
  },
  {
    position: "Board member",
    fullName: "Gustavo R. Cepero",
    credentials: "Vice President, Florida Crystals Corporation",
    website: "",
    headshot: "",
  },
  {
    position: "Board member",
    fullName: "Christopher Fountas",
    credentials: "Partner, Arsenal Venture Partners",
    website: "",
    headshot: "",
  },
  {
    position: "Board member",
    fullName: "Nick Gladding",
    credentials: "Attorney at Law, PA",
    website: "",
    headshot: "",
  },
  {
    position: "Board member",
    fullName: "Jennifer Grove",
    credentials: "Community Development Manager, Gulf Power Company",
    website: "",
    headshot: "",
  },
  {
    position: "Board member",
    fullName: "Dan Holladay",
    credentials: "Executive Director, BRIDG, University of Central Florida ORC",
    website: "",
    headshot: "",
  },
  {
    position: "Board member",
    fullName: "Byron A. Knibbs",
    credentials: "Vice President, Sustainable Services Dept, Orlando Utilities Commission",
    website: "",
    headshot: "",
  },
  {
    position: "Board member",
    fullName: "Tom Lawery",
    credentials: "Wholesale Renewables Manager, Distributed Energy Resources, Duke Energy",
    website: "",
    headshot: "",
  },
  {
    position: "Board member",
    fullName: "Richard Paul-Hus",
    credentials: "President - INcomm, Owner - Hypower",
    website: "",
    headshot: "",
  },
  {
    position: "Board member",
    fullName: "Roy Periana",
    credentials: "Director, Scripps Energy Laboratories",
    website: "",
    headshot: "",
  },
  {
    position: "Board member",
    fullName: "Thomas L. Hernandez",
    credentials: "Senior Vice President, Business Strategy and Renewables, Tampa Electric Company",
    website: "",
    headshot: "",
  },
  {
    position: "Board member",
    fullName: "Jeremy L. Susac",
    credentials: "Vice President, Government Affairs, Lennar Ventures",
    website: "",
    headshot: "",
  },
  {
    position: "Board member",
    fullName: "Brian Yablonski",
    credentials: "External Affairs Director, Gulf Power Company",
    website: "",
    headshot: "",
  },
  {
    position: "Board member",
    fullName: "Paul Zombo P.E.",
    credentials: "Manager, Gas Turbine Engineering",
    website: "",
    headshot: "",
  },
]
 
//function contactCard(){
//  // select element with id "target"
//  var container = document.getElementById("board");
//
//  // give it a class of "parent"
//  container.classList.add("parent");
//
//
//  // loop through the university array, and for each create a listing like:
//  //  <div class="contact-card col span_4_of_12">
////       <img src="images/David-Norton-200x230.jpg" class="clip-circle" alt="David Norton photo">
////       <h4>Dr. David Norton</h4>
////       <p>Interim Director, FESC</p>
////       <a href="mailto:dpnorton@ufl.edu">dpnorton@ufl.edu</a>
////     </div>
//  
//  for(var i=0; i<boardmembers.length; i++){
//    var div = document.createElement("div"); 
//    div.setAttribute("class", "contact-card");
//    
//    var h5V = document.createElement("h5");
//    h5V.innerHTML = boardmembers[i].position;
//    console.log(h5V);
//    
//    var imgV = document.createElement("img");
//    imgV.setAttribute("src", "images/cat.png");
//    imgV.setAttribute("class", "clip-circle");
//    
//    var h4V = document.createElement("h4");
//    h4V.innerHTML = boardmembers[i].fullName;
//    console.log(h4V);
//    
//    var pV = document.createElement("p");
//    pV.innerHTML = boardmembers[i].credentials;
//    console.log(pV);
//    
//    div.appendChild(h5V);
//    div.appendChild(imgV);
//    div.appendChild(h4V);
//    div.appendChild(pV);
//
//    container.appendChild(div);
//  }
//}
//
//contactCard()



var univ = [
  {
    website: "http://www.ufl.edu/",
    name: "University of Florida (UF)",
    image: "images/ufl-logo-150x149.png",
  },
  {
    website: "http://www.fsu.edu/",
    name: "Florida State University (FSU)",
    image: "images/fsu-logo-150x150.png",
  },
  {
    website: "http://www.ucf.edu/",
    name: "University of Central Florida (UCF)",
    image: "images/ucf-logo-150x146.png",
  },
  {
    website: "http://www.usf.edu/",
    name: "University of South Florida (USF)",
    image: "images/usf-logo-150x105.png",
  },
  {
    website: "http://www.famu.edu/",
    name: "Florida A&M University (FAMU)",
    image: "images/famu-logo-150x150.png",
  },
  {
    website: "http://www.fau.edu/",
    name: "Florida Atlanta University (FAU)",
    image: "images/fau-logo-150x149.png",
  },
  {
    website: "http://www.fgcu.edu/",
    name: "Florida Gulf Coast University (FGCU)",
    image: "images/fgcu-logo-150x148.png",
  },
  {
    website: "http://www.fiu.edu/",
    name: "Florida International University (FIU)",
    image: "images/fiu-logo-150x117.png",
  },
  {
    website: "http://www.ncf.edu/",
    name: "New College of Florida (NCF)",
    image: "images/ncf-logo-150x150.png",
  },
  {
    website: "http://www.unf.edu/",
    name: "University of North Florida (UNF)",
    image: "images/unf-logo-150x150.png",
  },
  {
    website: "http://www.uwf.edu/",
    name: "University of West Florida (UWF)",
    image: "images/uwf-logo-150x150.png",
  },
  {
    website: "http://floridapolytechnic.org/",
    name: "Florida Polytechnic University (FPU)",
    image: "images/fpu-logo-150x104.png",
  },
]

/* Vue app for main section */
var aboutMain = new Vue({
  el: '#main',
  data: {
    people: boardmembers,
    school: univ
  } 
})

//function buildLogo(){
//  // select element with id "target"
//  var container = document.getElementById("university");
//
//  // give it a class of "parent"
//  container.classList.add("parent");
//
//
//  // loop through the university array, and for each create a listing like:
//  // <a href="website"><img src="logo" alt="famu"></a>
//  for(var i=0; i<univ.length; i++){
//    var div = document.createElement("div"); 
//    
//    var imgV = document.createElement("img");
//    imgV.setAttribute("src", univ[i].image);
//    imgV.setAttribute("alt", univ[i].name);
//    console.log(imgV);
//    
//    var aV = document.createElement("a");
//    aV.setAttribute("href", univ[i].website);
//    aV.setAttribute("class", "row");
//    aV.appendChild(imgV);
//    
//    div.appendChild(aV);
//
//    container.appendChild(div);
//  }
//}
//
//buildLogo()