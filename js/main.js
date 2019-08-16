document.getElementById("search-box").addEventListener("keyup", function() {
  let linkedImages = document.getElementsByTagName('a');
  let inputValue = document.getElementById("search-box").value.toLowerCase();

  for (i = 0; i < linkedImages.length; i += 1) {
    if (linkedImages[i].getAttribute("data-lc-caption").toLowerCase().includes(inputValue)) {
      linkedImages[i].style.display ='inline-block'
    } else {
      linkedImages[i].style.display = 'none'
    }
  }
});
