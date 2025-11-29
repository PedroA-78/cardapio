const app = Vue.createApp({
    data() {
        return {
            restaurant: {
                name: "Restaurante Oritental",
                text: "Culinária asiática autêntica",
                logo: "assets/restaurant-logo.png",
                background: "assets/hero-restaurant.jpg"
            },
            items: [
                {
                    id: 1,
                    title: "Guioza",
                    text: "Tradicional macarrão tailandês salteado com vegetais frescos",
                    price: 12,
                    preview: "assets/gyoza.jpg",
                    additionals: [
                        {
                            name: "Carne extra",
                            price: 8
                        },
                        {
                            name: "Queijo extra",
                            price: 5
                        },
                        {
                            name: "Molho especial",
                            price: 8
                        },
                        {
                            name: "Vegetais extras",
                            price: 4
                        },
                    ]
                },
                {
                    id: 2,
                    title: "Espetinho de Frango Teriyaki",
                    text: "3 deliciosos espetinhos de frango ao molho teriyaki",
                    price: 18.50,
                    preview: "assets/teriyaki.jpg",
                    additionals: [
                        {
                            name: "Carne extra",
                            price: 8
                        },
                        {
                            name: "Queijo extra",
                            price: 5
                        },
                        {
                            name: "Molho especial",
                            price: 8
                        },
                        {
                            name: "Vegetais extras",
                            price: 4
                        },
                    ]
                },
                {
                    id: 3,
                    title: "Combinado Sushi Premium",
                    text: "Seleção especial de sushis e sashimis frescos",
                    price: 45,
                    preview: "assets/sushi.jpg",
                    additionals: [
                        {
                            name: "Carne extra",
                            price: 8
                        },
                        {
                            name: "Queijo extra",
                            price: 5
                        },
                        {
                            name: "Molho especial",
                            price: 8
                        },
                        {
                            name: "Vegetais extras",
                            price: 4
                        },
                    ]
                },
                {
                    id: 4,
                    title: "Pad Thai com Camarões",
                    text: "Tradicional macarrão tailandês salteado com vegetais frescos",
                    price: 32,
                    preview: "assets/noodles.jpg",
                    additionals: [
                        {
                            name: "Carne extra",
                            price: 8
                        },
                        {
                            name: "Queijo extra",
                            price: 5
                        },
                        {
                            name: "Molho especial",
                            price: 8
                        },
                        {
                            name: "Vegetais extras",
                            price: 4
                        },
                    ]
                }
            ],
            selectedItem: null,
            openCart: null,
            cart: []
        }
    },
    computed: {
        isCartEmpty() {
            return this.cart.length === 0
        },
        cartCount() {
            return this.cart.reduce((acc, item) => acc + item.quantity, 0)
        },
        cartTotal() {
            return this.cart.reduce((t, item) => t + item.price * item.quantity, 0)
        }
    },
    methods: {
        openModal(item) {
            this.selectedItem = { ...item, quantity: 1 }
        },
        closeModal() {
            this.selectedItem = null
        },
        cartOpen() {
            this.openCart = true
        },
        cartClose() {
            this.openCart = null
        },
        addToCart(item) {
            const existing = this.cart.find(i => i.id === item.id)

            if (existing) {
                existing.quantity += item.quantity
            } else {
                this.cart.push({
                    ...item,
                    total: item.price * item.quantity
                })
            }
        },
        removeItem(i) {
            this.cart.splice(i, 1)
        },
        addToItem(item) {
            item.quantity++
            this.updateItemTotal(item)
        },
        removeToItem(item) {
            if (item.quantity > 1) {
                item.quantity--
                this.updateItemTotal(item)
            }
        },
        updateItemTotal(item) {
            item.total = item.price * item.quantity
        }

    }
})

app.mount('#app')