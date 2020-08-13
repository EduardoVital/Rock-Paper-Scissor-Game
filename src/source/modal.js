import { modalBtn } from './elements.js'

const modalEvents = (element) => {
  const modal = document.querySelector(element)
  modal.classList.add('mostrar')
  modal.addEventListener('click', (e) => {
    if (
      e.target.className === 'modal__close' ||
      e.target.className === 'modal mostrar'
    ) {
      modal.classList.remove('mostrar')
    }
  })
}

const showModal = () => {
  modalBtn.addEventListener('click', () => modalEvents('.modal'))
}

export { showModal }
