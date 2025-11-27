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
        }
    },
    methods: {
        openModal(item) {
            this.selectedItem = { ...item, quantity: 1 }
        },
        closeModal() {
            this.selectedItem = null
        }
    }
})

app.mount('#app')