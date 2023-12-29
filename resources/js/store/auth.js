import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            token:  $cookies.get("auth") || null,
            baseURL: 'http://admin.test/api',
        }
    },
    actions: {
        isAuth() {
            return $cookies.get('auth') != null;
        },
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
                    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
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
            $cookies.set("auth", response.token, "1d");
            return true;
        },
        logout(){
            this.token = null;
            $cookies.remove('auth')
        }
    }
});

export default useAuthStore;