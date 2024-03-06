AOS.init({
  once: true,
  disable: "phone",
  duration: 750,
  easing: "ease-out-quart",
});

const carouselEl = document.querySelectorAll(".carousel");

const carouselDiv = document.getElementById("carouselDiv");
const arrowsBtnPrev = document.getElementById("arrowsBtnPrev");
const arrowsBtnNext = document.getElementById("arrowsBtnNext");

if (carouselEl.length > 0) {
  const carousel = new Swiper(".carousel", {
    slidesPerView: "auto",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    initialSlide: 0,
    spaceBetween: 24,
    autoplay: {
      delay: 40000, //7000
      disableOnInteraction: false, // 자동 재생이 사용자 상호 작용으로 중지되지 않도록 설정
    },
    navigation: {
      nextEl: ".carousel-next",
      prevEl: ".carousel-prev",
    },
  });

  carouselDiv.addEventListener("mouseover", () => {
    carousel.autoplay.stop();
  });
  carouselDiv.addEventListener("mouseout", () => {
    carousel.autoplay.start();
  });

  arrowsBtnPrev.addEventListener("mouseover", () => {
    carousel.autoplay.stop();
  });
  arrowsBtnPrev.addEventListener("mouseout", () => {
    carousel.autoplay.start();
  });

  arrowsBtnNext.addEventListener("mouseover", () => {
    carousel.autoplay.stop();
  });
  arrowsBtnNext.addEventListener("mouseout", () => {
    carousel.autoplay.start();
  });
}

// Light switcher
const lightSwitches = document.querySelectorAll(".light-switch");
if (lightSwitches.length > 0) {
  lightSwitches.forEach((lightSwitch, i) => {
    if (
      localStorage.getItem("dark-mode") === "true" ||
      !("dark-mode" in localStorage)
    ) {
      // eslint-disable-next-line no-param-reassign
      lightSwitch.checked = true;
    }
    lightSwitch.addEventListener("change", () => {
      const { checked } = lightSwitch;
      lightSwitches.forEach((el, n) => {
        if (n !== i) {
          // eslint-disable-next-line no-param-reassign
          el.checked = checked;
        }
      });
      if (lightSwitch.checked) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("dark-mode", true);
      } else {
        document.documentElement.classList.remove("dark");
        // localStorage.setItem('dark-mode', false);  //remove
        localStorage.setItem("dark-mode", true);
      }
    });
  });
}

var loginBtn = document.getElementById("signin-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    signin();
  });

  var passwordInput = document.getElementById("password");
  if (passwordInput) {
    passwordInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        signin();
      }
    });
  }
}
function signin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (!email) {
    alert("Please enter your email address.");
    return;
  }

  if (!password) {
    alert("Please enter password.");
    return;
  }
  fetch("https://veriproof.ai:5001/api/onboarding/signin", {
    method: "POST",
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      // 가져올 쿠키의 이름
      var cookieName = "lastLoginUrl";

      // 쿠키 문자열 가져오기
      var cookies = document.cookie;

      // 쿠키 문자열을 세미콜론으로 분할하여 배열로 변환
      var cookieArray = cookies.split(";");

      // 쿠키 배열을 순회하며 특정 쿠키 찾기
      var desiredCookie = null;
      for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim(); // 공백 제거
        if (cookie.indexOf(cookieName + "=") == 0) {
          desiredCookie = cookie.substring(
            cookieName.length + 1,
            cookie.length
          );
          break;
        }
      }

      if (desiredCookie) {
        window.location.href = decodeURIComponent(desiredCookie);
      } else {
        alert("Login failed.");
      }
    })
    .catch((error) => {
      alert("Login failed. Please check your username and password.");
    });
}

var cancelBtn = document.getElementById("cancel-btn");
if (cancelBtn) {
  cancelBtn.addEventListener("click", () => {
    cancel();
  });
}

function cancel() {
  window.close();
}