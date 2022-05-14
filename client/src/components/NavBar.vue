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

    .navbar.scrolled{
        background-color: var(--bg-color-transparent);
        box-shadow: 0 5px 20px 0.1px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(20px);
    }

    .logo{
        color: #fff;
    }

</style>