import { shallowMount } from '@vue/test-utils'
import PhoneList from '@/components/PhoneList.vue'

describe('PhoneList.vue', () => {
  it('renders table header', () => {
    const wrapper = shallowMount(PhoneList, {
      propsData: { }
    })
    expect(wrapper.text().replace(/\s/g, '')).toMatch('IdTypeSerialColorMetaAction');
  })
})
