import { shallowMount } from '@vue/test-utils'
import { Phone } from '@/types';
import PhoneDetail from '@/components/PhoneDetail.vue'

describe('PhoneDetail.vue', () => {
  it('renders phone details with edit button', () => {
    const phone: Phone = {
      id: '1',
      type: 'smartphone',
      serial: '123',
      color: 'white',
      meta: 'data'
    };
    const wrapper = shallowMount(PhoneDetail, {
      propsData: {  phone }
    })
    expect(wrapper.text().replace(/\s/g, '')).toMatch('1smartphone123whitedataEdit');
  })

  it('hides edit button when no phone is passed', () => {
    const wrapper = shallowMount(PhoneDetail, {
      propsData: { }
    })
    expect(wrapper.text().replace(/\s/g, '')).toMatch('');
  })
})
