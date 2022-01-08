$(document).ready(function() {
    var wow = new WOW();
    wow.init();

    setTimeout(() => {
        $("#page__loader").fadeOut()
        $("body").removeClass('overflow-hidden');   
    }, 2000);

    $(window).scroll(function () {
        if ($(this).scrollTop() > 240) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    const loadingNumber = document.querySelector('#loadingNumber');
    const loadingCircle = document.querySelector('.loading-circle');
    let load = 0;

    function updateLoader() {
        load += (load < 100);
        loadingNumber.innerHTML = load;
        loadingCircle.style.background = 'conic-gradient(from 0deg at 50% 50%, rgba(111, 123, 247, 1) 0%, rgba(155, 248, 244, 1) ' + load + '%, #101012 ' + load + '%)'
    }
    setInterval(updateLoader, 50);

    // Hamburger menu
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $('body').toggleClass('overflow-hidden')
        $('#mobile__dropdown').toggleClass('open')
    });


    var mobileLinks = $('.mobile__link')
    
    for (const link of mobileLinks) {
        $(link).click(function(e){
            $('.hamburger').trigger('click')
        }) 
    }




    const containerEl = document.getElementById('hero-rotating-text');
const itTextEl = document.getElementById('hero-it-text');
const textEls =
  Array.from(containerEl.querySelectorAll('[data-hero-rotating-text]'));

const interval = 2000;

let activeElement = 0;

function rotateText() {
  setTimeout(rotateText, interval);

  const oldTextEl = textEls[activeElement];

  activeElement += 1;
  if (activeElement === textEls.length) {
    activeElement = 0;
  }

  const newTextEl = textEls[activeElement];

  const oldTextBeforeBoundingRect = oldTextEl.getBoundingClientRect();
  const itTextBeforeBoundingRect = itTextEl.getBoundingClientRect();
  oldTextEl.classList.add('is-inactive');
  newTextEl.classList.remove('is-inactive');
  newTextEl.classList.remove('is-hidden');
  const oldTextAfterBoundingRect = oldTextEl.getBoundingClientRect();
  const itTextAfterBoundingRect = itTextEl.getBoundingClientRect();

  const oldTextLeftPosition =
    oldTextBeforeBoundingRect.left - oldTextAfterBoundingRect.left;
  const oldTextTopPosition =
    oldTextBeforeBoundingRect.top - oldTextAfterBoundingRect.top;
  const itTextLeftPosition =
    itTextBeforeBoundingRect.left - itTextAfterBoundingRect.left;

  const oldTextAnimationPlayer = oldTextEl.animate([{
    opacity: 1,
    transform: `translateX(${oldTextLeftPosition}px)
      translateY(${oldTextTopPosition}px)`,
  }, {
    opacity: 0,
    transform: `translateX(${oldTextLeftPosition}px) translateY(0)`,
  }], {
    duration: 300,
    fill: 'forwards',
    easing: 'ease-in-out',
  });
  oldTextAnimationPlayer.onfinish = () => {
    oldTextEl.classList.add('is-hidden');
  };

  newTextEl.animate([{
    opacity: 0,
    transform: 'translateY(100%)',
  }, {
    opacity: 1,
    transform: 'translateY(0)',
  }], {
    duration: 300,
    fill: 'both',
    easing: 'ease-in-out',
  });

  itTextEl.animate([{
    transform: `translateX(${itTextLeftPosition}px)`,
  }, {
    transform: 'translateX(0)',
  }], {
    duration: 300,
    fill: 'both',
    easing: 'ease-in-out',
  });
}

rotateText();

window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
  });
  
  // Scroll certain amounts from current position 
  window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });
  
  // Scroll to a certain element
  
  
})