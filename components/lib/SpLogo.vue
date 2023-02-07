<template>
  <sp-link :class="_class" :to="_href">
    <sp-image src="/logo.svg" :alt="alt" :title="title" />
    <sp-image
      class="uk-logo-inverse"
      src="/logo-inverse.svg"
      :alt="alt"
      :title="title"
    />
  </sp-link>
</template>

<script>
import SpLink from './SpLink'
import SpImage from './SpImage'

export default {
  components: {
    SpLink,
    SpImage
  },

  props: {
    href: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },

  computed: {
    _class() {
      return `uk-logo ${this.class || ''}`
    },
    _href() {
      return this.href || '/'
    }
  }
}
</script>
