document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelector("#menuicon")
      .addEventListener("click", function (e) {
        if (document.querySelector(".sidebar").classList.contains("on")) {
          //메뉴 slideOut
          document.querySelector(".sidebar").classList.remove("on");
        } else {
          //메뉴 slideIn
          document.querySelector(".sidebar").classList.add("on");
          //slideIn시 menuBtn의 img src를 cross icon으로 변경
        }
    });
});

const setVh = () => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
};
window.addEventListener('resize', setVh);
setVh();