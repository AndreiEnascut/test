<template>
  <div>
    <div v-if="phones && phones.length">
      <PhoneList :phones='phones'></PhoneList>
    </div>
    <div v-else>
      No phones in the DB!
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PhoneList from '@/components/PhoneList.vue';
import { Phone } from '../types'

@Component({
  components: {
    PhoneList,
  },
})
export default class Home extends Vue {
  url = 'http://localhost:3000/api/phone';
  phones: Phone[] = [];

  public async mounted() {
    const phoneListPromise = await fetch(this.url);
    this.phones = await phoneListPromise.json();
  }

}
</script>
