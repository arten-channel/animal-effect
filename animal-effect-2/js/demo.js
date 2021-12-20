let body = document.body;
let totalWidth = (window.innerWidth / 2);
let totalHeight = (window.innerHeight / 2);

body.addEventListener("mousemove", e => {
    let xMax = Math.min(Math.max(parseInt(e.clientX), 400), 800);
    let yMax = Math.min(Math.max(parseInt(e.clientY), 400), 800);
    body.style.setProperty('--directionX', Math.min(Math.max(((((e.clientX - totalWidth) / totalWidth) * 90)), -70), 70) + '%');
    body.style.setProperty('--directionY', Math.min(Math.max(((((e.clientY - totalHeight) / totalHeight) * 90)), -70), 70) + '%');
    body.style.setProperty('--rotation', Math.min(Math.max(((((e.clientX - totalWidth) / totalWidth) * 20)), -40), 40) + 'deg');
    body.style.setProperty('--squigs1', '"M 400 810 C 280 660 ' + (500 - (xMax / 20)) + ' ' + (690 - (yMax / 20)) + ' ' + (330 - (xMax / 10)) + ' ' + (490 - (yMax / 20)) + ' Q ' + (260 - (yMax / 20)) + ' ' + (400 - (yMax / 20)) + ' ' + (xMax / 1.5) + ' ' + (yMax / 1.5) + '"');
    body.style.setProperty('--squigs2', '"M 400 810 C 280 660 ' + (500 - (xMax / -20)) + ' ' + (690 - (yMax / -20)) + ' ' + (330 - (xMax / -10)) + ' ' + (590 - (yMax / -20)) + ' Q ' + (260 - (yMax / -20)) + ' ' + (500 - (yMax / -20)) + ' ' + (xMax / 2) + ' ' + (yMax / 1) + '"');
});


body.addEventListener("click", e => {
    body.classList.toggle("squid");
});