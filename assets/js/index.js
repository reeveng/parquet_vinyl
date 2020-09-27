$(document).ready(function () {
  $('#cookieModal').modal('show');
});

let divisor = document.getElementById("divisor"),
  slider = document.getElementById("slider"),
  divisorText = document.getElementById("divisor__text");
function moveDivisor() {
  divisor.style.width = slider.value + "%";
  divisorText.style.display = "none";
};

[...document.getElementsByClassName("c-questions__dropdown__button")].forEach(btn => {
  btn.addEventListener("click", (e) => {
    let parent = e.target.parentElement.parentElement.parentElement;
    if ([...parent.classList].includes("visible")) {
      parent.classList.remove("visible");
    } else {
      parent.classList.add("visible");
    }
  })
});

window.onload = function () {
  var ball = document.getElementById('ball_animation')
  ball.style.animationPlayState = "paused";

  document.getElementsByClassName("c-build__container")[0].onmouseover = () => {
    var ball = document.getElementById('ball_animation')
    ball.style.animationPlayState = "running";
  }
};


