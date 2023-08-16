export const useDefaultStore = defineStore('DefaultStore', {
    state: () => {
        return {
            count: 0,
        };
    },
    getters: {},
    actions: {
        addTodo(text) {
            // you can directly mutate the state
            this.todos.push({ text, id: this.nextId++, isFinished: false })
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useDefaultStore, import.meta.hot));
}
