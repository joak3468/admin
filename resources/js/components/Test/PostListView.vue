<template>

<div class="container">
        <ul class="post-list">
            <li v-for="post in posts" :key="post.id">
                <router-link :to="{name: 'postDetail', params: {id: post.id}}">
                    {{ post.title }}
                </router-link>
            </li>
        </ul>
</div>


</template>

<script setup>
    import PostService from '../../services/PostService.js'
    import { defineComponent, onMounted } from 'vue';

    const service = new PostService();
    const posts =  service.getPosts();

    onMounted(async () => {
        await service.fetchAll();
    })

</script>

<style scoped lang="scss">
    $white: #ccc;
    .post-list {
        width: 100%;
        height: 75px;
        padding: 20px;
        list-style-type: none;

        li {
            padding: 10px;
            width: 100%;
            border: 1px solid $white;

 
        }

        li:hover {
            background-color: darken(grey, $amount: 5%);
        }
    }

</style>