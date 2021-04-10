<template>
  <div>
    <div v-if="phones && phones.length">
      <PhoneList :phones='phones'></PhoneList>
    </div>
    <div v-else>
      <p>No phones in the DB!</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import PhoneList from '../components/PhoneList.vue';
import PhoneService from '../services/PhoneService';
import { Phone } from '../types'

@Component({
  components: {
    PhoneList,
  },
})
export default class Home extends Vue {
  phones: Phone[] = [];
  phoneService = new PhoneService();

  public mounted(): void {
    this.fetchData();
  }

  @Watch('$route')
  async fetchData(): Promise<void> {
    const response = await this.phoneService.findAll();
    this.phones = response.data;
  }

}
</script>
