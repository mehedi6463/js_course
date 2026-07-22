const x = document.forms["frm1"];

let text = "";
for (let i = 0; i < x.length-1 ;i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById('demo').innerHTML = text;