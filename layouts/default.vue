<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title>
        nave.rs
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-slide-x-transition>
        <v-btn
          text
          color="primary"
          to="/logout"
          v-if="authenticated"
          >
          SAIR
        </v-btn>
      </v-slide-x-transition>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    authenticated: false
  }),
  /*computed: {
    authenticated(){
      return this.$store.getters['Auth/authenticated']
    },
  }*/
}
</script>