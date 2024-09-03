// primary picture's animation to left
var sickPrimary = {
    autoplay: true,
    autoplaySpeed: 2400,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    asNavFor: '.text-slider',
    centerMode: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
}
// secondary picture's animation
var sickSecondary = {
    autoplay: true,
    autoplaySpeed: 2400,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    asNavFor: '.image-slider',
    prevArrow: $('.prev'),
    nextArrow: $('.next')
}
// slide images on click
$('.image-slider').slick(sickPrimary);
$('.text-slider').slick(sickSecondary);