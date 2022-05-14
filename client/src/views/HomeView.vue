<template>
  <NavBar />
  <landing />
</template>

<script>
// @ is an alias to /src

import landing from '../components/LandingPage.vue'

export default {
  name: 'HomeView',
  components: {
    landing,
  }
}
</script>
