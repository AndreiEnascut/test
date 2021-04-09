<template>
  <div>
    blalal
    {{ phones.length}}
    <div v-for="phone in phones" :key="phone.id">
      inside for
      <PhoneListItem
        :id='phone.id'
        :type='phone.type'
        :serial='phone.serial'
        :color='phone.color'
        :meta='phone.meta'>
      </PhoneListItem>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PhoneListItem from "./PhoneListItem.vue";
import { Phone } from '../types';

@Component({
  components: {
    PhoneListItem,
  },
})
export default class PhoneList extends Vue {
  @Prop() phones!: Phone[];
}
</script>


<style scoped>
</style>
