<template>
    <div class="header">
        <div class="header-left">
            <nav class="nav">
                <a href="/">Inicio</a>
                <a href="#">Serviços</a>
                <a href="#">Historico</a>
                <a href="#">Contato</a>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginHeaderComponent'
}
</script>

<style>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-left {
    display: flex;
    align-items: center;
    gap: 24px;
}

.nav {
    display: flex;
    gap: 20px
}

.nav a {
    text-decoration: none;
    color: #444;
    font-weight: 500;
}

.nav a:hover {
    color: #000
}

</style>
