const icons = document.querySelectorAll(".icon");
 
for (let icon of icons) {
  const item = icon.parentElement;
 
  icon.addEventListener("click", function () {
    item.classList.toggle("open");
  });
}