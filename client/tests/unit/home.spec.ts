import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('renders message no phones in the db', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.text()).toMatch('No phones in the DB!');
  })
})
