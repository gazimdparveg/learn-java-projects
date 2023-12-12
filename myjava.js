// var mu = 1;
// var mu1 = 2;
// total = mu+mu1;
// console.log(total);

// var myDate = new Date();
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getUTCFullYear());
// console.log(myDate.getHours());

let myid = document.getElementById("myid");
myid.innerHTML = "This is Gazi Md Parveg"

function clickme(){
    document.getElementById("date").innerHTML= Date();

}

// create div

let div = document.createElement("div");
div.id="divId";
div.className= "divclass";
div.innerHTML = "<p>This is cerating div tag in java</p>"
div.style.color = 'red';
div.classList.add('myclass');
document.body.appendChild(div);

// create text tag

let text = document.createElement("div");
let text1 = document.createTextNode("This is text massage in jave note");
text.appendChild(text1);
document.body.appendChild(text);

// create h1 tag

let newdiv = document.createElement("div");
let h1 = document.createElement('H1');
h1.textContent="This is h1 tag in java";
newdiv.appendChild(h1);
document.body.appendChild(newdiv);

// create ul li tag

let ul = document.createElement("ul");
let li = document.createElement("li");
let li2 = document.createElement('li');
let li3 = document.createElement('li');
li.textContent= "Name";
li2.textContent= "age";
li3.textContent= "class";
ul.appendChild(li);
ul.appendChild(li2);
ul.appendChild(li3);
document.body.appendChild(ul);






// create script tag

let script = document.createElement("script");
script.src = "newjava.js";
document.body.appendChild(script);




