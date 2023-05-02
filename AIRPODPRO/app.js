const intro = document.querySelector('.intro')
const video = intro.querySelector('video')
const text = intro.querySelector('h1')
//END SECTION
const section = document.querySelector('section')
const end = section.querySelector('h1')

//SCROLLMAGIC
const controller = new ScrollMagic.Controller()

const scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElemnt: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller)