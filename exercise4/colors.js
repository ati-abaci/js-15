/*
? You have to write a code that changes the color of rectangles upon clicking each color.

- First, look at color-palette1.png . You should create a similar page.
- There are seven colored circles, and upon clicking each circle, the rectangles will change their color. You can find the color codes for the circles below.
- The color chosen will be applied to the first rectangle, and subsequent rectangles will be assigned colors from its spectrum.
- hint: you can modify the alpha (a) of the rgba color to create the spectrum color 
- For example, you can refer to photo color-palette2.png 2, it is for the time when the green color is clicked.

rgba(31, 127, 102, 1)
rgba(255, 200, 0, 1)
rgba(255, 123, 0, 1)
rgba(216, 1, 1, 1)
rgba(223, 4, 70, 1)
rgba(127, 31, 85, 1) 
rgba(93, 18, 199, 1)
*/
const firstCircle=document.querySelector(".first.circle")
const secondCircle=document.querySelector(".second.circle")
const thirdCircle=document.querySelector(".third.circle")
const fourthCircle=document.querySelector(".fourth.circle")
const fifthCircle=document.querySelector(".fifth.circle")
const sixthCircle=document.querySelector(".sixth.circle")
const seventhCircle=document.querySelector(".seventh.circle")
const rectangle=document.querySelectorAll(".rectangle")

function changeColorGreen() {
    rectangle.forEach((rectangle, index) => {
        const alpha = 1 - (index * 0.2);
        rectangle.style.backgroundColor = `rgba(31, 127, 102, ${alpha})`;
    });
}

function changeColorYellow() {
    rectangle.forEach((rectangle, index) => {
        const alpha = 1 - (index * 0.2);
        rectangle.style.backgroundColor = `rgba(255, 200, 0, ${alpha})`;
    });
}

function changeColorOrange() {
    rectangle.forEach((rectangle, index) => {
        const alpha = 1 - (index * 0.2);
        rectangle.style.backgroundColor = `rgba(255, 123, 0, ${alpha})`;
    });
}
function changeColorRed() {
    rectangle.forEach((rectangle, index) => {
        const alpha = 1 - (index * 0.2);
        rectangle.style.backgroundColor = `rgba(216, 1, 1, ${alpha})`;
    });
}
function changeColorPink() {
    rectangle.forEach((rectangle, index) => {
        const alpha = 1 - (index * 0.2);
        rectangle.style.backgroundColor = `rgba(223, 4, 70, ${alpha})`;
    });
}
function changeColorPurple() {
    rectangle.forEach((rectangle, index) => {
        const alpha = 1 - (index * 0.2);
        rectangle.style.backgroundColor = `rgba(127, 31, 85, ${alpha})`;
    });
}
function changeColorViolet() {
    rectangle.forEach((rectangle, index) => {
        const alpha = 1 - (index * 0.2);
        rectangle.style.backgroundColor = `rgba(93, 18, 199, ${alpha})`;
    });
}

firstCircle.addEventListener('click', changeColorGreen);
secondCircle.addEventListener('click', changeColorYellow);
thirdCircle.addEventListener('click',changeColorOrange)
fourthCircle.addEventListener('click',changeColorRed)
fifthCircle.addEventListener('click',changeColorPink)
sixthCircle.addEventListener('click',changeColorPurple)
seventhCircle.addEventListener('click',changeColorViolet)
