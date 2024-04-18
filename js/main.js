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
