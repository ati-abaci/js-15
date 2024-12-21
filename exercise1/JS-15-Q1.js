// ? Question-1:follow these steps:
// todo-1:Select the body tag and apply this color to the background "#0a122d"
// todo-2:select image and set margin "4rem 0"
// todo-3:Apply a rounded border to the image and set its size to "1 rem"
// todo-4:Select h1 and h5 tags and place them in the appropriate position according to the image.(you can check help folder)
// !Answer:
const body=document.querySelector("body")
body.style.backgroundColor="#0a122d";

const image=document.querySelector("#strangeFish")
image.style.margin="4rem 0";
image.style.borderRadius="1rem";


const heroTitle=document.querySelector(".hero__title")
heroTitle.style.top = "100px"; 
heroTitle.style.left="80px"

const heroSubtitle=document.querySelector(".hero__subtitle")
heroSubtitle.style.top = "120px"; 
heroSubtitle.style.left="80px"
