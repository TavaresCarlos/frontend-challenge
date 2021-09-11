<template>
  <v-app>
    <v-app-bar fixed app>
      <v-toolbar-title>
        <v-img
          max-width="150"
          src="/img/logo.png"
        ></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-slide-x-transition></v-slide-x-transition>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  
}
</script>