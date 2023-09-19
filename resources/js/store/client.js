import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useClientStore = defineStore('client', {
    state: () => {
        return {
            clients: [],
            baseURL: 'http://admin.test/api',
            csrfToken : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
    },
    actions: {
        async getClients() {
            try {
                let jwt = useAuthStore().getToken();
                const url = `${this.baseURL}/clients` ;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'Applications/json',
                        'Accept': 'Application/json',
                        'X-CSRF-TOKEN' : this.csrfToken,
                        'Authorization': `Bearer ${jwt}`
                    }
                });
                const json = await response.json();
                this.clients = await json;
                return this.clients;
            } catch(error) {
                console.log(error)
            }
        },

        async create( content ) {
            try {
                let jwt = useAuthStore().getToken();
                const url = `${this.baseURL}/create_client`;
                const rawResponse = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'Applications/json',
                        'Accept': 'Application/json',
                        'X-CSRF-TOKEN' : this.csrfToken,
                        'Authorization': `Bearer ${jwt}`
                    },
                    body: JSON.stringify(content)
                })
                const response =  await rawResponse.json();
            } catch (error) {
                console.log(error);
            }
        }

    }
})