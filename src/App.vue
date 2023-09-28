<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data: () => ({
    //
  }),
});
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  /******** 1060px ********/
  @media only screen and (max-width: 66.25em) {
    html {
      font-size: 59.37%;
    }
  }

  /******** 700px ********/
  @media only screen and (max-width: 45.625em) {
    html {
      font-size: 52%;
    }
  }

  /******** 500px ********/
  @media only screen and (max-width: 31.25em) {
    html {
      font-size: 43.75%;
    }
  }

  /******** 350px ********/
  @media only screen and (max-width: 21.875em) {
    html {
      font-size: 40%;
    }
  }
</style>