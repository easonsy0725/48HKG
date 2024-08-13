function toggleDropdown() {
  const dropdownMenu = document.getElementById("navbar_menu");
  dropdownMenu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
  const dropDownItems = document.querySelectorAll(".dropDown");


  dropDownItems.forEach(function(dropDownItem) {
      dropDownItem.addEventListener("click", function() {
          const submenu = this.querySelector("ul");

          if (submenu) {
              const dropItems = submenu.querySelectorAll(".drop_item");

              dropItems.forEach(function(dropItem) {
                  if (dropItem.style.display === "none" || dropItem.style.display === "") {
                      dropItem.style.display = "flex";
                      
                  } else {
                      dropItem.style.display = "none";
                  }
              });
          }
      });
  });
});


//return to top button
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openMap(location) {
  window.open('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(location), '_blank');
}