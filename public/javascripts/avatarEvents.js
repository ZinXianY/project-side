//avatar
const avatarWrapper = document.querySelector('#avatar-wrapper')
const avatarInput = document.querySelector('#avatar-input')
const currentAvatar = document.querySelector('#current-avatar')
//delete
const deleteAvatar = document.querySelector('#delete-btn')

//avatar preview
avatarInput.addEventListener('change', function avatarPreview(event) {
  if (event.target.files.length !== 0) {
    const src = URL.createObjectURL(event.target.files[0])
    let previewArea = document.createElement('div')
    previewArea.innerHTML = `
     <img src="${src}" class="avatar" id="avatar-preview">
    `

    if (!currentAvatar.classList.contains('hide')) {
      currentAvatar.classList.add('hide')
      deleteAvatar.classList.remove('hide')
    }
    if (avatarWrapper.children.length > 1) {
      avatarWrapper.lastElementChild.remove()
    }
    avatarWrapper.appendChild(previewArea)
  }
})

//delete preview
deleteAvatar.addEventListener('click', function deleteAvatarPreview() {
  avatarInput.value = ""
  avatarWrapper.lastElementChild.remove()
  currentAvatar.classList.remove('hide')
  deleteAvatar.classList.add('hide')
})