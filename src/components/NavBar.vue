<template>
  <v-app-bar flat>
    
    <v-app-bar-title>Computadoras</v-app-bar-title>
    <v-spacer></v-spacer>

    <v-tex-field density="compact" variant="solo" label="Search products" append-inner-icon="mdi-magnify" single-line hide-details flat></v-tex-field>
  <v-spacer></v-spacer>


  <router-link to="/Home">
      <v-btn> 
        Inicio
      </v-btn>
    </router-link>

    <router-link to="/">
      <v-btn> 
        Página 1
      </v-btn>
    </router-link>

    <router-link to="/">
      <v-btn> 
        Página 1
      </v-btn>
    </router-link>

    

  </v-app-bar>
  
</template>

<script>
export default {

}
</script>

<style>

</style>