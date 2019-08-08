import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Index', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Index, { stubs: { NuxtLink: RouterLinkStub } })

    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
