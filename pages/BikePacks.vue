<template>
  <div>
    <div id="pack-menu">
      <h1>Welcome to the magical world of bike packs!</h1>
      <div>
        <b-button-group>
          <b-button variant="success" @click="setSelection('build')">Build a Pack</b-button>
          <b-button variant="info" @click="setSelection('view')">View Packs</b-button>
        </b-button-group>
      </div>
    </div>
      <ViewPacks v-if="display === 'view'"/>
      <BuildPack v-if="display === 'build'"/>
  </div>
</template>

<script>
import ViewPacks  from '../components/bikepacks/ViewPacks.vue';
import BuildPack  from '../components/bikepacks/BuildPack.vue';

export default {
  components: {
    ViewPacks,
    BuildPack
  },

  data() {
    return {
      display: 'view'
    }
  },

  methods: {
    setSelection(selection) {
      this.display = selection
    }
  }
}
</script>


<style scoped>

@media screen and (max-width: 800px) {
  h1 {
    font-size: 1.3em;
  }
}

#pack-menu {
  padding: 10px;
}

</style>

