// Grab the Canvas and Drawing Context
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
// Create triangle
ctx.beginPath();
ctx.moveTo(275, 0);
ctx.lineTo(450, 410);
ctx.lineTo(0, 350);
ctx.lineTo(275, 0);
ctx.closePath();
// Clip to the current path
ctx.clip();

// Create an image element
const bgImg = document.createElement('IMG');
// When the image is loaded (url is fetched), draw it to the canvas
bgImg.onload = function () {
    ctx.drawImage(bgImg, 0, 0);
}
// Specify the src to load the image
bgImg.src = "https://placekitten.com/g/500/500";
