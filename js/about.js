/* Vue app for navigation and hero components */

var app = new Vue({
  el: '#app',
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
    headshot: "images/martinez.jpg",
  },
  {
    position: "Board member",
    fullName: "Ben Amaba, PhD",
    credentials: "Worldwide Executive, PE, CPIM®, LEED® AP",
    website: "",
    headshot: "images/amaba.jpg",
  },
  {
    position: "Board member",
    fullName: "Tommy Boroughs",
    credentials: "Partner, Holland & Knight, LLP",
    website: "",
    headshot: "images/boroughs.jpg",
  },
  {
    position: "Board member",
    fullName: "Timothy L. Bryant",
    credentials: "PE, Senior Manager External Affairs, NextEra Energy, Inc.",
    website: "",
    headshot: "images/bryant.png",
  },
  {
    position: "Board member",
    fullName: "Gustavo R. Cepero",
    credentials: "Vice President, Florida Crystals Corporation",
    website: "",
    headshot: "images/cepero.jpg",
  },
  {
    position: "Board member",
    fullName: "Christopher Fountas",
    credentials: "Partner, Arsenal Venture Partners",
    website: "",
    headshot: "images/fountas.jpg",
  },
  {
    position: "Board member",
    fullName: "Nick Gladding",
    credentials: "Attorney at Law, PA",
    website: "",
    headshot: "images/gladding.jpg",
  },
  {
    position: "Board member",
    fullName: "Jennifer Grove",
    credentials: "Community Development Manager, Gulf Power Company",
    website: "",
    headshot: "images/grove.jpg",
  },
  {
    position: "Board member",
    fullName: "Dan Holladay",
    credentials: "Executive Director, BRIDG, University of Central Florida ORC",
    website: "",
    headshot: "images/holladay.jpg",
  },
  {
    position: "Board member",
    fullName: "Byron A. Knibbs",
    credentials: "Vice President, Sustainable Services Dept, Orlando Utilities Commission",
    website: "",
    headshot: "images/knibbs.jpg",
  },
  {
    position: "Board member",
    fullName: "Tom Lawery",
    credentials: "Wholesale Renewables Manager, Distributed Energy Resources, Duke Energy",
    website: "",
    headshot: "images/lawery.jpg",
  },
  {
    position: "Board member",
    fullName: "Richard Paul-Hus",
    credentials: "President - INcomm, Owner - Hypower",
    website: "",
    headshot: "images/paul-hus.png",
  },
  {
    position: "Board member",
    fullName: "Roy Periana",
    credentials: "Director, Scripps Energy Laboratories",
    website: "",
    headshot: "images/periana.png",
  },
  {
    position: "Board member",
    fullName: "Thomas L. Hernandez",
    credentials: "Senior Vice President, Business Strategy and Renewables, Tampa Electric Company",
    website: "",
    headshot: "images/hernandez.png",
  },
  {
    position: "Board member",
    fullName: "Jeremy L. Susac",
    credentials: "Vice President, Government Affairs, Lennar Ventures",
    website: "",
    headshot: "images/susac.jpg",
  },
  {
    position: "Board member",
    fullName: "Brian Yablonski",
    credentials: "External Affairs Director, Gulf Power Company",
    website: "",
    headshot: "images/yablonski.jpg",
  },
  {
    position: "Board member",
    fullName: "Paul Zombo P.E.",
    credentials: "Manager, Gas Turbine Engineering",
    website: "",
    headshot: "images/zombo.jpg",
  },
]


var univ = [
  {
    website: "http://www.ufl.edu/",
    name: "University of Florida (UF)",
    image: "images/ufl-logo-100x99.png",
  },
  {
    website: "http://www.fsu.edu/",
    name: "Florida State University (FSU)",
    image: "images/fsu-logo-100x100.png",
  },
  {
    website: "http://www.ucf.edu/",
    name: "University of Central Florida (UCF)",
    image: "images/ucf-logo-100x97.png",
  },
  {
    website: "http://www.famu.edu/",
    name: "Florida A&M University (FAMU)",
    image: "images/famu-logo-100x100.png",
  },
  {
    website: "http://www.fau.edu/",
    name: "Florida Atlanta University (FAU)",
    image: "images/fau-logo-100x99.png",
  },
  {
    website: "http://www.fgcu.edu/",
    name: "Florida Gulf Coast University (FGCU)",
    image: "images/fgcu-logo-100x99.png",
  },
  {
    website: "http://www.ncf.edu/",
    name: "New College of Florida (NCF)",
    image: "images/ncf-logo-100x100.png",
  },
  {
    website: "http://www.unf.edu/",
    name: "University of North Florida (UNF)",
    image: "images/unf-logo-100x100.png",
  },
  {
    website: "http://www.uwf.edu/",
    name: "University of West Florida (UWF)",
    image: "images/uwf-logo-100x100.png",
  },
  {
    website: "http://www.fiu.edu/",
    name: "Florida International University (FIU)",
    image: "images/fiu-logo-100x78.png",
  },
  {
    website: "http://floridapolytechnic.org/",
    name: "Florida Polytechnic University (FPU)",
    image: "images/fpu-logo-100x69.png",
  },
  {
    website: "http://www.usf.edu/",
    name: "University of South Florida (USF)",
    image: "images/usf-logo-100x70.png",
  }
]

/* Vue app for main section */
var aboutMain = new Vue({
  el: '#main',
  data: {
    people: boardmembers,
    school: univ
  } 
})
