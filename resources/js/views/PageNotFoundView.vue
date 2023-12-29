<template>
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="error-container">
                <h1 class="error-heading">404</h1>
                <p class="error-message">Página no encontrada</p>
                <p class="error-message">Lo sentimos, la página que estás buscando no existe.</p>
                <a href="/" class="btn btn-primary">Volver a la página de inicio</a>
            </div>
        </div>

        
    </template>
    
    <script setup>
    </script>
    
    <style scoped>
            .error-container {
                text-align: center;
            }
    
            .error-heading {
                font-size: 72px;
                font-weight: bold;
                color: #000000;
            }
    
            .error-message {
                font-size: 24px;
                color: #343a40;
            }
    </style>