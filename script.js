document.addEventListener("DOMContentLoaded", () => {
  
  let heartCount = 0;
  const heartIcons = document.querySelectorAll(".fa-heart");
  const heartCountEl = document.getElementById("heart-count");

  heartIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      heartCount++;
      heartCountEl.textContent = heartCount;
      icon.classList.toggle("text-red-500");
    });
  });

  


});
