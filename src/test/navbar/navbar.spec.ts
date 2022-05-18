import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/navbar/main.vue'

describe('main.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Navbar, {
      props: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
