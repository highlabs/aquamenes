import { shallowMount } from '@vue/test-utils'
import Input from '@/components/Input.vue'

describe('Input', () => {
  let cmp
  const InputComponent = shallowMount(Input)

  const createCmp = (propsData) => shallowMount(Input, { propsData })

  test('is a Vue instance', () => {
    expect(InputComponent.isVueInstance()).toBeTruthy()
  })

  describe('Props Validation', () => {
    cmp = createCmp({})
    it('Has no value props', () => {
      expect(cmp.props().value).toBe('')
    })
    it('Has a value props', () => {
      cmp = createCmp({ value: 'Read more' })
      expect(cmp.props().value).toBe('Read more')
    })
  })
})
