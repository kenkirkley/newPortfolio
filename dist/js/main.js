(function() {
  activeLink = document.querySelector(".current-page");
  // Empty div is the 5th child
  console.log(activeLink.childNodes[5]);
  triangleDiv = activeLink.childNodes[5];
  triangleDiv.classList.toggle("triangle-left");
})();

document.querySelector(".hamburger").addEventListener("click", event => {
  event.preventDefault();
  document.querySelector(".menu").classList.toggle("show");
  console.log(document.querySelector(".menu").classList);
});
