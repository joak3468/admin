<template>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Error 404 - Página no encontrada</title>
    
    <!-- Agrega el enlace al archivo de estilo de Bootstrap (puedes cambiar la URL si estás utilizando una descarga local) -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <!-- Estilo personalizado para la página de error 404 -->
</head>
<body>
    <div class="error-container">
        <h1 class="error-heading">404</h1>
        <p class="error-message">Página no encontrada</p>
        <p class="error-message">Lo sentimos, la página que estás buscando no existe.</p>
        <a href="/" class="btn btn-primary">Volver a la página de inicio</a>
    </div>

</body>
</html>

</template>

<script setup>

</script>

<style scoped>
        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #f8f9fa;
        }

        .error-container {
            text-align: center;
        }

        .error-heading {
            font-size: 72px;
            font-weight: bold;
            color: #dc3545;
        }

        .error-message {
            font-size: 24px;
            color: #343a40;
        }
</style>