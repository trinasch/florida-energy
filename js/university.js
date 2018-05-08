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

function buildLogo(){
  // select element with id "target"
  var container = document.getElementById("university");

  // give it a class of "parent"
  container.classList.add("parent");


  // loop through the university array, and for each create a listing like:
  // <a href="website"><img src="logo" alt="famu"></a>
  for(var i=0; i<univ.length; i++){
    var div = document.createElement("div"); 
    
    var imgV = document.createElement("img");
    imgV.setAttribute("src", univ[i].image);
    imgV.setAttribute("alt", univ[i].name);
    console.log(imgV);
    
    var aV = document.createElement("a");
    aV.setAttribute("href", univ[i].website);
    aV.setAttribute("class", "row");
    aV.appendChild(imgV);
    
    div.appendChild(aV);

    container.appendChild(div);
  }
}

buildLogo()