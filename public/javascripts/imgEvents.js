//image
const imageWrapper = document.querySelector('#image-wrapper')
const imageInput = document.querySelector('#image-input')
const currentImage = document.querySelector('#current-image')

//image preview
imageInput.addEventListener('change', function avatarPreview(event) {
  if (event.target.files.length !== 0) {
    const src = URL.createObjectURL(event.target.files[0])
    let previewArea = document.createElement('div')
    previewArea.innerHTML = `
     <img src="${src}" class="image" id="image-preview">
    `
    if (!currentImage.classList.contains('hide')) {
      currentImage.classList.add('hide')
    }
    if (imageWrapper.children.length > 1) {
      imageWrapper.lastElementChild.remove()
    }
    imageWrapper.appendChild(previewArea)
  }
})