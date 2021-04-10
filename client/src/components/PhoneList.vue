<template>
  <div>
    <div class="grid-container">
      <div class="grid-item">Id</div>
      <div class="grid-item">Type</div>
      <div class="grid-item">Serial</div>
      <div class="grid-item">Color</div>
      <div class="grid-item">Meta</div>
      <div class="grid-item">Action</div>
    </div>
    <div v-for="phone in phones" :key="phone.id">
      <PhoneDetail :phone="phone"> </PhoneDetail>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PhoneDetail from "./PhoneDetail.vue";
import { Phone } from "../types";

@Component({
  components: {
    PhoneDetail,
  },
})
export default class PhoneList extends Vue {
  @Prop() phones!: Phone[];
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: 30px 100px 100px 100px 100px 100px;
  font-weight: 700;
  font-size: 1.2rem;
}
</style>
