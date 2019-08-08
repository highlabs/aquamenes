import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Button', () => {
  let cmp
  const createCmp = (propsData) => mount(Button, { propsData })

  test('is a Vue instance', () => {
    const wrapper = mount(Button)
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
  })

  describe('Events', () => {
    beforeEach(() => {
      cmp = createCmp()
    })

    it('call handleClick when click in button', () => {
      const handleClick = jest.fn()
      cmp.setMethods({ handleClick })
      cmp.find('button').trigger('click')

      expect(handleClick).toBeCalled()
    })

    it('verify if click is emitted', () => {
      const stub = jest.fn()
      cmp.vm.$on('click', stub)
      cmp.vm.handleClick()

      expect(stub).toBeCalled()
    })
  })
})
