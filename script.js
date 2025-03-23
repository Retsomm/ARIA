// 導航欄變化
$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $(".navbar").removeClass("navbar-top");
  } else {
    $(".navbar").addClass("navbar-top");
  }
});

// GSAP 與 ScrollTrigger 設定
gsap.registerPlugin(ScrollTrigger);

// 標題動畫
gsap.from(".title", {
  y: -50,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".title",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

// 內容區塊動畫
gsap.from("#section_ask .img", {
  x: -200,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#section_ask",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.from("#section_about .col-sm-12", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#section_about",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
});

// 其他區塊動畫
document.querySelectorAll("#section_about .col-md-4").forEach((el) => {
  gsap.from(el, {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
});
