
const counter = document.querySelector('.header__cart-counter')
const total = document.querySelector('.header__cart-total')

fetch('https://6479d125a455e257fa63d644.mockapi.io/cart')
    .then(response => {
        return response.json()
    })
    .then(data => {
        const count = data.length;
        let totalSum = 0;

        for (let i = 0; i < data.length; i++) {
            totalSum += Number(data[i].price.substring(0, data[i].price.length - 2))
        }

        counter.textContent = `Кол-во: ${count}`
        total.textContent = `Общая сумма: ${totalSum} тг`
    })