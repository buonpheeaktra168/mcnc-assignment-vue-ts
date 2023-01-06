import { defineStore } from "pinia";

const baseUrl = "https://api.escuelajs.co/api/v1/products";
const baseUrlSearch = "https://api.escuelajs.co/api/v1/products?q="

export const usePostStore = defineStore('product', {
    state: () => ({
        products: [],
        loading: false,
        query: ''
    }),
    getters: {
        isProducts: (state) => state.products,
        isLoading: (state) => state.loading,
    },

    actions: {
        async fetchProducts() {
            try {
                this.loading = true
                await fetch(baseUrl)
                    .then(respone => respone.json())
                    .then(data => this.products = data);

            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false
            }
        },

        async searchQueryProducts() {
            try {
                await fetch(baseUrlSearch + this.query)
                    .then(respone => respone.json())
                    .then(data => data);
            } catch (error) {
                console.log(error);
            }
        },

    }
})