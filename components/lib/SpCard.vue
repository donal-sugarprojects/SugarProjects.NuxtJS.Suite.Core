<template>
  <div :class="_cardClass">
    <!-- Image Top, Left & Right -->
    <slot
      v-if="
        _hasImageSlot &&
          (_imagePosition === 'top' ||
            _imagePosition === 'left' ||
            _imagePosition === 'right')
      "
      :class="_imageClass"
      name="image"
    ></slot>
    <sp-image
      v-else-if="
        item.image &&
          item.image.url &&
          (_imagePosition === 'top' ||
            _imagePosition === 'left' ||
            _imagePosition === 'right')
      "
      :src="item.image.url"
      :class="_imageClass"
      :is-lazy="!!isImageLazy"
      :is-cover="
        !!isImageCover ||
          (_imagePosition === 'left' || _imagePosition === 'right')
      "
      :is-lightbox="!!isImageLightbox"
    />

    <!-- Header -->
    <header
      v-if="
        _hasHeaderSlot &&
          (_imagePosition === 'top' || _imagePosition === 'bottom')
      "
      class="uk-card-header"
    >
      <slot name="header"></slot>
    </header>
    <header
      v-else-if="
        item.title && (_imagePosition === 'top' || _imagePosition === 'bottom')
      "
      class="uk-card-header"
    >
      <sp-link
        v-if="item.url"
        :tag="titleTag"
        :to="item.url"
        class="uk-card-title"
      >
        <a>{{ item.title }}</a>
      </sp-link>
      <component :is="titleTag" v-else class="uk-card-title">
        {{ item.title }}
      </component>
    </header>

    <!-- Content -->
    <div v-if="_hasDefaultSlot || item.title" class="uk-card-body">
      <!-- Title -->
      <template v-if="_imagePosition === 'left' || _imagePosition === 'right'">
        <slot v-if="_hasHeaderSlot" name="header"></slot>
        <sp-link
          v-else-if="item.url && item.title"
          :tag="titleTag"
          :to="item.url"
          class="uk-card-title"
        >
          <a>{{ item.title }}</a>
        </sp-link>
        <component :is="titleTag" v-else-if="item.title" class="uk-card-title">
          {{ item.title }}
        </component>
      </template>

      <slot></slot>

      <sp-link
        v-if="
          item.url && (_imagePosition === 'left' || _imagePosition === 'right')
        "
        :class="_btnClass"
        :to="item.url"
      >
        {{ _btnTitle }}
      </sp-link>
    </div>

    <!-- Image -->
    <slot
      v-if="_hasImageSlot && _imagePosition === 'bottom'"
      :class="_imageClass"
      name="image"
    ></slot>
    <sp-image
      v-else-if="item.image && item.image.url && _imagePosition === 'bottom'"
      :src="item.image.url"
      :class="_imageClass"
      :is-lazy="!!isImageLazy"
      :is-cover="
        !!isImageCover ||
          (_imagePosition === 'left' || _imagePosition === 'right')
      "
      :is-lightbox="!!isImageLightbox"
    />

    <!-- Footer -->
    <footer
      v-if="
        _hasFooterSlot &&
          (_imagePosition === 'top' || _imagePosition === 'bottom')
      "
      class="uk-card-footer"
    >
      <slot name="footer"></slot>
    </footer>
    <footer
      v-else-if="
        item.url && (_imagePosition === 'top' || _imagePosition === 'bottom')
      "
      class="uk-card-footer"
    >
      <sp-link v-if="item.url" :class="_btnClass" :to="item.url">
        {{ _btnTitle }}
      </sp-link>
    </footer>
  </div>
</template>

<script>
import SpImage from './SpImage'
import SpLink from './SpLink'

export default {
  components: {
    SpImage,
    SpLink
  },

  props: {
    titleTag: {
      type: String,
      default: 'h2'
    },
    item: {
      type: Object,
      default: () => ({
        title: '',
        image: '',
        url: ''
      })
    },
    btnTitle: {
      type: String,
      default: ''
    },
    btnStyle: {
      type: String,
      default: ''
    },
    cardStyle: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    imagePosition: {
      type: String,
      default: 'top'
    },
    isImageLazy: {
      type: Boolean,
      required: false,
      default: true
    },
    isImageCover: {
      type: Boolean,
      required: false,
      default: false
    },
    isImageLightbox: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    _imagePosition() {
      return this.imagePosition
    },
    _cardClass() {
      const result = []

      result.push(this.class)
      result.push('uk-card')

      if (this.cardStyle) {
        if (this.cardStyle !== 'none') {
          result.push(`uk-card-${this.cardStyle}`)
        }
      } else {
        result.push('uk-card-default')
      }

      if (this.size) {
        result.push(`uk-card-${this.size}`)
      }

      // Layout
      if (this._imagePosition === 'left' || this._imagePosition === 'right') {
        result.push('uk-grid uk-grid-collapse uk-child-width-expand@s')
      }

      return result.join(' ')
    },
    _imageClass() {
      const result = []
      result.push('sp-image')
      result.push(`uk-card-media-${this._imagePosition}`)

      if (this._imagePosition === 'left' || this._imagePosition === 'right') {
        result.push('uk-width-1-3@s')
        if (this._imagePosition === 'right') {
          result.push('uk-flex-last@s')
        }
      }

      return result
    },
    _btnTitle() {
      return this.btnTitle || 'Read more'
    },
    _btnClass() {
      const result = []
      result.push('uk-button')

      if (this.btnStyle) {
        result.push(`uk-button uk-button-${this.btnStyle}`)
      } else {
        result.push('uk-button uk-button-default')
      }

      return result.join(' ')
    },
    _hasImageSlot() {
      return this.hasSlot('image')
    },
    _hasHeaderSlot() {
      return this.hasSlot('header')
    },
    _hasDefaultSlot() {
      return this.hasSlot()
    },
    _hasFooterSlot() {
      return this.hasSlot('footer')
    }
  },

  methods: {
    hasSlot(name = 'default') {
      return !!this.$slots[name] || !!this.$scopedSlots[name]
    }
  }
}
</script>
