// var ip = (Math.floor(Math.random() * 100) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
// console.log(ip)

function changeColor(){

let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'F'];
let hexcode = '';

for (let i = 0; i < 6; i++){
  let randomIndex = Math.floor(Math.random() * number.length)  

  hexcode += number[randomIndex]
}

document.querySelector('.code').innerHTML = hexcode;

document.getElementsByTagName('body')[0].style.background = `#${hexcode}`;
document.body.style.background = `#${hexcode}`;


}





