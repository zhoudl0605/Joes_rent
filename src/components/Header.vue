<template>
  <div>
    <v-navigation-drawer v-model="drawer" :value="drawer" temporary app>
      <v-list-item>
        <v-list-item-content>
          <router-link dark color="success" to="/">
            <img
              src="https://static.wixstatic.com/media/95bc02_8313a4d8cad8469ebcb9329ddb9c509a.png/v1/fill/w_620,h_370,al_c,q_80,usm_0.66_1.00_0.01/95bc02_8313a4d8cad8469ebcb9329ddb9c509a.webp"
              width="40"
              alt="logo image"
              height="40px"
            />
          </router-link>

          <v-toolbar-title @click="pushRoute('/')" class="headline text-uppercase">
            <span>Joe's rentals</span>
          </v-toolbar-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item link>
          <v-btn
            class="text-capitalize header-button elevation-0 mx-2"
            rounded
            text
            large
            to="/listing/residential"
          >Residential</v-btn>
        </v-list-item>
        <v-list-item link>
          <v-btn
            class="text-capitalize header-button elevation-0 mx-2"
            rounded
            text
            large
            to="/listing/commercial"
          >Commercial</v-btn>
        </v-list-item>
        <v-list-item link>
          <v-btn
            class="text-capitalize header-button elevation-0 mx-2"
            rounded
            text
            large
            to="/listing/wearhouse"
          >Wearhouse</v-btn>
        </v-list-item>
        <v-list-item link>
          <v-btn
            class="text-capitalize header-button elevation-0 mx-2"
            rounded
            large
            text
            @click="toAbout"
          >About</v-btn>
        </v-list-item>
        <v-list-item link>
          <v-btn
            class="text-capitalize header-button elevation-0 mx-2"
            rounded
            large
            text
            to="/contact"
          >Contact Us</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <span class="d-none d-md-flex">
      <v-toolbar>
        <router-link dark color="success" to="/">
          <img
            src="https://static.wixstatic.com/media/95bc02_8313a4d8cad8469ebcb9329ddb9c509a.png/v1/fill/w_620,h_370,al_c,q_80,usm_0.66_1.00_0.01/95bc02_8313a4d8cad8469ebcb9329ddb9c509a.webp"
            width="40"
            alt="logo image"
            height="40px"
          />
        </router-link>

        <v-toolbar-title v-on:click="pushRoute('/')" class="headline text-uppercase">
          <span>Joe's rentals</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn to="/listing/residential" text>
          <span class="mr-2">Residential</span>
        </v-btn>

        <v-btn to="/listing/commercial" text>
          <span class="mr-2">Commercial</span>
        </v-btn>
        <v-btn to="/listing/wearhouse" text>
          <span class="mr-2">Wearhouse</span>
        </v-btn>

        <v-btn @click="toAbout" text>
          <span class="mr-2">About Us</span>
        </v-btn>

        <v-btn to="/contact" text>
          <span class="mr-2">Contact us</span>
        </v-btn>
      </v-toolbar>
    </span>
    <span class="d-md-none">
      <v-app-bar>
        <router-link dark color="success" to="/">
          <img
            src="https://static.wixstatic.com/media/95bc02_8313a4d8cad8469ebcb9329ddb9c509a.png/v1/fill/w_620,h_370,al_c,q_80,usm_0.66_1.00_0.01/95bc02_8313a4d8cad8469ebcb9329ddb9c509a.webp"
            width="40"
            alt="logo image"
            height="40px"
          />
        </router-link>

        <v-toolbar-title v-on:click="pushRoute('/')" class="headline text-uppercase">
          <span>Joe's rentals</span>
        </v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
    </span>
  </div>
</template>

<script>
import router from '../router'
import VueScrollTo from 'vue-scrollto'
export default {
  data () {
    return {
      drawer: false
    }
  },
  name: 'Header',
  methods: {
    pushRoute: function (params) {
      this.$router.push(params)
    },
    toAbout () {
      if (this.$route.path === '/') VueScrollTo.scrollTo('#about')
      else router.push('/#about')
    }
  }
}
</script>
<style scoped>
</style>
