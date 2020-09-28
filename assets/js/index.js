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


window.onload = () => {
  let message = 0;
  const newsMessages = ["[News] Lorem ipsum dolor sit amet, consectetur adipiscing elit 1", "[News] Lorem ipsum dolor sit amet, consectetur adipiscing elit 2", "[News] Lorem ipsum dolor sit amet, consectetur adipiscing elit 3"];
  let news = document.getElementsByClassName("c-news")[0];
  news.children[0].innerHTML = newsMessages[message];

  news.addEventListener("animationend", () => {
    setTimeout(() => {
      news.style.animation = "slideOut 7.5s ease";
      message = (message + 1) % newsMessages.length;
      console.log(message)
      setTimeout(() => {
        news.children[0].innerHTML = newsMessages[message];
        news.style.animation = "slideIn 7.5s ease"
      }, 5000);
    }, 5000);

  })
}