import { ref } from 'vue';

class AuthService {
    constructor() {
        this.jwt = ref('');
        this.error = ref('');
    }

    getJwt() {
        return this.jwt.value;
    }

    getError() {
        return this.error.value;
    }

    async login(email, password) {
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email, email,
                    password, password
                })
            });
            const response = await res.json();
            if(!response.status){
                this.error = response.message;
                return false;
            }

            this.jwt.value = response.token;
            return true;

        } catch(error) {
            return false;
        }
    }
}

export default AuthService;