import { mount } from '@vue/test-utils'
import Link from '@/components/Link.vue'

describe('Link', () => {
  let cmp
  const createCmp = (propsData) => mount(Link, { propsData })

  test('is a Vue instance', () => {
    const wrapper = mount(Link)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  describe('Props Validation', () => {
    cmp = createCmp({})
    it('Has no title props', () => {
      expect(cmp.props().title).toBe('')
    })
    it('Has a title props', () => {
      cmp = createCmp({ title: 'Read more' })
      expect(cmp.props().title).toBe('Read more')
    })

    it('Has no url props', () => {
      expect(cmp.props().url).toBe('/')
    })

    it('Has a url props', () => {
      cmp = createCmp({ url: '/add' })
      expect(cmp.props().url).toBe('/add')
    })
  })
})
