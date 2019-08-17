import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import login from '@/views/secret/login.vue';

describe('login-index.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(login, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
