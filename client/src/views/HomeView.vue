<template>
  <NavBar />
  <landing />
  <peligro />
</template>

<script>
// @ is an alias to /src

import landing from '../components/LandingPage.vue'
import peligro from '../components/peligroExtincion.vue'

export default {
  name: 'HomeView',
  components: {
    landing,
    peligro,
  }
}
</script>
