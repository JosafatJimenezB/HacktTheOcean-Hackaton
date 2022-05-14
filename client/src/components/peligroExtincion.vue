<template>
    <div class="container">
        <h2>Especies que se encuentran en peligro</h2>
        <div class="info-container">
            <div class="text-container">
                <p>De sobra es ya conocido, que en el mar conviven numerosas especies acuáticas, bien sean animales o plantas, las cuales conforman un amplio y variado ecosistema. Sin embargo, dicho ecosistema está sufriendo importantes pérdidas, muchas de ellas irreversibles, debido a la acción humana incontrolada.
                    Hechos tales como la pesca incontrolada, la acidificación del agua, la gran contaminación que sufren los mares y océanos, y el cambio climático, del cual, somos los principales responsables, está teniendo como consecuencia que numerosas especies marinas se encuentren en peligro de extinción.</p>
            </div>
            <div class="carrusel">
                <h2>soy el carrusel</h2>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .container{
        padding: 50px 100px;
        background: #fff;
        height: 900px;
    }

    .container h2{
        font-size: 3rem;
    }

    .info-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        padding: 0 50px;
        box-sizing: border-box;
    }

    .text-container{
        font-size: 1.2rem;
        text-align: justify;
    }

    .carrusel{
        height: 100%;
        position: relative;
    }
    
</style>