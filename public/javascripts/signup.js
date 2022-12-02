const signupName = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const checkPassword = document.querySelector('#checkPassword')

const signupButton = document.querySelector('.signup-button')

signupName.addEventListener('input', function check(event) {
  if (signupName.value.length > 15) {
    signupName.classList.add('is-invalid')
    signupName.nextElementSibling.innerHTML = '名稱不可超過15字!'
  }
  if (signupName.value.length < 1) {
    signupName.classList.add('is-invalid')
    signupName.nextElementSibling.innerHTML = '名稱不可為空白!'
  }
  if (signupName.value.length > 0 && signupName.value.length < 15) {
    signupName.classList.remove('is-invalid')
    signupName.classList.add('is-valid')
  }
})

email.addEventListener('input', function check(event) {
  if (email.value.length > 0) {
    email.classList.remove('is-invalid')
    email.classList.add('is-valid')
  } else {
    (email.value.length < 1)
    email.classList.add('is-invalid')
    email.nextElementSibling.innerHTML = '請輸入信箱!'
  }
})

password.addEventListener('input', function check(event) {
  if (password.value.length > 0) {
    password.classList.remove('is-invalid')
    password.classList.add('is-valid')
  } else {
    (password.value.length < 1)
    password.classList.add('is-invalid')
    password.nextElementSibling.innerHTML = "密碼不可為空白!"
  }
})

checkPassword.addEventListener('input', function check(event) {
  if (checkPassword.value.length > 0) {
    checkPassword.classList.remove('is-invalid')
    checkPassword.classList.add('is-valid')
  } else {
    (checkPassword.value.length < 1)
    checkPassword.classList.add('is-invalid')
    checkPassword.nextElementSibling.innerHTML = "請輸入確認密碼!"
  }
})

signupButton.addEventListener('click', function check(event) {
  if (signupName.value.length < 1) {
    signupName.classList.add('is-invalid')
    signupName.nextElementSibling.innerHTML = '名稱為必填欄位!'
    event.preventDefault()
  }
  if (email.value.length < 1) {
    email.classList.add('is-invalid')
    email.nextElementSibling.innerHTML = '信箱為必填欄位!'
    event.preventDefault()
  }
  if (password.value.length < 1) {
    password.classList.add('is-invalid')
    password.nextElementSibling.innerHTML = '密碼為必填欄位!'
    event.preventDefault()
  }
  if (password.value !== checkPassword.value) {
    checkPassword.classList.add('is-invalid')
    checkPassword.nextElementSibling.innerHTML = '確認密碼與密碼不相符!'
    event.preventDefault()
  }
})