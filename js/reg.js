
const loginAcc = document.querySelector('#userAcc')
const passwordAcc = document.querySelector('#passwordAcc')
const phoneAcc = document.querySelector('#phoneAcc')
const btnReg = document.querySelector('#btnReg')

btnReg.addEventListener('click', e => {
    e.preventDefault()

    const obj = {}

    if (loginAcc.value == '' || passwordAcc.value == '' || phoneAcc.value == '') {
        console.log('error')
    } else {
        obj.user = loginAcc.value
        obj.password = passwordAcc.value
        obj.phone = phoneAcc.value

        fetch('https://6477ac529233e82dd53c0481.mockapi.io/account', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(data => {
            window.location.href = 'logIn.html';

            const user = {login: obj.user, pasword: obj.password, phone: obj.phone}
                localStorage.setItem('user', JSON.stringify(user))
        })
    }
})