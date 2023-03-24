<template>
  <v-app>
      <v-main>
          <v-container align-center>
              <TopBar />
              
          </v-container>
      </v-main>
      <!-- <FooterBar/> -->
  </v-app>
</template>

<script>
import TopBar from './components/TopBar.vue';
// import FooterBar from './components/FooterBar.vue';

export default {
  name: 'App',

  components: {
      TopBar: TopBar,
      // FooterBar: FooterBar,
  },

  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
</style>