var scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

var elementsToShow = document.querySelectorAll(".show-on-scroll");

const callback = function (entries) {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-visible");
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".show-on-scroll");
targets.forEach(function (target) {
  observer.observe(target);
});

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  });

  scroll(loop);
}

loop();
