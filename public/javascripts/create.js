const gdName = document.querySelector('#name')
const year = document.querySelector('#year')
const avatarName = document.querySelector('#avatarName')
const categorySelect = document.querySelector('#categoryId')
const description = document.querySelector('#description')
const avatarImg = document.querySelector('#avatar-input')
const gdImg = document.querySelector('#image-input')

const createButton = document.querySelector('.create-sumbit')

gdName.addEventListener('input', function check(event) {
  if (gdName.value.length > 10) {
    gdName.classList.add('is-invalid')
    gdName.nextElementSibling.innerHTML = '機體名稱不可超過10字!'
  }
  if (gdName.value.length < 1) {
    gdName.classList.add('is-invalid')
    gdName.nextElementSibling.innerHTML = '機體名稱不可為空白!'
  }
  if (gdName.value.length > 0 && gdName.value.length < 10) {
    gdName.classList.remove('is-invalid')
    gdName.classList.add('is-valid')
  }
})

year.addEventListener('input', function check(event) {
  if (year.value.length > 0) {
    year.classList.remove('is-invalid')
    year.classList.add('is-valid')
  } else {
    (year.value.length < 1)
    year.classList.add('is-invalid')
    year.nextElementSibling.innerHTML = '登場年份不可為空白!'
  }
})

avatarName.addEventListener('input', function check(event) {
  if (avatarName.value.length > 0) {
    avatarName.classList.remove('is-invalid')
    avatarName.classList.add('is-valid')
  } else {
    (avatarName.value.length < 1)
    avatarName.classList.add('is-invalid')
    avatarName.nextElementSibling.innerHTML = '駕駛員名稱不可為空白!'
  }
})

categorySelect.addEventListener('input', function check(event) {
  if (categorySelect.value.length > 0) {
    categorySelect.classList.remove('is-invalid')
    categorySelect.classList.add('is-valid')
  } else {
    (categorySelect.value.length < 1)
    categorySelect.classList.add('is-invalid')
    categorySelect.nextElementSibling.innerHTML = '請選擇系列!'
  }
})

description.addEventListener('input', function check(event) {
  if (description.value.length > 300) {
    description.classList.add('is-invalid')
    description.nextElementSibling.innerHTML = '簡介內容不可超過300字!'
  }
  if (description.value.length < 1) {
    description.classList.add('is-invalid')
    description.nextElementSibling.innerHTML = '簡介內容不可為空白!'
  }
  if (description.value.length > 0 && description.value.length < 300) {
    description.classList.remove('is-invalid')
    description.classList.add('is-valid')
  }
})

avatarImg.addEventListener('input', function check(event) {
  if (avatarImg.value.length > 0) {
    avatarImg.classList.remove('is-invalid')
    avatarImg.classList.add('is-valid')
  } else {
    (avatarImg.value.length < 1)
    avatarImg.classList.add('is-invalid')
    avatarImg.nextElementSibling.innerHTML = '請選擇駕駛員圖片!'
  }
})

gdImg.addEventListener('input', function check(event) {
  if (gdImg.value.length > 0) {
    gdImg.classList.remove('is-invalid')
    gdImg.classList.add('is-valid')
  } else {
    (gdImg.value.length < 1)
    gdImg.classList.add('is-invalid')
    gdImg.nextElementSibling.innerHTML = '請選擇機體圖片!'
  }
})

createButton.addEventListener('click', function check(event) {
  if (gdName.value.length < 1) {
    gdName.classList.add('is-invalid')
    gdName.nextElementSibling.innerHTML = '機體名稱為必填欄位!'
    event.preventDefault()
  }
  if (year.value.length < 1) {
    year.classList.add('is-invalid')
    year.nextElementSibling.innerHTML = '登場年份為必填欄位!'
    event.preventDefault()
  }
  if (avatarName.value.length < 1) {
    avatarName.classList.add('is-invalid')
    avatarName.nextElementSibling.innerHTML = '駕駛員名稱為必填欄位!'
    event.preventDefault()
  }
  if (categorySelect.value.length < 1) {
    categorySelect.classList.add('is-invalid')
    categorySelect.nextElementSibling.innerHTML = '請選擇系列!'
    event.preventDefault()
  }
  if (description.value.length < 1) {
    description.classList.add('is-invalid')
    description.nextElementSibling.innerHTML = '簡介為必填欄位!'
    event.preventDefault()
  }
  if (avatarImg.value.length < 1) {
    avatarImg.classList.add('is-invalid')
    avatarImg.nextElementSibling.innerHTML = '請選擇駕駛員圖片!'
    event.preventDefault()
  }
  if (gdImg.value.length < 1) {
    gdImg.classList.add('is-invalid')
    gdImg.nextElementSibling.innerHTML = '請選擇機體圖片!'
    event.preventDefault()
  }
})