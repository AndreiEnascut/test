<template>
  <div>
    <div class="grid-container">
      <div class="grid-item">
        {{ phone.id }}
      </div>
      <div class="grid-item">
        {{ phone.type }}
      </div>
      <div class="grid-item">
        {{ phone.serial }}
      </div>
      <div class="grid-item">
        {{ phone.color }}
      </div>
      <div class="grid-item">
        {{ phone.meta }}
      </div>
      <div class="grid-item">
        <router-link :to="{ name: 'phone', params: { id: phone.id } }">Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Phone } from "../types";

@Component
export default class PhoneDetail extends Vue {
  @Prop() phone!: Phone;
}
</script>


<style scoped>
.grid-container {
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: 30px 100px 100px 100px 100px 100px;
}
</style>
