
// create function reused 

let ids = document.createElement("div");

function lis(name){
   let li = document.createElement("li");
   li.textContent = name;
   return li;
}

ids.appendChild(lis("Name"));
ids.appendChild(lis("Age"));
ids.appendChild(lis("Cliss")); 

document.body.appendChild(ids);

// create image tag

let image = document.createElement("img");
image.src="img/logo.jpg"
document.body.appendChild(image);


// create short tag

let shottag = document.createElement('div');
shottag.innerHTML = "<ul><li>Name</li><li>Class</li><li>Age</li><li>Roll</li></ul>"
document.body.appendChild(shottag);


// forach loop

let memu = document.getElementById("memu");
let lan = ['html','css','javascript','php'];
let feg = document.createDocumentFragment();
lan.forEach((language) => {
   let li = document.createElement("li");
   li.textContent = language;
   feg.appendChild(li);

})

memu.appendChild(feg);

