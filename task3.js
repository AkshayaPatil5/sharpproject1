//console.dir(document);


//console.log(document.URL);
//console.log(document.title);
//console.log(document.all);

//getelementbyid
//console.log(document.getElementById("header-title)"));
var headerTitle=document.getElementById("main-header");
//console.log(headerTitle);
//headerTitle.textContent="Hello";
//headerTitle.innertext="Goodbye";

headerTitle.style.borderBottom="solid 3px #000";
var Title=document.getElementById("main-title");
Title.style.fontWeight="900"
Title.style.color="green"



var items=document.getElementsByClassName("list-group-item");
items[2].style.background="green";

for(var i=0; i<items.length;i++){
    items[i].style.fontWeight="bold";
}

