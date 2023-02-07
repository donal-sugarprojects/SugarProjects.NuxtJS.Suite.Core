<template>
  <ul class="uk-breadcrumb">
    <li><sp-link to="/">Home</sp-link></li>
    <li v-for="(item, index) in _items" :key="index">
      <span v-if="items.length - 1 === index || item.disabled">{{
        item.title
      }}</span>
      <sp-link v-else :to="item.url">{{ item.title }}</sp-link>
    </li>
  </ul>
</template>

<script>
import SpLink from './SpLink'

export default {
  components: {
    SpLink
  },

  props: {
    items: {
      type: Array,
      required: true,
      default: () => [
        {
          title: '',
          url: '',
          disabled: false
        }
      ]
    }
  },

  computed: {
    _items() {
      return this.items ? this.items.filter(i => !!i.title) : []
    }
  }
}
</script>
