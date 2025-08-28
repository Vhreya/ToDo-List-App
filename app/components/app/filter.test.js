import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { AppFilter } from '#components'

describe('AppFilter.vue', () => {

  test('sollte drei Buttons rendern', () => {
    const wrapper = mount(AppFilter)
    const buttons = wrapper.findAll('button')
    expect(buttons).toHaveLength(3)
  })
})