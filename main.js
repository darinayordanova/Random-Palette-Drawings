const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")
const colors = [
    ['#B1740F', '#FFD07B', '#FDB833', '#296EB4', '#1789FC'],
    ['#DD6E42', '#E8DAB2', '#4F6D7A', '#C0D6DF', '#EAEAEA'],
    ['#06070E', '#29524A', '#94A187', '#C5AFA0', '#E9BCB7'],
    ['#ED1C24', '#FDFFFC', '#235789', '#F1D302', '#020100'],
    ['#A40E4C', '#2C2C54', '#ACC3A6', '#F5D6BA', '#F49D6E'],
    ['#D5573B', '#885053', '#777DA7', '#94C9A9', '#C6ECAE'],
    ['#9AC4F8', '#99EDCC', '#CB958E', '#E36588', '#9A275A'],
    ['#E8D6CB', '#D0ADA7', '#AD6A6C', '#5D2E46', '#B58DB6'],
    ['#C33C54', '#254E70', '#37718E', '#8EE3EF', '#AEF3E7'],
    ['#A0EEC0', '#8AE9C1', '#86CD82', '#72A276', '#666B6A'],
    ['#A6D49F', '#9CB380', '#522A27', '#C73E1D', '#C59849'],
    ['#1E3231', '#485665', '#8E7C93', '#D0A5C0', '#F6C0D0'],
    ['#65524D', '#817E9F', '#7FC29B', '#B5EF8A', '#D7F171'],
    ['#2191FB', '#BA274A', '#841C26', '#B2ECE1', '#8CDEDC'],
    ['#26547C', '#EF476F', '#FFD166', '#06D6A0', '#FFFCF9'],
]
const buttons = Object.values(document.querySelectorAll("button.color"))
const brushes = Object.values(document.querySelectorAll("button.brush"))

var brush = "round"
var currentColor = "white"
var size = document.getElementById("myRange").value

var colorP = colors[Math.floor(Math.random() * colors.length)];

const map1 = buttons.map((button, index) => {
    button.style.backgroundColor = colorP[index]
})

resizeCanvas()

function changeBrush(newBrush,el){

    brush=newBrush
    for (var i = 0; i < brushes.length; i++) {
        brushes[i].style.border = "none"
    }
    el.style.border = "4px solid #DEDDDB"
    
}

function resizeCanvas() {
    canvas.height = (window.innerHeight - 10);
    canvas.width = (window.innerWidth - 160);
}
showVal(size)
function showVal(newVal) {
    document.getElementById("demosize").style.width = newVal + 'px';
    document.getElementById("demosize").style.height = newVal + 'px';
    size = newVal
}
let brushDown = false;

function start(e) {
    brushDown = true;
    paint(e)
}

function finish() {
    brushDown = false;
    ctx.beginPath();
}

function paint(e) {
    if (!brushDown) return;
    ctx.lineWidth = size;
    ctx.lineCap = brush;
    ctx.strokeStyle = currentColor;
    ctx.lineTo(e.clientX - 150, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - 150, e.clientY)
}

canvas.addEventListener("mousedown", start);
canvas.addEventListener("mouseup", finish);
canvas.addEventListener("mouseout", finish);
canvas.addEventListener("mousemove", paint)


var myFunction = function () {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.border = "none"
    }
    this.style.border = "4px solid #DEDDDB"


    currentColor = this.style.backgroundColor
};

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', myFunction, false);
}
window.addEventListener("resize", resizeCanvas)
