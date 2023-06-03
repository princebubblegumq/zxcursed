const wrapper = document.querySelector('.cart')

fetch('https://6479d125a455e257fa63d644.mockapi.io/cart')
    .then(response => {
        return response.json()
    })
    .then(data => {
        if (data.length != 0) {
            const wrapper = document.querySelector('.cart')
            wrapper.innerHTML = `
                <div class="promo">
                    <div class="promo-inner">
                    <input type="text" placeholder="Введите промокод" class="input">
                    <button>Проверить</button>
                    </div>
                </div>
            `
            
            for (let i = 0; i <= data.length; i++) {
                const div = document.createElement('div')

                div.classList.add('product')

                div.innerHTML = `
                    <h3 class='productTitle'>Товар: ${data[i].title}</h3>
                    <div class='productPrice'>Цена: ${data[i].price}</div>

                    <div id="btnProduct" class="btnProduct" data-id="${data[i].id}">Удалить</div> 
                `    
                wrapper.insertAdjacentElement('afterbegin', div)
            }
        }
    })

    document.body.addEventListener('click', e => {
        const target = e.target

        if (target.className == 'btnProduct') {
            const id = target.dataset.id
            console.log(id)
            target.parentNode.remove()

            fetch(`https://6479d125a455e257fa63d644.mockapi.io/cart/${id}`, {
                method: 'DELETE'
            })
            .then(response => {
                response.json()
            })
            .then(data => {
                if (data.length = 0) {
                    wrapper.innerHTML = `
                        <h1>Здесь пока нету заказов...</h1>
                    `
                }
            })
        }
    })




    
