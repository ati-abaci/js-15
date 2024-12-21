// ? Question-2:Select all spans  with the 'circle' class and write a code to change classes that have 'blue' with 'purple' and vice versa

// !Answer:
const circle=document.querySelectorAll(".circle")
circle.forEach((circle) => {
    if (circle.classList.contains("blue")) {
      circle.classList.remove("blue");
      circle.classList.add("purple");
    } else {
      circle.classList.remove("purple");
      circle.classList.add("blue");
    }
  });