<template>
    <div class="header">
        <div class="header-left">
            <nav class="nav">
                <a href="/">Inicio</a>
                <a href="/jobs">Serviços</a>
                <a href="#">Historico</a>
                <a href="#">Contato</a>
            </nav>
        </div>
        <div class="header-right">
            <RouterLink to="/login">
                <button class="btn btn-outline">Logar</button>
            </RouterLink>
            <RouterLink to="/register">
                <button class="btn btn-primary" >Registrar</button>
            </RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            perfilSelecionado: "Para Autônomos"
        }
    }
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

.header-right {
    display: flex;
    align-items: center;
    gap: 12px
}


.btn {
    padding: 6px 14px;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
}

.btn-outline {
    border: 1px solid #666;
    background-color: transparent;
    color: #333;
}

.btn-outline:hover {
    background-color: #eee;
}

.btn-primary {
    background-color: #000;
    color: #fff;
    border: none;
}

.btn-primary:hover {
    background-color: #333;
}
</style>
