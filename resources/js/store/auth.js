import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            token: localStorage.getItem('authToken') || null,
            baseURL: 'http://admin.test/api',
            csrfToken : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
    },
    actions: {
        getToken() {
            return this.token;
        },
        async register (name, email, password) {
            const uri = `${this.baseURL}/auth/register`;
            const rawResponse = fetch(uri,{
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                    'Accept': 'Application/json',
                },
                body: JSON.stringify({
                    'name': name,
                    'email': email,
                    'password': password
                })
            });
            const response = await rawResponse.json();

        },
        async login(email, password) {
            const uri = `${this.baseURL}/login`;
            const rawResponse = await fetch(uri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                    'Accept': 'Application/json',
                    'X-CSRF-TOKEN' : this.csrfToken,
                },
                body: JSON.stringify({
                    'email': email,
                    'password': password
                })
            });

            const response = await rawResponse.json();

            if(!response.status){
                this.token = null;
                return false;
            }
            this.token = response.token;
            localStorage.setItem('authToken', response.token);
            return true;
        },
        logout(){
            this.token = null;
            localStorage.removeItem('authToken');
        }
    }
});

export default useAuthStore;