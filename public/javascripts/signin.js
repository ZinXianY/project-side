const email = document.querySelector('#email')
const password = document.querySelector('#password')
const signinButton = document.querySelector('.signin-button')

email.addEventListener('input', function check(event) {
  if (email.value.length > 0) {
    email.classList.remove('is-invalid')
    email.classList.add('is-valid')
  } else {
    (email.value.length < 1)
    email.classList.add('is-invalid')
    email.nextElementSibling.innerHTML = "請輸入信箱!"
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

signinButton.addEventListener('click', function check(event) {
  if (email.value.length < 1) {
    email.classList.add('is-invalid')
    email.nextElementSibling.innerHTML = "請輸入信箱!"
    event.preventDefault()
  }
  if (password.value.length < 1) {
    password.classList.add('is-invalid')
    password.nextElementSibling.innerHTML = "密碼不可為空白!"
    event.preventDefault()
  }
})