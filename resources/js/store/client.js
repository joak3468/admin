import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useClientStore = defineStore('client', {
    state: () => {
        return {
            baseURL: 'http://admin.test/api',
            csrfToken : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
    },
    actions: {
        async getClients() {
            const response  = await this.sendRequest("GET", "/clients");
            return await response.json();
        },        
        async getActiveClients() {
            const response  = await this.sendRequest("GET", "/clients_active");
            return await response.json();
        },        
        async getInactiveClients() {
            const response  = await this.sendRequest("GET", "/clients_inactive");
            return await response.json();
        },

        async getClient(content) {
            const queryParams = new URLSearchParams(content).toString();
            const response  = await this.sendRequest("GET", `/client?${queryParams}`);
            return await response.json(); 
        },

        async create(content) {
            const response  = await this.sendRequest("POST", "/create_client", content);
            return await response.json();
        },

        async getName( content ) {
            const queryParams = new URLSearchParams(content).toString();
            const response  = await this.sendRequest("GET", `/client/name?${queryParams}`);
            return await response.json(); 
        },

        async update(content) {
            const response  = await this.sendRequest("POST", "/update_client", content);
            return await response.json();
        },        
        
        async updateStatus(content) {
            const response  = await this.sendRequest("POST", "/update_client_status", content);
            return await response.json();
        },

        async sendRequest(method, path, content = null) {
            try {
                let jwt = useAuthStore().getToken();
                const url = `${this.baseURL}${path}`;
                const headers = {
                    'Content-Type': 'Applications/json',
                    'Accept': 'Application/json',
                    'X-CSRF-TOKEN' : this.csrfToken,
                    'Authorization': `Bearer ${jwt}`
                };

                const requestOptions = { method, headers };

                if (content !== null) {
                    requestOptions.body = JSON.stringify(content);
                }
                const rawResponse = await fetch(url, requestOptions);

                return rawResponse;

            } catch (error) {
                throw error;
            }
        }

    }
})