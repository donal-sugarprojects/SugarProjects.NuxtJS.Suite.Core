<template>
  <div
    :class="`${isCover ? 'uk-cover-container' : ''}`"
    :uk-lightbox="isLightbox"
  >
    <a v-if="isLightbox" :href="src">
      <img :data-src="src" :alt="alt" :title="title" v-bind="_imageAttrs" />
      <canvas v-if="isCover" width="600" height="400"></canvas>
    </a>
    <sp-link v-else-if="linkUrl" :to="linkUrl">
      <img :data-src="src" :alt="alt" :title="title" v-bind="_imageAttrs" />
      <canvas v-if="isCover" width="600" height="400"></canvas>
    </sp-link>
    <template v-else>
      <img :data-src="src" :alt="alt" :title="title" v-bind="_imageAttrs" />
      <canvas v-if="isCover" width="600" height="400"></canvas>
    </template>
  </div>
</template>

<script>
import SpLink from './SpLink'

export default {
  components: {
    SpLink
  },

  props: {
    src: {
      type: String,
      required: true,
      default: ''
    },
    linkUrl: {
      type: String,
      required: false,
      default: ''
    },
    alt: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    isCover: {
      type: Boolean,
      required: false,
      default: false
    },
    isLazy: {
      type: Boolean,
      required: false,
      default: true
    },
    isLightbox: {
      type: Boolean,
      required: false,
      default: false
    },
    isSvg: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  computed: {
    _imageAttrs() {
      const result = {}

      if (this.isLazy) {
        result['uk-img'] = ''
      }

      if (this.isSvg) {
        result['uk-svg'] = ''
      }

      if (this.isCover) {
        result['uk-cover'] = ''
      }

      return result
    }
  }
}
</script>
