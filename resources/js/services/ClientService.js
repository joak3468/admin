import { ref } from 'vue';
class ClientService {
    constructor() {
        this.clients = ref([]);
        //this.client = ref({}); 
    }

    getClients() {
        return this.clients;
    }

    // getClient() {
    //     return this.client;
    // }
    
    async fetchAll() {
        try {
            const baseURL = document.querySelector('meta[name="app-url"]').getAttribute('content');
            const url = baseURL+'api/clients';
            const response = await fetch(url);
            const json = await response.json();
            this.clients.value = await json;
        } catch(error) {
            console.log(error)
        }
    }


    async create() {
        try {

        } catch(e) {
            console.log(error);
        }
    }


    // async fetchById(id) {
    //     try {
    //         const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    //         const response = await fetch(url);
    //         const json = await response.json();
    //         this.post.value = await json;
        
    //     } catch(error) {
    //         console.log(error);
    //     }
    // }
}

export default ClientService;