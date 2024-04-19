//Navigation Bar effects on scroll
window.addEventListener( "scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY >  0);
} );

// Services Section - Modal
const serviceModals = document.querySelectorAll( '.service-modal' );
const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
  serviceModals[modalClick].classList.add( "active" )
}

learnMoreBtns.forEach((learnMoreBtn, i) => {
  learnMoreBtn.addEventListener('click', ()=>{
    modal(i);
    })
})

modalCloseBtns.forEach ((modalCloseBtn)=>{
  modalCloseBtn.addEventListener ('click', ()=>{
    serviceModals.forEach ((modalView)=> {
      modalView.classList.remove ("active")
    })
  })
});

// Portfolio Section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-modal")
const imgCards = document.querySelectorAll(".img-card")
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn")

var portfolioModal = function (modalClick) {
  portfolioModals[modalClick].classList.add("active")
}

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    portfolioModal(i)
  })
})

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener("click", () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active")
    })
  })
})

// Website dark/light theme
const themeBtn = document.querySelector(".theme-btn")

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle('dark-theme')
  themeBtn.classList.toggle('sun')
  localStorage.setItem("saved-theme", getCurrentTheme())
  localStorage.setItem("saved-icon", getCurrentIcon())
})

const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark' : 'light';
const getCurrentIcon = () => themeBtn.classList.contains('sun') ? 'sun' : 'moon';

const savedTheme = localStorage.getItem('saved-theme');
const savedIcon = localStorage.getItem('saved-icon');

if(savedTheme){
  document.body.classList[savedTheme === "dark" ?  "add" : "remove"]('dark-theme');
  themeBtn.classList[savedIcon === "sun" ?  "add" : "remove"]('sun')
} else {
  document.body.classList.add('light-theme');
  themeBtn.classList.add('fa-sun');
}


// Scrool to Top Button
const scrollTopBtn = document.querySelector(".scrollToTop-btn")

window.addEventListener("scroll", function(){
  scrollTopBtn.classList.toggle("active", window.scrollY > 500)
})

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})


// Navigation menu ites active
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section')
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    let sectionHeight = current.offsetHeight
    let sectionTop = current.offsetTop - 50
    let id = current.getAttribute( 'id' )

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector(".nav-items a[href*=" + id + "]").classList.add('active');
      } else{
        document.querySelector(".nav-items a[href*=" + id + "]").classList.remove('active');
      }
  })
})