//var itemList=document.querySelector("#items");

//parentNode
//console.log(itemList.parentNode);
//itemList.style.backgroundColor="grey";

//parentelement
//console.log(itemList.parentElement);
//itemList.style.color="black";

//childnode
//console.log(itemList.childNodes)

//children
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor="green";

//firstchild
//console.log(itemList.firstChild);

//firstelementchild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.style.color="red";

//firstchild
//console.log(itemList.lastChild);
 
//lastelementchild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.style.color="red";

//nextsibling
//console.log(itemlist.nextSibling);

//nextElementsibling
//console.log(itemList.nextElementSibling);

//previousElementsibling
//console.log(itemList.previousElementSibling);



//add element to dom
//create element
//create a div
var newDiv = document.createElement("div");

//add class
newDiv.className="hello";

//add id
newDiv.id="hello1";

//add attr
newDiv.setAttribute("title","Hello Div");
//create text node
var newDivText=document.createTextNode("Hello World");  
//add text to div
newDiv.appendChild(newDivText);


//add to dom

var container=document.querySelector("header .container");
var h1=document.querySelector("header h1");
console.log(newDiv);

container.insertBefore(newDiv,h1);
var itemList=document.querySelector("#items");
itemList.children[1].style.backgroundColor="green";
