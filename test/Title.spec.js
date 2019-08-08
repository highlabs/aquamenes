import { mount } from '@vue/test-utils'
import Title from '@/components/Title.vue'

describe('Title', () => {
  let cmp
  const createCmp = (propsData) => mount(Title, { propsData })

  test('is a Vue instance', () => {
    const wrapper = mount(Title)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  describe('Props Validation', () => {
    cmp = createCmp({})
    it('Has no title props', () => {
      expect(cmp.props().title).toBe('Aquamenes')
    })
    it('Has a title props', () => {
      cmp = createCmp({ title: 'Aquamenes' })
      expect(cmp.props().title).toBe('Aquamenes')
    })
  })
})
