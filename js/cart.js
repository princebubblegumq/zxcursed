
const menu = document.querySelectorAll('.section__block')
const btn = document.querySelectorAll('#btnModal')


for(let i = 0; i < menu.length; i++) {
    btn[i].addEventListener('click', (e) => {
        const itemTitle = menu[i].querySelector('.section__block-title').textContent
        const itemPrice = menu[i].querySelector('.section__block-price').textContent

        const postData = {
            title: itemTitle,
            price: itemPrice
        }

        fetch('https://6479d125a455e257fa63d644.mockapi.io/cart', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(data => {
            btn[i].textContent = 'Выбрано'
            btn[i].setAttribute('disabled', '')

            if (e.target.tagName == 'BUTTON') {
                e.target.classList.add('added')
            }

            const counter = document.querySelector('.header__cart-counter')

            fetch('https://6479d125a455e257fa63d644.mockapi.io/cart')
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    const count = data.length

                    counter.textContent = `Кол-во: ${count}`
                })

            setTimeout(() => {
                btn[i].textContent = 'Выбрать'
                btn[i].removeAttribute('disabled', '')
                e.target.classList.remove('added')
            }, 1000)
        })
    })
}