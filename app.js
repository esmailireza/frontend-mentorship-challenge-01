const heartIcon = document.querySelectorAll(".fa-heart");
heartIcon.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("fas");
  });
});
