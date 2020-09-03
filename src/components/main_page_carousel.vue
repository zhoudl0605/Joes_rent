<template>
  <v-carousel height="650" hide-delimiter-background show-arrows-on-hover cycle>
    <v-carousel-item v-for="(item,i) in items" v-bind:key="i" :src="item.image">
      <v-row
        class="fill-height text-center"
        align="center"
        justify="center"
        id="imagecontent"
        align-content="center"
        no-gutters
      >
        <v-col cols="12">
          <p class="display-3 font-weight-medium">{{item.title}}</p>
        </v-col>
        <v-col cols="12">
          <div id="space"></div>
        </v-col>
        <v-col lg="5" md="7" sm="10" xs="12">
          <br />
          <p>{{item.content}}</p>
        </v-col>
        <v-col cols="12">
          <v-btn rounded :to="item.link">Explore</v-btn>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  props: {
    items: Array
  }
}
</script>
<style scoped>
#imagecontent {
  background-color: #2d2d2d5d;
}

p {
  color: white;
}

#space {
  height: 5px;
  width: 25vw;
  margin: auto;
  background-color: #ffffff5d;
}
</style>
