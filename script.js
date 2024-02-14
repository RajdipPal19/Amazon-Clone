var imageUrls = [
    "greatindiansale.jpg",
    "GI3.jpg",
    "GI4.jpg",
    "GI5.jpg",
    "GI2.jpg",
    "GI6.jpg",
    "GI7.jpg",
    "GI8.jpg",
    "hero_image.jpg"
  ];
  var currentIndex = 0;
  var heroSection = document.getElementById("hero-section");
  var prevArrow = document.getElementById("prev-arrow");
  var nextArrow = document.getElementById("next-arrow");
  function changeBackgroundImage() {
    heroSection.style.backgroundImage =
      "url('" + imageUrls[currentIndex] + "')";
  }
  function showPreviousImage() {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    changeBackgroundImage();
  }
  function showNextImage() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    changeBackgroundImage();
  }
  function startImageRotation() {
    setInterval(showNextImage, 5000);
  }
  prevArrow.addEventListener("click", showPreviousImage);
  nextArrow.addEventListener("click", showNextImage);
  startImageRotation();
  changeBackgroundImage();