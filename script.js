function toggleForm() {
   let section = document.querySelector("section");
   let container = document.querySelector(".container");

   container.classList.toggle("active");

   if (container.classList.contains("active")) {
      section.style.backgroundColor = "#007000";
   } else {
      section.style.backgroundColor = "#a80000";
   }
}
