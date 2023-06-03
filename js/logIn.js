// Вход
const url = 'https://6477ac529233e82dd53c0481.mockapi.io/account'

const loginAccount = document.querySelector('#loginAcc')
const passwordAccount = document.querySelector('#passwordAcc')
const loginBtn = document.querySelector('#loginBtn')
const logInForm = document.querySelector('.logInForm')

const div = document.createElement('p')

    div.textContent = 'Логин или пароль неверный'

    div.style.textAlign = 'center'
    div.style.marginTop = '20px'
    div.style.fontSize = '18px'
    div.style.color = 'red'
    div.style.fontWeight = '600'


loginBtn.addEventListener('click', (event) => {
  event.preventDefault()

  div.remove()

  const valueLogin = loginAccount.value
  const valuePass = passwordAccount.value

  console.log(`login: ${valueLogin}, pass: ${valuePass}`)

  fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; 0 < data.length; i++) {
            if (data[i].user == valueLogin && data[i].password === valuePass) {
                window.location.href = 'main.html';
            } else {
                logInForm.append(div)
            }
        }
    })

})
