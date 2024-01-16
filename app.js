let startscreen = document.querySelector('.startscreen');
let fullname = document.querySelector('.fullname');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {
    logoSpan.forEach((span, idx) => {
        setTimeout(() => {
            span.classList.add("active");
        }, idx * 300);
    });
});

window.addEventListener('click', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, idx * 100);
        });

        setTimeout(() => {
            startscreen.style.top = "-100vh";
        }, logoSpan.length * 100);
    });
});

const coords = { x:0, y:0 };
const circles = document.querySelectorAll(".circle");

circles.forEach(function(circle) {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function(circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];

        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;

    });

    requestAnimationFrame(animateCircles);
};

animateCircles();
