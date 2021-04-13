<template>
  <div>
    <PhoneForm :phone="phone" @phonesaved="saved" @phonedeleted="deleted"></PhoneForm>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PhoneForm from '../components/PhoneForm.vue';
import PhoneService from '../services/PhoneService';
import { Phone } from '../types'

@Component({
  components: {
    PhoneForm
  },
})
export default class Editor extends Vue {
  phone: Phone = {
        type: '',
        color: '',
        serial: '',
        meta: ''
      };
  phoneService = new PhoneService();

  public async mounted(): Promise<void> {
    if (this.$route.params.id) {
       const response = await this.phoneService.findOne(this.$route.params.id);
       this.phone = response.data;
    }
  }

  async saved(phone: Phone): void {
    if (this.$route.params.id) {
      await this.phoneService.update({id: this.$route.params.id, ...phone});
    } else {
      await this.phoneService.create(phone);
    }
    this.$router.push({name: 'home'});
  }

  async deleted(): Promise<void> {
    await this.phoneService.remove(this.$route.params.id);
    this.$router.push({name: 'home'});
  }
}

</script>

