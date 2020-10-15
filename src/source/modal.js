import { modalBtn } from './elements.js'

const modalClass = 'mostrar'

const modalEvents = (element) => {
  const modal = document.querySelector(element)
  modal.classList.add(modalClass)
  modal.addEventListener('click', (e) => {
    if (
      e.target.className === 'modal__close' ||
      e.target.className === `modal ${modalClass}` || 
      e.target.className === 'modal__close mobile'
    ) {
      modal.classList.remove(modalClass)
    }
  })
}

const showModal = () => {
  modalBtn.addEventListener('click', () => modalEvents('.modal'))
}

export { showModal }
