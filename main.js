// const canvas = document.getElementById('canvas')
// const ctx = canvas.getContext("2d")
// const colors = [
//     ['#B1740F', '#FFD07B', '#FDB833', '#296EB4', '#1789FC'],
//     ['#DD6E42', '#E8DAB2', '#4F6D7A', '#C0D6DF', '#EAEAEA'],
//     ['#06070E', '#29524A', '#94A187', '#C5AFA0', '#E9BCB7'],
//     ['#ED1C24', '#FDFFFC', '#235789', '#F1D302', '#020100'],
//     ['#A40E4C', '#2C2C54', '#ACC3A6', '#F5D6BA', '#F49D6E'],
// ]
// const buttons = Object.values(document.querySelectorAll("button.color"))

// var brush = "round"
// var currentColor = "white"
// var size = document.getElementById("myRange").value

// var colorP = colors[Math.floor(Math.random() * colors.length)];

// const map1 = buttons.map((button, index) => {
//     button.style.backgroundColor = colorP[index]
// })

// resizeCanvas()

// function changeBrush(newBrush){
//     brush=newBrush
// }

// function resizeCanvas() {
//     canvas.height = (window.innerHeight - 10);
//     canvas.width = (window.innerWidth - 160);
// }
// showVal(size)
// function showVal(newVal) {
//     document.getElementById("demosize").style.width = newVal + 'px';
//     document.getElementById("demosize").style.height = newVal + 'px';
//     size = newVal
// }
// let brushDown = false;

// function start(e) {
//     brushDown = true;
//     paint(e)
// }

// function finish() {
//     brushDown = false;
//     ctx.beginPath();
// }

// function paint(e) {
//     if (!brushDown) return;
//     ctx.lineWidth = size;
//     ctx.lineCap = brush;
//     ctx.strokeStyle = currentColor;
//     ctx.lineTo(e.clientX - 150, e.clientY);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(e.clientX - 150, e.clientY)
// }

// canvas.addEventListener("mousedown", start);
// canvas.addEventListener("mouseup", finish);
// canvas.addEventListener("mouseout", finish);
// canvas.addEventListener("mousemove", paint)


// var myFunction = function () {
//     for (var i = 0; i < buttons.length; i++) {
//         buttons[i].style.border = "none"
//     }
//     this.style.border = "4px solid #DEDDDB"


//     currentColor = this.style.backgroundColor
// };

// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', myFunction, false);
// }
// window.addEventListener("resize", resizeCanvas)
// document.getElementById('share').addEventListener("click", shareImage)

// function shareImage(){
//     var img    = canvas.toDataURL("image/png");
//     console.log(img)
// }

