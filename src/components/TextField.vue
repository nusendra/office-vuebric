<template>
  <div class="ms-TextField ms-TextField--placeholder">
    <input class="ms-TextField-field" type="text" v-model="text" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      text: this.value,
    }
  },
  watch: {
    text (val) {
      this.$emit('input', val)
    },
  },
}
</script>