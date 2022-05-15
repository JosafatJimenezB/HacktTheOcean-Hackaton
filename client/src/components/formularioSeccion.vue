<template>
    <div class="form-section">
        <div class="form-section_left">
            <img src="../assets/ballena-azul.png" alt="">
        </div>
        <div class="form-section_right">
            <h3>Registro</h3>
            <form action="#">
                <div>
                    <label for="">Especie:</label>
                    <input type="text">
                    <label for="">Coordenadas:</label>
                    <input type="text">
                    <label for="">País:</label>
                    <input type="text">
                    <label for="">Estado:</label>
                    <input type="text">
                    <label for="">Municipio:</label>
                    <input type="text">
                </div>
                <div>
                    <label for="">Nombre:</label>
                    <input type="text">
                    <label for="">Origen:</label>
                    <input type="text">
                    <label for="">Especialidad:</label>
                    <input type="text">
                    <label for="">Fecha:</label>
                    <input type="date">
                    <label for="">Ph del agua:</label>
                    <input type="text">
                </div>
            </form>
            <button>Quiero contribuir</button>
        </div>
    </div>
</template>



<style scoped>
    .form-section {
    width: 100%;
    height: auto;
    background-color:hsla(234,95%,64%,1);
    background-image:
    radial-gradient(at 93% 12%, hsla(234,95%,64%,1) 0px, transparent 50%),
    radial-gradient(at 9% 85%, hsla(234,95%,64%,1) 0px, transparent 50%),
    radial-gradient(at 17% 18%, hsla(176,46%,68%,1) 0px, transparent 50%),
    radial-gradient(at 72% 67%, hsla(191,93%,49%,1) 0px, transparent 50%);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.form-section_left{
    width: 65%;
    height: 98%;
}

.form-section_right {
    width: 35%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.form-section_right h3 {
    margin-bottom: 30px;
    color: #fff;
    font-size: 5.5rem;
    font-weight: 700;
    text-align: center;
}
.form-section_right form {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.form-section_right div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.form-section_right label {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
}
.form-section_right input {
    width: 160px;
    height: 22px;
    margin: 5px 0 15px;
    border-radius: 5px;
}
.form-section_right button {
    width: 130px;
    height: 30px;
    margin-bottom: 40px;
    background-color: rgba(255, 255, 255, .3);
    color: #fff;
    outline: none;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 4px 8px 0px #59491E29;
}

</style>