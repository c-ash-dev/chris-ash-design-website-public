<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col class="column" sm="12" lg="3">
          <div class="box">
            <h3>Design Your Bike Pack</h3>
            <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
              <b-form-group label="Pack Type">
                <b-form-select
                v-model="form.type"
                :options="types"
                required
                ></b-form-select>
              </b-form-group>
              <b-form-group v-if="bagType === 'Frame Pack'" label="Pack Size">
                <b-form-select
                v-model="form.size"
                :options="sizes"
                required
                ></b-form-select>
              </b-form-group>
              <b-form-group v-if="bagType === 'Triangle Pack'" label="End Color">
                <b-form-select
                v-model="form.endColor"
                :options="colors"
                required
                ></b-form-select>
              </b-form-group>
              <b-form-group v-if="bagType === 'Frame Pack'" label="Side Color">
                <b-form-select
                v-model="form.sideColor"
                :options="colors"
                required
                ></b-form-select>
              </b-form-group>
              <b-form-group v-if="bagType === 'Frame Pack'" label="Perimeter Color">
                <b-form-select
                v-model="form.perimeterColor"
                :options="colors"
                required
                ></b-form-select>
              </b-form-group>
              <b-form-group v-if="bagType === 'Frame Pack'" label="Zipper Guard Color">
                <b-form-select
                v-model="form.zipperGuardColor"
                :options="colors"
                required
                ></b-form-select>
              </b-form-group>
              <b-form-group v-if="bagType === 'Frame Pack'" label="Inner Top Tube Length (inches)">
                <b-form-input
                v-model="form.topTubeLength"
                placeholder="Example: 17.25"
                required
                />
              </b-form-group>
              <b-form-group v-if="bagType === 'Frame Pack'" label="Inner Down Tube Length (inches)">
                <b-form-input
                v-model="form.downTubeLength"
                placeholder="Example: 20.5"
                required
                />
              </b-form-group>
              <b-form-group v-if="bagType === 'Frame Pack'" label="Inner Seat Tube Length (inches)">
                <b-form-input
                v-model="form.seatTubeLength"
                placeholder="Example: 16.75"
                required
                />
              </b-form-group>
              <b-button v-b-modal.modal-1 type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
            <PackCompleteModal />
          </div>
        </b-col>
        <b-col class="column" sm="12" lg="9">
          <div class="box">
            <h3>Your Perfect Bike Pack</h3>
            <PackPlaceholder v-if="bagType === ''"/>
            <Half
            v-if="bagSize === 'Half'"
            :sideColor="form.sideColor"
            :perimeter="form.perimeter"
            :zipperGuard="form.zipperGuardColor"
            />
            <TwoThirds
            v-if="bagSize === 'Two Thirds'"
            :sideColor="form.sideColor"
            :perimeter="form.perimeterColor"
            :zipperGuard="form.zipperGuardColor"
            />
            <Full
            v-if="bagSize === 'Full'"
            :sideColor="form.sideColor"
            :perimeter="form.perimeterColor"
            :zipperGuard="form.zipperGuardColor"
            />
          </div>
        </b-col>
        <!-- <b-col class="column" sm="12" lg="9">
          <div class="box">
            <h3>Your Perfect Bike Pack</h3>
            <svg height="210" width="500">
              <defs>
                <clipPath id="sideOne">
                  <polygon points="100,10 400,10 110,210" :style="{fill: form.sideOneColor, stroke:form.perimeterColor}" style="stroke-width:6"/>
                </clipPath>
              </defs>
              <image width="600" height="600" :href="fabricChoice" clip-path="url(#sideOne)"/>
            </svg>
            <svg height="210" width="500">
              <polygon points="400,10 100,10 390,210" :style="{fill: form.sideTwoColor, stroke:form.perimeterColor}" style="stroke-width:6"/>
            </svg>
            <p> {{ getFabrics }} </p>
          </div>
        </b-col> -->
        <!-- <div>
          <svg height="500" width="500">
            <defs>
              <clipPath id="myCircle">
                <circle cx="250" cy="250" r="100" stroke="green" stroke-width="3" fill="#FFF"/>
              </clipPath>
            </defs>
            <image width="600" height="600" :href="fabric.image" clip-path="url(#myCircle)"/>
          </svg>
        </div> -->
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { fabric } from '@/data/fabricdata.js';
import Half from '@/components/bikepacks/Half.vue';
import TwoThirds from '@/components/bikepacks/TwoThirds.vue';
import Full from '@/components/bikepacks/Full.vue';
import PackPlaceholder from '@/components/bikepacks/PackPlaceholder.vue';
import PackCompleteModal from '@/components/bikepacks/PackCompleteModal.vue';

export default {
  components: {
    Half,
    TwoThirds,
    Full,
    PackPlaceholder,
    PackCompleteModal
  },

  data() {
    return {
      form: {
        type: '',
        size: '',
        topTubeLength: '',
        downTubeLength: '',
        seatTubeLength: '',
        sideColor: '#ffffff',
        endColor: '#ffffff',
        zipperGuardColor: '#ffffff',
        perimeterColor: '#ffffff'
      },
      colors: ['Turquoise', 'Blue', 'Navy', 'Indigo', 'Orange', 'Red', 'Gold', 'Olive', 'Tan', 'Gray', 'Black'], // #2c3558 (Blue) #332661 (Purple) #605c5b (Gray) #1e8695 (Teal) #865f35 (Coyote Tan) #3294d4 (Light Blue) #f5da57 (Yellow) #eb3929 (Red)
      types: ['Frame Pack'], // 'Triangle Pack'
      sizes: ['Full', 'Two Thirds'], // 'Half'
      fabric: fabric,
      index: 0,
      fabricChoice: fabric[0].image
      // uom: ['inches', 'centimeters']
    }
  },
  computed: {
    bagType() {
      if (this.form.type === 'Frame Pack') {
        return 'Frame Pack';
      } else if (this.form.type === 'Triangle Pack') {
        return 'Triangle Pack';
      } else if (this.form.type === 'Feed Pack') {
        return 'Feed Pack';
      } else {
        return '';
      }
    },
    bagSize() {
      if (this.form.size === 'Full') {
        return 'Full';
      } else if (this.form.size === 'Two Thirds') {
        return 'Two Thirds';
      } else if (this.form.size === 'Half') {
        return 'Half';
      } else {
        return '';
      }
    },
    // getFabrics() {
    //   return this.fabric;
    //   console.log(this.fabric)
    // }

    // getFabricColor() {
    //   for (let i = 0; i < fabric.length; i++) {
    //     return fabric[i].color;
    //     console.log(fabric[i].color)
    //   }
    // }
  },

  methods: {
    onSubmit() {
      console.log('Success, your order has been submitted')
      // console.log(this.form.sideColor)
    },
    onReset() {
      this.form.type = '',
      this.form.size = '',
      this.form.topTubeLength = '',
      this.form.downTubeLength = '',
      this.form.seatTubeLength = '',
      this.form.sideColor = '#ffffff',
      this.form.endColor = '#ffffff',
      this.form.zipperGuardColor = '#ffffff',
      this.form.perimeterColor = '#ffffff'
    }
  },
  // beforeMount() {
  //   for (let i = 0; i < fabric.length; i++) {
  //     // return fabric[i].color;
  //     // console.log(fabric[i].color)
  //     this.colors.push(i, fabric[i].color)
  //     // console.log(i, fabric[i].color)
  //   }
  // }
}
</script>

<style scoped>
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
</style>
