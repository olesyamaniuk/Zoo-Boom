

$(function () {
  $('.gallery__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: 'linear',
    prevArrow: '.gallery-list-left',
    nextArrow: '.gallery-list-right',
  });
});






$(function () {
 
  $('.faq-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: 'linear',
    prevArrow: '.faq-list-left',
    nextArrow: '.faq-list-right',
    customPaging: () => `<img src="/image/Ellipse 2.png" alt="dot" class="custom-dot">`
  });

  $('.faq-list').on('afterChange', (event, slick, currentSlide) => {
    $('.faq-list .slick-dots li').each((index, dot) => {
      const imagePath = (index === currentSlide) ? '/image/Ellipse 1.png' : '/image/Ellipse 2.png';
      $(dot).find('img').attr('src', imagePath);
    });
  });

 
  $('.how-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: 'linear',
    prevArrow: '.how-list-left',
    nextArrow: '.how-list-right',
    customPaging: () => `<img src="/image/Ellipse 2.png" alt="dot" class="custom-dot">`
  });

  $('.how-list').on('afterChange', (event, slick, currentSlide) => {
    $('.how-list .slick-dots li').each((index, dot) => {
      const imagePath = (index === currentSlide) ? '/image/Ellipse 1.png' : '/image/Ellipse 2.png';
      $(dot).find('img').attr('src', imagePath);
    });
  });
});







