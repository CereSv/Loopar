//Skappa Array och Lista
var saker = ["Simma","Springa","Cykla","Gå","Dricka"];
var list = document.createElement("ul");
document.body.appendChild(list);

for (var i=0;i<saker.length;i++){
    var item = document.createElement("li");
    var text = document.createTextNode(saker[i]);
    item.appendChild(text);
    list.appendChild(item);
}