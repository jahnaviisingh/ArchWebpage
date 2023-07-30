document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 210) {
      header.classList.add("dark-blue-header");
    } else {
      header.classList.remove("dark-blue-header");
    }
  });
});

var bg = document.getElementById("section1");
console.log(bg);

var bgchange = document.getElementById("btn-change");
console.log(bgchange)

// bgchange.addEventListener("click", changebg);

function changebg() {
  console.log("hello")
  bg.style.backgroundImage = 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60")';
}


//settings
var settings = document.getElementById("settings")
console.log(settings);
var settingsbox = document.getElementById("settingsbox")
console.log(settingsbox);

// settings.addEventListener("click", () => {
//   settingsbox.classList.toggle('setting-box-active');
// })


//my dark mode
const mode = document.getElementById("darkmodebtn")
console.log(mode);

mode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
})

//rtl
const rtl = document.getElementById("rtlbtn");
console.log(rtl);

rtl.addEventListener("click", () => {
  document.body.classList.toggle("rtl");
  settingsbox.classList.toggle("rtl-set");
})

//seamless
const seam = document.getElementById("seamless");
console.log(seam);

const secs = document.querySelectorAll('section');

seam.addEventListener("click", () => {
  secs.forEach(section => {
    // section.style.background = 'none';
    // section.style.filter = 'none';
    section.classList.toggle("seam-class");
  });
})


const bigsize = document.getElementById("fontbig-btn");
console.log(bigsize);

bigsize.addEventListener("click",function fontbig() {
  const size = document.querySelectorAll('h1');
  console.log(size);

  const h1tags = Array.from(size);
  console.log(h1tags);

  h1tags.map((a) => {
    console.log(a);
    a.style.fontSize = "44px";
  })

})


//A+
// const big = document.getElementById("fontbig-btn");
// console.log(big);

// big.addEventListener("click", () => {
//   const computedFontSize = window.getComputedStyle(document.body).fontSize;
//   const currentFontSize = parseFloat(computedFontSize);

//   if (big.classList.contains('active-big')) {
//     big.classList.remove('active-big');
//     const newFontSize = currentFontSize / 1.5;
//     document.body.style.fontSize = newFontSize + 'px';
//   }
//   else {

//     const newFontSize = currentFontSize * 1.5;
//     document.body.style.fontSize = newFontSize + 'px';
//     big.classList.add('active-big');

//   }
// })

// const header = document.getElementById('header');
// const hamburger = document.getElementById('hamburger');
// const hamNav = document.getElementById('hamburger-nav');

// hamburger.addEventListener('click', ()=>{
//     console.log('hehe');
//     hamNav.classList.toggle('nav-ham');
// });

// const hamburgerBtn = document.getElementById("hamburger");
// const menu = document.getElementById("hamburger-nav");

// hamburgerBtn.addEventListener("click", () => {
//   menu.classList.toggle("nav-ham");
// });


const ham = document.getElementById("hamburger");
const nav = document.getElementById("ham-nav");

ham.addEventListener("click",() =>{
  nav.classList.toggle("active");
})


