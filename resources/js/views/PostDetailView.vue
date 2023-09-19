<template>
    <h1>Post Detail</h1>
    <div class="post-container">
        <div class="post-card">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>

        <router-link :to="{name: 'postList'}">Back</router-link>
    </div>
</template>

<script setup>
    import PostService from '@/services/PostService';
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const service = new PostService();
    const post = service.getPost();

    onMounted(async() => {
        const route = useRoute();
        let elm = route.params.id;
        await service.fetchById(elm);
    });
</script>

<style scoped>

</style>