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
 
function contactCard(){
  // select element with id "target"
  var container = document.getElementById("board");

  // give it a class of "parent"
  container.classList.add("parent");


  // loop through the university array, and for each create a listing like:
  //  <div class="contact-card col span_4_of_12">
//       <img src="images/David-Norton-200x230.jpg" class="clip-circle" alt="David Norton photo">
//       <h4>Dr. David Norton</h4>
//       <p>Interim Director, FESC</p>
//       <a href="mailto:dpnorton@ufl.edu">dpnorton@ufl.edu</a>
//     </div>
  
  for(var i=0; i<boardmembers.length; i++){
    var div = document.createElement("div"); 
    div.setAttribute("class", "contact-card");
    
    var h5V = document.createElement("h5");
    h5V.innerHTML = boardmembers[i].position;
    console.log(h5V);
    
    var imgV = document.createElement("img");
    imgV.setAttribute("src", "images/cat.png");
    imgV.setAttribute("class", "clip-circle");
    
    var h4V = document.createElement("h4");
    h4V.innerHTML = boardmembers[i].fullName;
    console.log(h4V);
    
    var pV = document.createElement("p");
    pV.innerHTML = boardmembers[i].credentials;
    console.log(pV);
    
    div.appendChild(h5V);
    div.appendChild(imgV);
    div.appendChild(h4V);
    div.appendChild(pV);

    container.appendChild(div);
  }
}

contactCard()