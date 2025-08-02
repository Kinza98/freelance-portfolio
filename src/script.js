// TOGGLE MENU Function
function menuToggle(){
  let menuIcon = document.getElementById("responsive-bars");
  let menu = document.getElementById("nav-menu");
  if(menuIcon.classList.contains("fa-bars")){
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
    menu.style.display="flex";
  }else{
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-times");
    menu.style.display="none";
  }
}

// load percentage bars
let started = false;
function animateCounters() {
  let counters = document.querySelectorAll(".percentage-bar");
  let bgCount = 0;

  let bgColors = [  //color for bars
    '#c641f2',
    '#4171f2',
    '#f6c614',
    '#f17235',
    '#16b0b6',
    '#d344a1',
    '#40d37c',
  ];

  counters.forEach(counter => {
    let target = parseFloat(counter.getAttribute("data-target"));
    counter.style.setProperty('--after-bg', bgColors[bgCount]);
    counter.style.setProperty('--after-width', target + "%");
    bgCount = (bgCount + 1) % bgColors.length;
  });
}

// ON WINDOW Scroll
window.addEventListener("scroll", function(){

  // header become fixed on scroll down
  if(this.scrollY>0){
    document.getElementById("header").classList.add("fixed-header")
  }else{
    document.getElementById("header").classList.remove("fixed-header")
  }

  // 'scroll to top' icon appears when scroll down
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }

  // percentage bars load when scroll comes to their section the first time
  const trigger = document.querySelector('.percentage-bar')?.getBoundingClientRect().top;
  if (trigger !== undefined && trigger < window.innerHeight && !started) {
    animateCounters();
    started = true;
  }
})

// Scroll to top on click
window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("scrollTopBtn")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


// code typing animation
const lines = [ //code lines
  "const developer = {",
  "  name: 'Kinza Ijaz',",
  "  title: 'Frontend Developer',",
  "  experience: 'Fiverr Freelancer',",
  "  passion: 'Creating Amazing UIs',",
  "  status: 'Available'",
  "};"
];

  const codeElement = document.getElementById("typed-code");
  const lineNumbers = document.getElementById("line-numbers");
  const cursor = document.querySelector(".cursor");

  let lineIndex = 0;
  let charIndex = 0;
  let lineIndexCheck = -1;


  // code  typing function
  function typeNextLine(){
    const currentLine = lines[lineIndex];
    if (charIndex === 0) {
      if (lineIndex <= lines.length - 1)
      lineNumbers.textContent += `${lineIndex + 1}\n`;
    }
    if(lineIndex < lines.length){
      if(charIndex < currentLine.length){
        codeElement.textContent += currentLine.charAt(charIndex);
        charIndex++;
        moveCursor();
        setTimeout(typeNextLine, 50)
      }else {
        console.log(lineIndex, lines.length)
        if (lineIndex < lines.length - 1) {
          codeElement.textContent += "\n";
        }
        charIndex = 0
        lineIndex++;
        moveCursor();
        setTimeout(typeNextLine, 30);
      }
    }
  }

  function moveCursor(){
    let { offsetWidth, offsetTop } = codeElement;
    cursor.style.left = `${offsetWidth + 10}px`; 
    cursor.style.top = `${offsetTop - 20}px`; 
  }


// on window load, page loader removes
window.addEventListener("load", function(){
  document.querySelector(".dot-loader").classList.add("d-none")
  typeNextLine();
});

