const images = document.querySelectorAll(".img-item");
const btnPrev = document.querySelector(".prevBtn");
const btnNext = document.querySelector(".nextBtn");
let num = 0;

let startSlide = 0;
let lastSlide = images.length - 1;

btnPrev.addEventListener("click", () => {
  if (num <= lastSlide && num > 0) {
    num--;
    startSlide = num * -100;
  }
  images.forEach((element) => {
    element.style.transform = `translatex(${startSlide}%)`;
  });
});

btnNext.addEventListener("click", () => {
  if (num < lastSlide) {
    num++;
    startSlide = num * -100;
    images.forEach((element) => {
      element.style.transform = `translatex(${startSlide}%)`;
    });
  }
});

function scrollLeftBtn() {
  const container = document.getElementById("scrollContainer");  
  container.scrollBy({ left: -300, behavior: "smooth" });
}

function scrollRightBtn() {
  const container = document.getElementById("scrollContainer");
  container.scrollBy({ left: 300, behavior: "smooth" });
}

// for Best Sellers in Computers & Accessories
function scrollLeftBtn2() {
  const container = document.getElementById("bestSellInCompContainer");  
  container.scrollBy({ left: -300, behavior: "smooth" });
}

function scrollRightBtn2() {
  const container = document.getElementById("bestSellInCompContainer");
  container.scrollBy({ left: 300, behavior: "smooth" });
}