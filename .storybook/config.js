import Vue from 'vue'
import { addDecorator, addParameters } from '@storybook/vue'
import Decorator from './Decorator.vue'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { action } from '@storybook/addon-actions'

/* nuxt-linkをstorybook上で検査できるようにする */
Vue.component('nuxt-link', {
  props:   ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

/* 共通SCSSを呼び出す */
addDecorator(() => ({
  components: { Decorator },
  template: `
    <decorator>
      <story slot="story"/>
    </decorator>
  `
}))

/* ViewPortプラグインの初期設定 */
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphonex'
  }
})

