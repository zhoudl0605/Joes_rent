<template>
  <v-container class="mt-10">
    <v-row no-gutters justify="center" align="stretch">
      <v-col sm="12" md="6" lg="6" xl="6">
        <v-row no-gutters justify="center" align="stretch">
          <v-col id="title_outside" cols="12" class="title font-weight-bold">
            <span id="title">ABOUT US</span>
          </v-col>
          <v-col cols="12">
            <p style="color:black" class="display-1 font-weight-bold">{{title}}</p>
          </v-col>
          <v-col cols="12">
            <span id="content">{{content}}</span>
          </v-col>
        </v-row>
        <span class="ma-4 d-flex d-md-none" />
      </v-col>
      <v-spacer class="d-none d-md-flex"></v-spacer>
      <v-col sm="12" md="5" lg="5" xl="5" id="border">
        <v-img :src="image" style="object-fit: cover; height: 100%; width: 100%" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      JSON_: null,
      title: null,
      content: null,
      image: require('../data/main_page.json').about.image
    }
  },
  mounted () {
    this.JSON_ = require('../data/main_page.json').about
    this.title = this.JSON_.title
    this.content = this.JSON_.content
  }
}
</script>

<style scoped>
#boder {
  border: #676767 10px;
}
#title {
  background-color: #bda87f;
  padding: 5px 14px 5px 14px;
  color: white;
}
#title_outside {
  border-bottom: 2px #bda87f solid;
  margin-bottom: 20px;
}
#content {
  color: #676767;
  line-height: 2;
}
</style>
