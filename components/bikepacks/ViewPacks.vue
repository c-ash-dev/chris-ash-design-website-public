<template>
  <div id="photo-block">
    <b-container fluid>
      <b-row>
        <b-col v-for="pack in packs" :key="pack.id" class="column" xs="12" sm="6" md="4" lg="3">
          <b-img fluid class="bike-packs"
          :src="pack.image"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { packs } from '@/data/packdata.js'

export default {
  data() {
    return {
      packs: packs
    }
  }
  // computed: {
  //   packs() {
  //     return this.$store.getters['packs/packs'];
  //   }
  // }
}
</script>

<style scoped>

#photo-block {
  padding: 0 50px 0 50px;
}
@media only screen and (max-width: 600px) {
  #photo-block {
    padding: 0;
  }
}
.column {
  background-color: #fff;
  border: 6px solid #fff;
  padding: 0;
}

</style>
