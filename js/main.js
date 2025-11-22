const menuItems = [
    {
        title: "Guioza",
        text: "Tradicional macarrão tailandês salteado com vegetais frescos",
        price: 12,
        preview: "assets/gyoza.jpg"
    },
    {
        title: "Espetinho de Frango Teriyaki",
        text: "3 deliciosos espetinhos de frango ao molho teriyaki",
        price: 18.50,
        preview: "assets/teriyaki.jpg"
    },
    {
        title: "Combinado Sushi Premium",
        text: "Seleção especial de sushis e sashimis frescos",
        price: 45,
        preview: "assets/sushi.jpg"
    },
    {
        title: "Pad Thai com Camarões",
        text: "Tradicional macarrão tailandês salteado com vegetais frescos",
        price: 32,
        preview: "assets/noodles.jpg"
    }
]

function createItem(item, id) {
    const div = document.createElement("div")
    div.classList.add("item")
    div.setAttribute('data-item', id)

    const title = document.createElement("h2")
    title.classList.add("item_title")
    title.textContent = item.title

    const text = document.createElement("p")
    text.classList.add("item_text")
    text.textContent = item.text

    const price = document.createElement("p")
    price.classList.add("item_price")
    price.innerHTML = `a partir de  <span class="item_price_highlight">R$${item.price}</span>`

    const img = document.createElement("img")
    img.src = item.preview
    img.alt = "Foto do prato"
    img.classList.add("item_preview")

    div.appendChild(title)
    div.appendChild(text)
    div.appendChild(price)
    div.appendChild(img)

    return div
}

window.addEventListener('DOMContentLoaded', () => {
    const menuElem = document.querySelector('.menu')
    menuElem.textContent = ''
    menuItems.forEach((item, idx) => {
        menuElem.appendChild(createItem(item, idx))
    })

    const items = document.querySelectorAll('[data-item]')
    items.forEach(item => {
        item.addEventListener('click', () => {
            const idx = item.dataset.item
            console.log(menuItems[idx])
        })
    })
})
