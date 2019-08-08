import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Add from '@/pages/add.vue'

describe('Add', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Add, { stubs: { NuxtLink: RouterLinkStub } })

    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
