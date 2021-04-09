<template>
  <div>

    litst item
    <dl>
      <dt>Type</dt>
      <dd> {{ type }} </dd>

     <dt>Serial</dt>
      <dd> {{ serial }} </dd>

      <dt>Color</dt>
      <dd> {{ color }} </dd>

      <dt>Meta</dt>
      <dd> {{ meta }} </dd>
    </dl>


    <router-link :to="{ name: 'phone', params: { id: id }}">Edit</router-link>
    <router-link :to="{ name: 'phone', params: { id: id }}">Delete</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PhoneListItem extends Vue {
  @Prop() id!: string;
  @Prop() type!: string;
  @Prop() serial!: string;
  @Prop() color!: string;
  @Prop() meta!: string;
}
</script>


<style scoped>
</style>
