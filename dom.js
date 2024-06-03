const para = document.createElement("p");

const paratext = document.createTextNode('Total fruits: 4');

para.appendChild(paratext);
para.id = "fruits-total";

const div = document.getElementsByTagName('div');
const seconddiv = div[1];
const fruits = document.querySelector('.fruits');
seconddiv.insertBefore(para, fruits);

const h3 = document.createElement("h3");
h3.style.fontStyle = 'italic';
const headtext = document.createTextNode("Buy high quality organic fruits online");
const text = h3.appendChild(headtext);
//text.style.fontWeight='italic';
const firstdiv = div[0];
firstdiv.append(h3);