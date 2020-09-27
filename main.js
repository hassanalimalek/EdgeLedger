// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav_toggle");
const links = document.getElementById("nav_links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("nav_show");
});


function initMap(){

    // Your Location
    const loc = { lat:42.361145, lng:-71.057083};
    
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map')
    ,{
        zoom:14,
        center:loc
    });

    // The marker, positioned at location
    const marker = new google.maps.Marker({position: loc,map:map});

}

// Smooth Scrolling
$('#nav_links a, .btn').on('click', function(event) {
  if($(window).width() >= 520) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 61
        },
        800
      );
    }
  }
  if($(window).width() <= 519) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 245
        },
        800
      );
    }
  }
  });
  console.log("hello");