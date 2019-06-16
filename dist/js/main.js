(function() {
  activeLink = document.querySelector(".current-page");
  // Empty div is the 5th child
  console.log(activeLink.childNodes[5]);
  triangleDiv = activeLink.childNodes[5];
  triangleDiv.classList.toggle("triangle-left");
})();
