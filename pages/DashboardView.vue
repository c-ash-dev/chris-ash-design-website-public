<template>
  <div class="dashboard">
    <h1>Stay Tuned for Some Interesting Data...with D3.js Visualizations</h1>
    <b-container fluid class="main-graph">
      <b-row>
        <!-- <b-col class="column"><ChartOne class="box"/></b-col> -->
        <b-col class="column"><ChartTwo class="box"/></b-col>
      </b-row>
    </b-container>
    <!-- <b-container fluid>
      <b-row>
        <b-col class="column" sm="12" lg="4"><div class="box">1 of 3</div></b-col>
        <b-col class="column" sm="12" lg="4"><div class="box">2 of 3</div></b-col>
        <b-col class="column" sm="12" lg="4"><div class="box">3 of 3</div></b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col class="column" sm="12" lg="6"><div class="box">1 of 2</div></b-col>
        <b-col class="column" sm="12" lg="6"><div class="box">2 of 2</div></b-col>
      </b-row>
    </b-container> -->
  </div>
</template>

<script>
import ChartOne from '@/components/dashboard/ChartOne.vue';
import ChartTwo from '@/components/dashboard/ChartTwo.vue'

export default {
  components: {
    ChartOne,
    ChartTwo
  }
}
</script>

<style scoped>
.dashboard {
  background-color: #f7f7f7;
}
/* Try to figure out a better way to do spacing - Bootstrap grid doesn't allow margins */
.column {
  background-color: #fff;
  border: 10px solid #f7f7f7;
  padding: 0;
}

.box {
  padding: 10px;
  border: 2px solid #e6e9ed;
  width: 100%;
  height: 100%;
}

.main-graph {
  border-top: 5px solid #2c3e50;
}

</style>
