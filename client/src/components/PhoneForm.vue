<template>
  <div>
    <input name="type" v-model="phone.type" placeholder="type" />
    <input name="serial" v-model="phone.serial" placeholder="serial" />
    <input name="color" v-model="phone.color" placeholder="color" />
    <input name="meta" v-model="phone.meta" placeholder="meta" />
    <button id="delete" v-on:click="$emit('phonedeleted', phone)">Delete</button>
    <button id="save" v-on:click="$emit('phonesaved', phone)">Save</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Phone } from "../types";

@Component
export default class PhoneForm extends Vue {
  @Prop() phone!: Phone;
}
</script>


<style scoped>
input {
  max-width: 300px;
  display: block;
  margin: 20px;
  padding: 5px;
}
button {
  width: 50px;
  margin-left: 20px;
  margin-right: 40px;
}
</style>
