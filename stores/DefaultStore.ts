export const useDefaultStore = defineStore('default', {
    state: () => ({
        formData: {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }),
    actions: {
        setFormData(data: FormData) {
            this.formData = data;
            console.log(this.formData)
            localStorage.setItem('appState', JSON.stringify(data))
        },
        clearFormData() {
            this.setFormData( {
                name: '',
                email: '',
                phone: '',
                message: ''
            })
            console.log(this.formData)

        },
        getFormData() {
            const savedState = localStorage.getItem('appState')
            if (savedState) {
                const response = JSON.parse(savedState);
                return response;
            }
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useDefaultStore, import.meta.hot));
}

export interface FormData{
    name: '',
    email: '',
    phone: '',
    message: ''
}
