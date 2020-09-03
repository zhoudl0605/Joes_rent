<template>
  <v-card class="black white--text text-center">
    <v-card-text class="white--text title font-weight-light">
      &copy; 2019
      <strong>Powered By</strong>

      <v-btn
        href="https://www.hyperoptimal.ca"
        x-large
        class="pa-1 ma-1 font-weight-bold title"
        text
        color="white"
        target="_blank"
      >
        <span>Hyper</span>

        <span class="font-weight-regular">Optimal</span>
      </v-btn>
      <br />
      <span v-for="(icon, index) in icons" :key="index">
        <v-btn v-if="icon.show" class icon>
          <a target="_blank" :href="icon.url">
            <v-icon color="white">{{ icon.icon_name }}</v-icon>
          </a>
        </v-btn>
      </span>
    </v-card-text>
  </v-card>
</template>

<script>
import socail from '../data/social-media.json'
export default {
  data: () => ({
    icons: []
  }),
  mounted () {
    this.icons = socail['social-media']
  }
}
</script>
