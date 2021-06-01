'use strict'
let allTrip=[];
function Transport (name,place,triptype){
this.name=name;
this.place=place;
this.triptype=triptype;
allTrip.push(this);
}
let src;
let form=document.getElementById('form');
form.addEventListener('submit',submitter);
function submitter(event){
    event.preventDefault();
let name=event.target.placename.value;
let place=event.target.place.value;
if(place==='HAWAII'){
    src="images/HAWAII.jpg";
    
}
else if(place==='LONDON'){
    src="images/LONDON.png"
}
else if(place==='PARIS'){
    src="images/PARIS.png";
}
else if(place==='ITALY'){
    src="images/ITALY.png";
}
else if(place==='SLOVAKIA'){
    src="images/SLOVAKIA.png";
}
else{
    src="images/MALAYSIA.png";
    setItem();
}



let triptype=event.target.typetrans.value;

let newObject=new  Transport(name,src,triptype,place);
//call the function for rend
render(newObject);
}

let table=document.getElementById('table');

function render(newObject){
    let tr=document.createElement('tr');
    table.appendChild(tr);

    let td=document.createElement('td');
    tr.appendChild(td);
    td.innerHTML=`<img src='${newObject.place} ' width="20%"/>`;

    let td2=document.createElement('td');
    tr.appendChild(td2);
    td2.textContent=`place name:${newObject.name} 
    trip place:${newObject.place}
    type of transport:${newObject.triptype}`;


}
function setItem(){
    localStorage.setItem('Data',JSON.stringify(allTrip));
}
function getItem(){
    let string =localStorage.getItem('Data');
    let orignial=JSON.parse(string);
    if(orignial!==null){
        allTrip=orignial;
        render(newObject);

    }
}