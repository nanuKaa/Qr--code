function changeMainImage(newImagePath) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = newImagePath;
}
document.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var goTopButton = document.querySelector(".go-top");

  if (scrollTop > 500) {
    // Adjust this value to control when the button appears
    goTopButton.classList.add("active");
  } else {
    goTopButton.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var goTopButton = document.querySelector(".go-top");

  goTopButton.addEventListener("click", function (event) {
    event.preventDefault();
    smoothScrollToTop();
  });

  function smoothScrollToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 500; // Duration of the smooth scroll in milliseconds
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollY = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scrollY);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
});
