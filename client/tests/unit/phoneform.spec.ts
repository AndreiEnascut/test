import { shallowMount } from '@vue/test-utils'
import { Phone } from '@/types';
import PhoneForm from '@/components/PhoneForm.vue'

describe('PhoneForm.vue', () => {
  const phone: Phone = {
    id: '1',
    type: 'smartphone',
    serial: '123',
    color: 'white',
    meta: 'data'
  };

  it('renders phone form when passed', () => {
    const wrapper = shallowMount(PhoneForm, {
      propsData: { phone }
    })
    expect(wrapper.findAll('input').length).toEqual(4);
  })

  it('emits delete event when delete button is pressed', async () => {
    const wrapper = shallowMount(PhoneForm, {
      propsData: {  phone }
    })
    const btn = wrapper.find("#delete");
    await btn.trigger('click');
    const event = wrapper.emitted().phonedeleted;
    expect(event).toBeTruthy();
    expect(event).toEqual([[phone]]);
  })

  it('emits saved event with updated data when save button is pressed', async () => {
    const updatedPhone = {...phone, serial: "456", color: "black"};
    const wrapper = shallowMount(PhoneForm, {
      propsData: {  phone }
    })
    const serialInput = wrapper.find("input[name='serial']");
    serialInput.setValue(updatedPhone.serial);

    const colorInput = wrapper.find("input[name='color']");
    colorInput.setValue(updatedPhone.color)

    const btn = wrapper.find("#save");
    await btn.trigger('click');

    const event = wrapper.emitted().phonesaved;
    expect(event).toBeTruthy();
    expect(event).toEqual([[updatedPhone]]);
  })
})
