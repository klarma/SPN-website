// jQuery

$('nav a').on('click', function () {
    const goToSection = '#' + $(this).attr('class');
    $('body,html').animate({
        scrollTop: $(goToSection).offset().top
    }, 500)
})



// js

const icon = document.querySelector('.burger');

icon.addEventListener('click', function () {
    icon.classList.toggle('active');
})


window.addEventListener('scroll', function () {

    const windowHeight = window.innerHeight;
    const scrollValue = this.scrollY;

    const imgShipping = document.querySelector('.shipping .img');
    const imgDistribution = document.querySelector('.distribution .img');
    const imgLs = document.querySelector('.ls .img');
    const contactInscription = document.querySelector('div.image h1');
    const lineLeft = document.querySelector('div.lineLeft span');
    const lineRight = document.querySelector('div.lineRight span');


    const imgShippingFromTop = imgShipping.offsetTop;
    const imgDistributionFromTop = imgDistribution.offsetTop;
    const imgLsFromTop = imgLs.offsetTop;
    const contactInscriptionFromTop = contactInscription.offsetTop;

    const imgShippingHeight = imgShipping.offsetHeight;
    const imgDistributionHeight = imgDistribution.offsetHeight;
    const imgLsHeight = imgLs.offsetHeight;
    const contactInscriptionHeight = contactInscription.offsetHeight;

    if (scrollValue > imgShippingFromTop / 2) {
        imgShipping.classList.add('active');
    }

    if (scrollValue > imgDistributionFromTop + imgDistributionHeight + windowHeight / 2) {
        imgDistribution.classList.add('active');
    }

    if (scrollValue > imgLsFromTop + imgLsHeight + 1.5 * windowHeight) {
        imgLs.classList.add('active');
    }

    if (scrollValue > contactInscriptionFromTop + contactInscriptionHeight + 2.8 * windowHeight) {
        contactInscription.classList.add('active');
        lineLeft.classList.add('active');
        lineRight.classList.add('active');
    }
})