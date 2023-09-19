<template>
    <h1>Blog Section</h1>
    <ul><router-link :to="{name: 'post', params: {id: 1}}">Primer Post</router-link></ul>
    <ul><router-link :to="{name: 'post', params: {id: 2}}">Segundo Post</router-link></ul>
    <ul><router-link :to="{name: 'post', params: {id: 3}}">Tercer Post</router-link></ul>
</template>
