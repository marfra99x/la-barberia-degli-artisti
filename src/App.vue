<template>
  <v-app>
      <v-main>
              <router-view />
      </v-main>
      <FooterBar/>
  </v-app>
</template>

<script>
import FooterBar from './components/FooterBar.vue';

export default {
  name: 'App',

  components: {
      FooterBar: FooterBar,
  },

  methods: {
  },
}
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
</style>