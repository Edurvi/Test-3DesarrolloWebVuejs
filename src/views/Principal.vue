<template>
  <v-app>
    <!-- NavBar -->
    <NavBar/> 
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="12">
            <v-carousel>
              <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" cover>
              <v-row>
                <v-col cols="12" sm="6">
                  <div class="d-flex fill-height justify-center align-center" >
                    <h2 class="text-white top">{{ item.title }}</h2><br/>
                  </div>
                  <div class="d-flex fill-height justify-center align-center">
                    <p class="text text-white">{{ item.text }}</p>
                  </div>
                  <div class="d-flex fill-height justify-center align-center">
                    <v-btn style="margin-top: -120px;">Buy Now</v-btn>
                  </div>
                </v-col>
              </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-toolbar color="transparent">
            <v-toolbar-title>Popular Products</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon="mdi mdi-chevron-left"></v-btn>
            <v-btn icon="mdi mdi-chevron-left"></v-btn>
          </v-toolbar>
          <v-col cols="12" sm="12" class="mt-n10">
            <!-- popular -->
            <Popular/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script setup>
import NavBar from '../components/NavBar.vue'
import Popular from "../components/Populars.vue"

</script>
<script>
export default{
  data(){
    return{
      items:[
        {
          
          src: "7.jpg",
          title: "Surface Studio",
          text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ",
        },
        {
          src: "1.jpg",
          title: "Surface Studio",
          text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ",
        },
        {
          src: "2.jpg",
          title: "Surface Studio",
          text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ",
        },
        {
          src: "3.jpg",
          title: "Surface Studio",
          text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ",
        },
        {
          src: "4.jpg",
          title: "Surface Studio",
          text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ",
        },
        {
          src: "5.jpg",
          title: "Surface Studio",
          text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ",
        },
      ],
    }
  }
}

</script>
<style scoped>
.top {
  margin-top: 100px;
}
.text {
  margin-top: -40px;
  margin-left: 80px;
}
.top-day {
  margin-top: 120px;
}
</style>
