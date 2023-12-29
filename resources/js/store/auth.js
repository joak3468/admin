import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
<<<<<<< HEAD
            token:  $cookies.get("auth") || null,
            baseURL: 'http://admin.test/api',
        }
    },
    actions: {
        isAuth() {
            return $cookies.get('auth') != null;
        },
=======
            token: localStorage.getItem('authToken') || null,
            baseURL: 'http://admin.test/api',
            csrfToken : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
    },
    actions: {
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
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
<<<<<<< HEAD
                    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
=======
                    'X-CSRF-TOKEN' : this.csrfToken,
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
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
<<<<<<< HEAD

            this.token = response.token;
            $cookies.set("auth", response.token, "1d");
=======
            this.token = response.token;
            localStorage.setItem('authToken', response.token);
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
            return true;
        },
        logout(){
            this.token = null;
<<<<<<< HEAD
            $cookies.remove('auth')
=======
            localStorage.removeItem('authToken');
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
        }
    }
});

export default useAuthStore;