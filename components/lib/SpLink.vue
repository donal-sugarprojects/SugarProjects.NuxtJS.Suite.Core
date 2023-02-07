<template>
  <component :is="_attrs.is" v-bind="_attrs">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: false,
      default: 'a'
    }
  },
  computed: {
    _attrs() {
      if (
        typeof this.to === 'string' &&
        this.to.match(/^(http(s)?|ftp):\/\//)
      ) {
        return {
          is: 'a',
          href: this.to,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        is: 'nuxt-link',
        to: this.to,
        tag: this.tag
      }
    }
  }
  // methods: {
  //   linkProps(url) {
  //     if (url.match(/^(http(s)?|ftp):\/\//)) {
  //       return {
  //         is: tag || 'a',
  //         href: url,
  //         target: '_blank',
  //         rel: 'noopener'
  //       }
  //     }
  //     return {
  //       is: tag || 'nuxt-link',
  //       to: url
  //     }
  //   }
  // }
}
</script>
