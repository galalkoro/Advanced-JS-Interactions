Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}


let images = [...document.querySelectorAll('.img')];
let slider = document.querySelector('.slider'); 
let sliderlWidth;
let imageWidth;
let current = 0; 
let target = 0;
let ease = .05;

images.forEach((img, idx) =>{
    img.style.backgroundImage = `url(./images/${idx+1}.jpg)`

})
function lerp(start, end, t) {
    return start * (1-t) + end * t;
    
}

function setTransform(el, transform) {
    el.style.transform = transform;
}

function init() {
    sliderlWidth = slider.getBoundingClientRect().width;
    imageWidth = sliderlWidth / images.length;
    document.body.style.height = `${sliderlWidth - (window.innerWidth - window.innerHeight)}`
}

function animate() {
    current = parseFloat(lerp(current, target, ease)).toFixed(2);
    target = window.scrollY;
    setTransform(slider, `translateX(-${current}px)`)
    animateImages();
    requestAnimationFrame(animate);
}

function animateImages() {
    let ratio = current / imageWidth;
    let intersectionRatioValue;
    images.forEach((image, idx) => {
        intersectionRatioValue = ratio - (idx * 0.1);
        setTransform(image, `translateX(${intersectionRatioValue * 100}px)`)
        
    })
    
}

init();
animate();