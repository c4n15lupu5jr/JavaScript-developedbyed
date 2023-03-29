const modal = document.querySelector('.modal')
const preview = document.querySelectorAll('.gallery img')
const original = document.querySelector('.full-img')
const caption = document.querySelector('.caption')


preview.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add('open')
        original.classList.add('open')

        const originalScr = preview.getAttribute('data-original')
        original.scr = `./full/${originalScr}`
        const altText = preview.alt
        caption.textContent = altText
    })
})

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open')
        original.classList.remove('open')
    }
})