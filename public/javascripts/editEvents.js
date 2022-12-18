const editImageInput = document.querySelector('#edit-image-input')
const editImageWrapper = document.querySelector('#edit-image-wrapper')
const editCurrentImage = document.querySelector('#edit-current-image')
const deleteImageBtn = document.querySelector('#edit-delete-img-btn')

const editAvatarInput = document.querySelector('#edit-avatar-input')
const editCurrentAvatar = document.querySelector('#edit-current-avatar')
const editAvatarWrapper = document.querySelector('#edit-avatar-wrapper')

editImageInput.addEventListener('change', function imagePreview(event) {
  if (event.target.files.length !== 0) {
    const src = URL.createObjectURL(event.target.files[0])
    let previewArea = document.createElement('div')
    previewArea.innerHTML = `
      <img src="${src}" class="image" id="edit-image-preview">
    `

    if (!editCurrentImage.classList.contains('hide')) {
      editCurrentImage.classList.add('hide')
      deleteImageBtn.classList.remove('hide')
    }
    if (editImageWrapper.children.length > 1) {
      editImageWrapper.lastElementChild.remove()
    }
    editImageWrapper.appendChild(previewArea)
  }
})

deleteImageBtn.addEventListener('click', function deleteImagePreview() {
  editImageInput.value = ""
  editImageWrapper.lastElementChild.remove()
  editCurrentImage.classList.remove('hide')
  deleteImageBtn.classList.add('hide')
})

editAvatarInput.addEventListener('change', function avatarPreview(event) {
  if (event.target.files.length !== 0) {
    const src = URL.createObjectURL(event.target.files[0])
    let previewArea = document.createElement('div')
    previewArea.innerHTML = `
      <img src="${src}" class="avatar" id="edit-avatar-preview">
    `

    if (!editCurrentAvatar.classList.contains('hide')) {
      editCurrentAvatar.classList.add('hide')
    }
    if (editAvatarWrapper.children.length > 1) {
      editAvatarWrapper.lastElementChild.remove()
    }
    editAvatarWrapper.appendChild(previewArea)
  }
})