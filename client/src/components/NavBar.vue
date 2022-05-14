<template>
    <div class="navbar">
        <div class="logo">
            <h2>Conservacion marina</h2>
        </div>
        <nav>
            <router-link class="nav-item" to="/">Home</router-link>
        </nav>
    </div>
</template>

<style scoped>
    .navbar{
        max-width: 1280px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
    }

    .logo{
        color: #fff;
    }
</style>