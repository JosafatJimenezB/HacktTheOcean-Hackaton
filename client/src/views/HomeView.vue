<template>
  <NavBar />
  <landing />
  <peligro />
  <formulario />
</template>

<script>
// @ is an alias to /src

import landing from '../components/LandingPage.vue'
import peligro from '../components/peligroExtincion.vue'
import formulario from '../components/formularioSeccion.vue'

export default {
  name: 'HomeView',
  components: {
    landing,
    peligro,
    formulario,
  }
}
</script>
