$(document).ready(() => {
  $('.hamburger-wrapper').on('click', () => {
    console.log('hamburger clicked');
    $('.hamburger-menu').toggleClass('animate');
  });
});
