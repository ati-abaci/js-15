// ?Question-3:follow these steps:
// todo-1:select "ul" element with "navbar" class.
// todo-2:add the items of the navbarItem array to the "ul" element by appending them as <li> elements.
// todo-3:Add the class "item" to each <li> element.
// todo-4:Edit the <li> tags according to the image.(You can check the help folder or use the following style for each <li> element)
/**
  {
    margin: 0 1rem;
    cursor: pointer;
  }
*/
// !Answer:

//todo-1&2:
const navbarItem = ["Home", "Products", "Blog", "Contact us"];
const navbar = document.querySelector(".navbar");
navbarItem.forEach((item) => {
  const li = document.createElement("li"); 
  li.textContent = item;
  navbar.appendChild(li);
});

// todo-3:
const listItems = document.querySelectorAll(".navbar li");
listItems.forEach((item) => {
  item.classList.add("item");
});

//todo-4:
const editNavbar=document.querySelector(".navbar");
editNavbar.style.gap="15px"
const editNavbarLis=document.querySelector(".navbar li");
editNavbarLis.style.marginLeft="15px";




