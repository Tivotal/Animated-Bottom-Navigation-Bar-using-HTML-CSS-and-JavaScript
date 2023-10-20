/* Created by Tivotal */

const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.onclick = () => {
    items.forEach((icon) => {
      icon.classList.remove("active");
    });

    item.classList.add("active");
  };
});
