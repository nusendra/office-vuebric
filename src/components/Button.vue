<template>
  <button :class="type ? 'ms-Button ms-Button--' + type : 'ms-Button'">
    <span class="ms-Button-label">
      <slot/>
    </span>
    <span v-if="description" class="ms-Button-description">{{ description }}</span>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
  },
}
</script>
