<template>
  <section class="uk-section" :class="_sectionClass" v-bind="_sectionAttrs">
    <div :class="_containerSize">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    containerSize: {
      type: String,
      default: ''
    },
    sectionStyle: {
      type: String,
      default: 'default'
    },
    sectionSize: {
      type: String,
      default: ''
    },
    backgroundImage: {
      type: String,
      default: ''
    },
    backgroundBlend: {
      type: String,
      default: ''
    }
  },

  computed: {
    _containerSize() {
      if (this.containerSize === 'none') {
        return ''
      }
      if (!this.containerSize) {
        return 'uk-container'
      }
      return `uk-container uk-container-${this.containerSize.toLowerCase()}`
    },
    _sectionClass() {
      const result = []

      result.push(this.class)

      if (this.sectionStyle) {
        result.push(`uk-section-${this.sectionStyle.toLowerCase()}`)
      } else {
        result.push(`uk-section-default`)
      }

      if (this.sectionSize) {
        if (this.sectionSize === 'none') {
          result.push('uk-padding-remove-vertical')
        } else if (this.sectionSize) {
          result.push(`uk-section-${this.sectionSize.toLowerCase()}`)
        }
      }

      if (this.backgroundImage) {
        result.push('uk-background-cover')
      }

      if (this.backgroundBlend) {
        result.push(`uk-background-blend-${this.backgroundBlend}`)
      }

      return result.join(' ')
    },
    _sectionAttrs() {
      const result = {}

      if (this.backgroundImage) {
        result.style = `background-image: url(${this.backgroundImage})`
        result['uk-img'] = true
      }

      return result
    }
  }
}
</script>
