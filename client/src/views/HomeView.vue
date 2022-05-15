<template>
  <NavBar />
  <landing />
  <peligro />
  <formulario />
  <letter />
</template>

<script>
// @ is an alias to /src

import landing from '../components/LandingPage.vue'
import peligro from '../components/peligroExtincion.vue'
import formulario from '../components/formularioSeccion.vue'
import letter from '../components/contactoSeccion.vue'

export default {
  name: 'HomeView',
  components: {
    landing,
    peligro,
    formulario,
    letter,
  }
}
</script>
