// start animation
const textAnimationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("text-animation");
    }
  });
});

const infoTextElements = document.querySelectorAll(".info-text");
infoTextElements.forEach((el) => textAnimationObserver.observe(el));
// end animation

// start love-story animation
const loveStoryAnimationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("love-story-animation");
    }
  });
});

const loveStoryElements = document.querySelectorAll(".love-story__item");
loveStoryElements.forEach((el) => loveStoryAnimationObserver.observe(el));
// end text animation

// start count down
let endDate = new Date("2024-10-13 14:00:00").getTime();

let check = setInterval(function () {
  let now = new Date().getTime();
  let distance = endDate - now;

  let day = Math.floor(distance / (24 * 60 * 60 * 1000));
  let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((distance % (60 * 1000)) / 1000);
  if (day.toString().length < 2) {
    day = "0" + day;
  }
  if (hour.toString().length < 2) {
    hour = "0" + hour;
  }
  if (minute.toString().length < 2) {
    minute = "0" + minute;
  }
  if (seconds.toString().length < 2) {
    seconds = "0" + seconds;
  }
  document.getElementById("day").innerText = day;
  document.getElementById("hour").innerText = hour;
  document.getElementById("minute").innerText = minute;
  document.getElementById("seconds").innerText = seconds;
  if (distance <= 0) {
    clearInterval(check);
    document.getElementById("day").innerText = "00";
    document.getElementById("hour").innerText = "00";
    document.getElementById("minute").innerText = "00";
    document.getElementById("seconds").innerText = "00";
  }
}, 1000);
// end count down

// album
const swiper = new Swiper(".swiper", {
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
// end album

// copy
function copyText(id) {
  // Get the text field
  var copyText = document.getElementById(id);
  var cardNumber = copyText.innerText.trim();

  // Copy the text inside the text field
  navigator.clipboard.writeText(cardNumber);
}

function goTo(id) {
  window.location.hash = id;
}

function copyPhoneCr() {
  // Get the text field
  var copyText = "0342753573";

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);
}

function copyPhoneCd() {
  // Get the text field
  var copyText = "0328940363";

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);
}
