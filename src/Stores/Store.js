import {defineStore} from 'pinia'
export const useStore = defineStore('store', {
    state: () => ({
        count: 0
    }),
    getters: {
        doubleCount: (state) => state.count * 2
    },
    actions: {
        increment() {
            this.count++
        }
    }
})