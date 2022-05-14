<template>
    <div class="container">
        <div class="text-container">
            <h1>Protejamos la fauna marina</h1>
            <p>Únete a la lucha por salvar a estas especies en peligro</p>
            <a href="#">Quiero Contribuir</a>
        </div>
        <div class="img-container">
            <img src="../assets/tortuga-carey.png" alt="">
        </div>
    </div>
</template>

<style scoped>
    .container{
        width: 100%;
        height: calc(100vh - 60px);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0 50px;
        gap: 1rem;;
        box-sizing: border-box;
    }

    .text-container{
        color: #fff;
        padding: 150px 100px 0;
    }

    .text-container h1{
        text-align: start;
        font-size: 4rem;
    }

    .text-container p{
        text-align: start;
        font-size: 1.5rem;
        margin-bottom: 50px;
    }

    .text-container a{
        text-decoration: none;
        color: #fff;
        font-size: 1.3rem;
        padding: 10px 20px;
        border-radius: 5px;
        background: rgba(255,255,255,0.3);
        backdrop-filter: blur(20px);
        transition: background 0.3s ease-in-out;
    }

    .text-container a:hover{
        background: rgba(255,255,255,0.5);
    }

    .img-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img-container img{
        width: 90%;
    }


</style>