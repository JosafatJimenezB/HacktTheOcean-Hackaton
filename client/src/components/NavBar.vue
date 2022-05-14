<template>
<div class="container">
    <div class="navbar">
        <div class="logo">
            <h2>Conservacion marina</h2>
        </div>
        <nav>
            <router-link class="nav-item" to="/">Home</router-link>
        </nav>
    </div>
</div>
</template>

<style scoped>

    .container{
        background: rgb(77,93,251);
        background: linear-gradient(45deg, rgba(77,93,251,1) 0%, rgba(8,200,246,1) 1%, rgba(77,93,251,1) 100%);
    }

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